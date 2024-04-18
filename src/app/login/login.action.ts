'use server'

import { Constants } from "@/constants/constants"
import { AuthService, LoginResponse } from "@/services/auth-service/auth-service"
import { UserDataSession } from "@/services/iron-session/iron-session.type"
import { IronSession, getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export interface LoginActionResponse{
    success: boolean
    message: string
}

export async function login(formData: FormData) : Promise<LoginActionResponse>{
    try{
        const authService = new AuthService('');

        const username = formData.get('username') as string || '';
        const password = formData.get('password') as string || '';

        console.log( username, password )
        const response: LoginResponse = await authService.login(username, password)
        console.log(`login response `, response)

        if(response.status?.toLowerCase() !== 'y'){
            response.message = 'ไม่สามารถเข้าสู่ระบบได้ กรุณาตรวจสอบ Username และ Password ให้ถูกต้อง หรือติดต่อฝ่าย IT'
            return { success: false, message: response.message };
        }

        console.log(`Constants.IronSessionPassword`, Constants.IronSessionPassword)
        console.log(await cookies())

        const session: IronSession<UserDataSession> = await getIronSession(await cookies(), {
            password: Constants.IronSessionPassword,
            cookieName: 'user',
            cookieOptions:{
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            }
        })

        session.userName = response.sAMAccountName;
        session.email = response.email;
        session.displayName = response.displayName;
        session.employeeID = response.employeeID;
        session.departmentNumber = response.departmentNumber;
        session.departmentName = response.department;

        await session.save()
        redirect(`/`)
        
    }catch(e){
        throw e;
    }
}


