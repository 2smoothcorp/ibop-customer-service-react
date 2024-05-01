"use client";

import { AddressBySearchProps } from "@/utils/function";
import { Property } from "csstype";
import { UseFormRegister } from "react-hook-form";
import InputAddressThailand from "./input-address-thailand";
import InputAutoComplete from "./input-auto-complete";
import InputDate from "./input-date";
import InputNumber from "./input-number";
import InputRadio from "./input-radio";
import InputSelectHook, { InputSelectHookValue } from "./input-select-hook";
import InputTextHook from "./input-text-hook";

export default function InputHorizontal({
    type = "text",
    disabled = false,
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
    placeholder,
    addressList,
    addressOptionType,
    onChangeAddress,
    defaultValueAddress,
}: InputHorizontalProps) {

    function getRequired() {
        if (isRequired && isEditable) {
            return <span className="text-red-500">*</span>
        }
        return null
    }

    function renderInput() {
        switch (type) {
            case "date":
                // console.log("date", name, defaultValue)
                return <InputDate
                    name={name}
                    defaultValue={defaultValue}
                    className={isLableCols1 ? inputCol : ""}
                    onChange={onChange}
                    maxDate={maxDate}
                    minDate={minDate}
                    required={isRequired}
                    disabled={disabled}
                />
            case "number":
                return <InputNumber
                    name={name}
                    defaultValue={defaultValue}
                    onChange={onChangeNumber}
                    disabled={disabled}
                    required={isRequired}
                />
            case "select":
                return <InputSelectHook
                    register={register}
                    name={name}
                    defaultValue={defaultValue}
                    list={list}
                    disabled={disabled}
                    required={isRequired}
                />
            case "radio":
                return <InputRadio
                    isFlex
                    onChange={onChange}
                    name={name}
                    defaultValue={defaultValue}
                    list={list}
                    disabled={disabled}
                    required={isRequired}
                />

            case "autocomplete":
                return <InputAutoComplete
                    placeholder={placeholder}
                    name={name}
                    defaultValue={defaultValue}
                    list={list}
                    disabled={disabled}
                    onChange={onChange}
                    required={isRequired}
                />
            case "addressThailand":
                return <InputAddressThailand
                    placeholder={placeholder}
                    name={name}
                    defaultValue={defaultValueAddress}
                    list={addressList}
                    disabled={disabled}
                    onChange={onChangeAddress}
                    onChangeText={onChange}
                    required={isRequired}
                    optionType={addressOptionType}
                />
            default:
                return <InputTextHook
                    register={register}
                    name={name}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    required={isRequired}
                />

        }
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
                                : renderInput()
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
    type?: "text" | "number" | "select" | "date" | "radio" | "autocomplete" | "addressThailand";
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
    disabled?: boolean;
    addressList?: AddressBySearchProps[];
    addressOptionType?: 'postCode' | 'province' | 'district' | 'subDistrict';
    onChangeAddress?: (value: AddressBySearchProps) => void;
    defaultValueAddress?: AddressBySearchProps;
}