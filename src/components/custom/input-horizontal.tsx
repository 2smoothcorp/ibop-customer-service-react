"use client";

import { Property } from "csstype";
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
    textShow,
    isRequired = false,
    isLableCols1,
    allGridCols = "grid-cols-8",
    inputCol = "col-span-7",
    register,
    labelAlign = "right",
    list,
    onChange,
    onChangeNumber,
    maxDate,
    minDate,
    rightInputComponent,
}: InputHorizontalProps) {

    function getRequired() {
        if (isRequired && isEditable) {
            return <span className="text-red-500">*</span>
        }
        return null
    }

    return (
        <div className={`${isLableCols1 ? "grid " + allGridCols : "flex"} items-center min-h-[46px] w-full`}>
            <div className={`w-1/2`}
                style={{
                    width: labelWidth,
                    textAlign: labelAlign,
                }}>
                {
                    labelWidth
                        ? <div
                            className="text-lg px-4 font-semibold tracking-wide"
                        >{label} {getRequired()}</div>
                        : (
                            <div className="w-full text-lg font-semibold text-right px-4 tracking-wide">{label} {getRequired()}</div>
                        )
                }
            </div>

            <div className={`w-1/2 flex flex-row ${isLableCols1 ? inputCol : ""}`}>
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
                                            // className={isLableCols1 ? inputCol : ""}
                                            list={list}
                                        />
                                        : type === "number"
                                            ? <InputNumber
                                                name={name}
                                                defaultValue={defaultValue}
                                                // className={isLableCols1 ? inputCol : ""}
                                                onChange={onChangeNumber}
                                            />
                                            : type === "date"
                                                ?
                                                <InputDate
                                                    name={name}
                                                    defaultValue={defaultValue}
                                                    className={isLableCols1 ? inputCol : ""}
                                                    onChange={onChange}
                                                    maxDate={maxDate}
                                                    minDate={minDate}
                                                    required={isRequired}
                                                />
                                                : <InputTextHook
                                                    register={register}
                                                    name={name}
                                                    defaultValue={defaultValue}
                                                // className={isLableCols1 ? inputCol : ""}
                                                />
                                )
                        )
                        : (
                            <div className={`w-full text-lg font-medium ${inputCol}`}>
                                {
                                    textShow || defaultValue
                                }
                            </div>
                        )
                }
                {rightInputComponent}
            </div>

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
    textShow?: string;
    placeholder?: string;
    isRequired?: boolean;
    labelAlign?: Property.TextAlign | undefined;
    register?: UseFormRegister<any>;
    list?: InputSelectHookValue[];
    onChange?: (value: string) => void;
    onChangeNumber?: (value: number) => void;
    maxDate?: string;
    minDate?: string;
    rightInputComponent?: React.ReactNode;
}