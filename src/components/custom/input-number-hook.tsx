import { FormControl, MenuItem, Select } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

export default function InputNumberHook({
    name, // ชื่อของ input
    defaultValue, // ค่าเริ่มต้น
    placeholder, // ข้อความ placeholder
    className,
    register,
    required = false,
    decimal = 0,
    disabled = false,
    readonly = false,
}: InputNumberHookProps) {

    function getStepByDecimal() {
        let step = 1
        for (let i = 0; i < decimal; i++) {
            step = step / 10
        }
        return step
    }

    return (
        <input
            type="number"
            step={getStepByDecimal()}
            placeholder={placeholder || ""}
            className={`font-cordia-new w-full px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`}
            disabled={disabled}
            readOnly={readonly}
            {...register(name, {
                valueAsNumber: true,
                required: required,
                value: defaultValue,
            })}
        />
    )
}

interface InputNumberHookProps {
    required?: boolean;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    register: UseFormRegister<any>;
    decimal?: number;
    disabled?: boolean;
    readonly?: boolean;
}