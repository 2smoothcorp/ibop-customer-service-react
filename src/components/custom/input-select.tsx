import { FormControl, MenuItem, Select } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

export default function InputSelect({
    name,
    value,
    defaultValue,
    placeholder,
    className,
    required = false,
    list = [],
    readonly = false,
    disabled = false,
}: InputSelectProps) {
    return (
        <Select
            defaultValue={defaultValue}
            className={`font-cordia-new w-full h-[42px] bg-white border border-transparent rounded-md text-lg shadow-sm hover:border-sky-500 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${className}`}
            placeholder={placeholder}
            name={name}
            required={required}
            readOnly={readonly}
            disabled={disabled}
        >
            {
                list.map((item, index) => (
                    <MenuItem
                        className="font-cordia-new text-lg"
                        key={index}
                        value={item.value}
                    >
                        {item.label}
                    </MenuItem>
                ))
            }
        </Select>
    )
}

export type InputSelectValue = {
    value: string;
    label: string;
}

interface InputSelectProps {
    required?: boolean;
    name: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    list?: InputSelectValue[];
    readonly?: boolean;
    disabled?: boolean;
}