import { UseFormRegister } from "react-hook-form";

export default function InputTextHook({
    name,
    defaultValue,
    placeholder,
    className,
    register,
    required = false,
}: InputTextHookProps) {
    return (
        <input
            type="text"
            placeholder={placeholder || ""}
            className={`font-cordia-new w-full px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${className}`}
            defaultValue={defaultValue}
            {...(register && register(name, { required: required, value: defaultValue }))}
        />
    )
}

interface InputTextHookProps {
    required?: boolean;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    register?: UseFormRegister<any>;
}