"use client"

import { Constants } from "@/constants/constants";
import { login } from "./login.action";
import { useFormState } from "react-dom";
import { useEffect } from "react";

export const LoginPage = () => {

    const [createPostState, createPostAction] = useFormState(login, {
        message: '',
        success: false
    })

    useEffect(() => {
        if (createPostState.success) {
          alert("Post created!")
        }
    
        if (createPostState.message) {
          alert(createPostState.message)
        }
      }, [createPostState])
      
    return (
    <div className="w-full max-w-lg mx-auto">
        <div className="text-xl font-bold text-center mt-20">
            <img src="logo-dark.png" width="300px" className="m-auto" />
            <div className="text-xl">iBOP - {Constants.AppName}</div>
        </div>
        <form className="my-4 space-y-4 md:space-y-6 mx-auto" action={createPostAction}>
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
        
            <button type="submit" className="w-full bg-primary text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            
        </form>
    </div>
    )
}

export default LoginPage;