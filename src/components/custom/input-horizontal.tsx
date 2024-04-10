"use client";

import InputBase from "./input-base";
import { UseFormRegister } from "react-hook-form";

export default function InputHorizontal({
    isEditable = false,
    label,
    name,
    labelWidth,
    defaultValue,
    isRequired = false,
    isLableCols1,
    register,
}: InputHorizontalProps) {

    function getRequired() {
        if (isRequired) {
            return <span className="text-red-500">*</span>
        }
        return null
    }

    return (
        <div className={`${isLableCols1 ? `grid grid-cols-8` : "flex"} items-center min-h-[46px]`}>
            {
                labelWidth
                    ? <div className="font-cordia-new text-lg font-semibold tracking-wide" style={{ width: labelWidth }}>{label} {getRequired()}</div>
                    : (
                        isLableCols1 ?
                            <div className="font-cordia-new w-full text-lg font-semibold text-right px-4 tracking-wide">{label} {getRequired()}</div> :
                            <div className="font-cordia-new w-full text-lg font-semibold text-right px-4 tracking-wide" >{label} {getRequired()}</div>
                    )
            }
            {
                isEditable
                    ? (
                        label === ""
                            ? <></>
                            : (
                                isLableCols1
                                    ? <InputBase
                                        register={register}
                                        name={name}
                                        defaultValue={defaultValue}
                                        className="col-span-7"
                                    />
                                    : <InputBase
                                        register={register}
                                        name={name}
                                        defaultValue={defaultValue}
                                    />

                            )
                    )
                    : <div className="font-cordia-new w-full text-lg font-medium col-span-7" >{defaultValue}</div>
            }
        </div>
    )
}

interface InputHorizontalProps {
    name: string;
    label: string;
    isEditable?: boolean;
    inputWidth?: number;
    labelWidth?: number;
    isLableCols1?: boolean;
    defaultValue?: string;
    placeholder?: string;
    isRequired?: boolean;
    register: UseFormRegister<any>;
}