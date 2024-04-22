"use client";

import { Property } from "csstype";
import dayjs from "dayjs";
import { UseFormRegister } from "react-hook-form";
import InputDate from "./input-date";
import InputNumber from "./input-number";
import InputSelectHook, { InputSelectHookValue } from "./input-select-hook";
import InputTextHook from "./input-text-hook";

export default function InputHorizontal({
    type = "text",
    isEditable = false,
    label,
    name,
    labelWidth,
    defaultValue,
    isRequired = false,
    isLableCols1,
    allGridCols = "grid-cols-8",
    inputCol = "col-span-7",
    register,
    labelAlign = "right",
    list,
    onChange,
    onChangeNumber,
}: InputHorizontalProps) {

    function getRequired() {
        if (isRequired) {
            return <span className="text-red-500">*</span>
        }
        return null
    }

    return (
        <div className={`${isLableCols1 ? "grid " + allGridCols : "flex"} items-center min-h-[46px]`}>
            {
                labelWidth
                    ? <div
                        className="font-cordia-new text-lg px-4 font-semibold tracking-wide"
                        style={{
                            width: labelWidth,
                            textAlign: labelAlign,
                        }}>{label} {getRequired()}</div>
                    : (
                        <div className="font-cordia-new w-full text-lg font-semibold text-right px-4 tracking-wide">{label} {getRequired()}</div>
                    )
            }
            {
                isEditable
                    ? (
                        label === ""
                            ? <></>
                            : (
                                type === "select"
                                    ? <InputSelectHook
                                        register={register}
                                        name={name}
                                        defaultValue={defaultValue}
                                        className={isLableCols1 ? inputCol : ""}
                                        list={list}
                                    />
                                    : type === "number"
                                        ? <InputNumber
                                            name={name}
                                            defaultValue={defaultValue}
                                            className={isLableCols1 ? inputCol : ""}
                                            onChange={onChangeNumber}
                                        />
                                        : type === "date"
                                            ? <InputDate
                                                name={name}
                                                defaultValue={defaultValue}
                                                className={isLableCols1 ? inputCol : ""}
                                                onChange={onChange}
                                            />
                                            : <InputTextHook
                                                register={register}
                                                name={name}
                                                defaultValue={defaultValue}
                                                className={isLableCols1 ? inputCol : ""}
                                            />
                            )
                    )
                    : (
                        <div className={`font-cordia-new w-full text-lg font-medium ${inputCol}`}>
                            {
                                type === "number"
                                    ? String(defaultValue).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
                                    : type === "date"
                                        ? dayjs(defaultValue).format("DD/MM/YYYY").toString()
                                        : defaultValue
                            }
                        </div>
                    )
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
    allCol?: string;
    inputCol?: string;
    isLableCols1?: boolean;
    allGridCols?: string;
    defaultValue?: string;
    placeholder?: string;
    isRequired?: boolean;
    labelAlign?: Property.TextAlign | undefined;
    register: UseFormRegister<any>;
    list?: InputSelectHookValue[];
    onChange?: (value: string) => void;
    onChangeNumber?: (value: number) => void;
}