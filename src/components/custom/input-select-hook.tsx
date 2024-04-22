import { MenuItem, Select } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

export default function InputSelectHook({
    name,
    defaultValue,
    placeholder,
    className,
    register,
    required = false,
    list = [],
}: InputSelectHookProps) {
    return (
        <Select
            defaultValue={defaultValue}
            className={`font-cordia-new w-full h-[42px] bg-white border border-transparent rounded-md text-lg shadow-sm hover:border-sky-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${className}`}
            placeholder={placeholder}
            {...(register && register(name, { required: required, value: defaultValue }))}
        >
            {
                list.map((item, index) => (
                    <MenuItem
                        className="font-cordia-new text-lg"
                        key={index}
                        value={item.value}
                    >{item.label}</MenuItem>
                ))
            }
        </Select>
    )
}

export type InputSelectHookValue = {
    value: string;
    label: string;
}

interface InputSelectHookProps {
    required?: boolean;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    register?: UseFormRegister<any>;
    list?: InputSelectHookValue[];
}