"use client"

import { Constants } from "@/constants/constants";
import { useFormStatus } from "react-dom";
import { login } from "./login.action";

const LoginPage = () => {

    return (
    <div className="w-full max-w-lg mx-auto">
        <div className="text-xl font-bold text-center mt-20">
            <img src="logo-dark.png" width="300px" className="m-auto" />
            <div className="text-xl">iBOP - {Constants.AppName}</div>
        </div>
        <form className="my-4 space-y-4 md:space-y-6 mx-auto" action={login}>
            <LoginForm/>
        </form>
    </div>
    )
}

const LoginForm = () => {

    const { pending, data, method, action } = useFormStatus();

    return (
        <>
            <div>
                <input 
                type="text" 
                name="username" 
                id="username" 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 " 
                placeholder="Username" />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
            </div>

            <button 
                type="submit" 
                className="w-full bg-primary-950 disabled:bg-primary-800 hover:bg-primary-800 transition-all text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={pending}
            >
                Sign in
            </button>
        </>
    )
}

export default LoginPage;