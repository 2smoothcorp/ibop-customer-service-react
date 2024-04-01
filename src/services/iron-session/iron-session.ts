import { Constants } from "@/constants/constants"
import { UserDataSession } from "@/services/iron-session/iron-session.type"
import { IronSession, getIronSession, sealData } from "iron-session"
import { cookies } from "next/headers"
import { LoginResponse, SearchUserDirectoryResponse } from "../auth-service/auth-service"
import { NextResponse } from "next/server"

const setUserDataInMiddleware = async (response: NextResponse, userData: LoginResponse | SearchUserDirectoryResponse) => {
    const session: IronSession<UserDataSession> = await getIronSession(await cookies(), {
        password: Constants.IronSessionPassword,
        cookieName: 'user',
        cookieOptions:{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        }
    })

    session.userName = userData.sAMAccountName;
    session.email = userData.email;
    session.displayName = userData.displayName;
    session.employeeID = userData.employeeID;
    session.departmentNumber = userData.departmentNumber;
    session.departmentName = userData.department;

    const sessionData = await sealData(session, { password: Constants.IronSessionPassword });
    return sessionData;
}

const setUserData = async (userData: LoginResponse | SearchUserDirectoryResponse) => {
    const session: IronSession<UserDataSession> = await getIronSession(await cookies(), {
        password: Constants.IronSessionPassword,
        cookieName: 'user',
        cookieOptions:{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        }
    })

    session.userName = userData.sAMAccountName;
    session.email = userData.email;
    session.displayName = userData.displayName;
    session.employeeID = userData.employeeID;
    session.departmentNumber = userData.departmentNumber;
    session.departmentName = userData.department;

    //await session.save()
}

const getEmployeeId = async () => {
    const session: IronSession<UserDataSession> = await getIronSession(await cookies(), {
        password: Constants.IronSessionPassword,
        cookieName: 'user',
        cookieOptions:{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        }
    })

    return session.employeeID;
}

export const ironSessionService = {
    getEmployeeId,
    setUserData,
    setUserDataInMiddleware
}