"use client";

import InputText from "./input-text";
import { UseFormRegister } from "react-hook-form";
import { Property } from "csstype";
import InputSelect, { InputSelectValue } from "./input-select";
import InputNumber from "./input-number";
import InputDate from "./input-date";

export default function InputHorizontal({
    type = "text",
    isEditable = false,
    label,
    name,
    labelWidth,
    defaultValue,
    isRequired = false,
    isLableCols1,
    register,
    labelAlign = "right",
    list,
}: InputHorizontalProps) {

    function getRequired() {
        if (isRequired) {
            return <span className="text-red-500">*</span>
        }
        return null
    }

    return (
        <div className={`${isLableCols1 ? "grid grid-cols-8" : "flex"} items-center min-h-[46px]`}>
            {
                labelWidth
                    ? <div
                        className="font-cordia-new text-lg px-4 font-semibold tracking-wide"
                        style={{
                            width: labelWidth,
                            textAlign: labelAlign,
                        }}>{label} {getRequired()}</div>
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
                                type === "select"
                                    ? <InputSelect
                                        register={register}
                                        name={name}
                                        defaultValue={defaultValue}
                                        className={isLableCols1 ? "col-span-7" : ""}
                                        list={list}
                                    />
                                    : type === "number"
                                        ? <InputNumber
                                            register={register}
                                            name={name}
                                            defaultValue={defaultValue}
                                            className={isLableCols1 ? "col-span-7" : ""}
                                        />
                                        : type === "date"
                                            ? <InputDate
                                                register={register}
                                                name={name}
                                                defaultValue={defaultValue}
                                                className={isLableCols1 ? "col-span-7" : ""}
                                            />
                                            : <InputText
                                                register={register}
                                                name={name}
                                                defaultValue={defaultValue}
                                                className={isLableCols1 ? "col-span-7" : ""}
                                            />
                            )
                    )
                    : <div className="font-cordia-new w-full text-lg font-medium col-span-7" >{defaultValue}</div>
            }
        </div>
    )
}



interface InputHorizontalProps {
    type?: "text" | "number" | "select" | "date";
    name: string;
    label: string;
    isEditable?: boolean;
    inputWidth?: number;
    labelWidth?: number | string;
    isLableCols1?: boolean;
    defaultValue?: string;
    placeholder?: string;
    isRequired?: boolean;
    labelAlign?: Property.TextAlign | undefined;
    register: UseFormRegister<any>;
    list?: InputSelectValue[];
}