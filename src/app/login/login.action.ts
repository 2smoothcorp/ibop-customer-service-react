'use server'

import { Constants } from "@/constants/constants"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login(formData: FormData){
    cookies().set('user', 'TEST_FROM_LOGIN')
    redirect(`${Constants.AppCode}`)
}