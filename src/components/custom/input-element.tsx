"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Property } from "csstype";
import dayjs from "dayjs";
import { AutocompleteElement, AutocompleteElementProps, CheckboxElement, CheckboxElementProps, RadioButtonGroup, RadioButtonGroupProps, SwitchElement, SwitchElementProps, TextFieldElement, TextFieldElementProps, useWatch } from "react-hook-form-mui";
import { DatePickerElement, DatePickerElementProps } from "react-hook-form-mui/date-pickers";

export default function InputElement({
    type = "text",
    isEditable = false,
    label,
    labelWidth,
    defaultValue,
    textShow,
    isLableCols1,
    allGridCols = "grid-cols-8",
    inputCol = "col-span-7",
    labelAlign = "right",
    rightInputComponent,
    textFieldElementProps,
    autocompleteElementProps,
    datePickerElementProps,
    radioButtonGroupProps,
    switchElementProps,
    checkboxElementProps,
}: InputElementProps) {
    const value = useWatch({ name: getName() });
    const identityNeverExpire = useWatch({ name: 'personalInfo.identityNeverExpire' });
    const identityExpireDate = useWatch({ name: 'personalInfo.identityExpireDate' });

    function getName(): string {
        if (type === "text") {
            return textFieldElementProps?.name || '';
        }
        if (type === "autocomplete") {
            return autocompleteElementProps?.name || '';
        }
        if (type === "date") {
            return datePickerElementProps?.name || '';
        }
        if (type === "radio") {
            return radioButtonGroupProps?.name || '';
        }
        if (type === "switch") {
            return switchElementProps?.name || '';
        }
        if (type === "checkbox") {
            return checkboxElementProps?.name || '';
        }
        return '';
    }

    function getValue(): string {
        const name = getName();
        if (type === 'date') {
            if (name === 'personalInfo.identityExpireDateDayjs') {
                // console.log('identityNeverExpire', identityNeverExpire)
                if (identityNeverExpire)
                    return 'ตลอดชีพ';
                else if (identityExpireDate === '-' || identityExpireDate === '')
                    return '-';
            }
            return dayjs(value).format('DD/MM/YYYY');
        }
        if (name.search('.addressTemp') > 1) {
            if (label === 'รหัสไปรษณีย์') {
                return value?.postCode || '-';
            }
            if (label === 'จังหวัด') {
                return value?.province || '-';
            }
            if (label === 'อำเภอ') {
                return value?.district || '-';
            }
            if (label === 'ตำบล') {
                return value?.subDistrict || '-';
            }
            return '-'
        }
        if (value === "") {
            return '-'
        }
        if (type === 'autocomplete') {
            const result = autocompleteElementProps?.options?.find((item) => item.value === value);
            if (result) {
                return result.label;
            }
            return '-';
        }
        if (type === 'radio' && name === 'personalInfo.genderCode') {
            const result = radioButtonGroupProps?.options?.find((item: any) => item.id === value) as { label: string, id: string };
            if (result) {
                return `${result.id} - ${result.label}`;
            }
            return '-';
        }
        return value
    }

    function getRequired() {
        if (isEditable) {
            if (textFieldElementProps?.rules?.required
                || autocompleteElementProps?.rules?.required
                || datePickerElementProps?.rules?.required
                || radioButtonGroupProps?.rules?.required
                || checkboxElementProps?.rules?.required
            ) {
                return <span className="text-red-500">*</span>
            }
        }
        return null
    }

    function renderInput() {
        switch (type) {
            case "text":
                if (!textFieldElementProps) return;
                return <TextFieldElement
                    {...textFieldElementProps}
                />
            case "autocomplete":
                if (!autocompleteElementProps) return;
                return <AutocompleteElement
                    autocompleteProps={{
                        fullWidth: true,
                    }}
                    transform={{
                        output: (_, item) => {
                            if (!item) return "";
                            return item.value;
                        },
                    }}
                    {...autocompleteElementProps}
                />
            case "date":
                if (!datePickerElementProps) return;
                return <div className='w-full'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePickerElement
                                {...datePickerElementProps}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            case "radio":
                if (!radioButtonGroupProps) return;
                return <RadioButtonGroup
                    {...radioButtonGroupProps}
                />
            case "switch":
                if (!switchElementProps) return;
                return <SwitchElement
                    {...switchElementProps}
                    ref={null} // Add a null ref to fix the type error
                />
            case "checkbox":
                if (!checkboxElementProps) return;
                return <CheckboxElement
                    {...checkboxElementProps}
                    ref={null} // Add a null ref to fix the type error
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
                            <div className="text-lg px-4 font-semibold tracking-wide w-full text-right">{label} {getRequired()}</div>
                        )
                }
            </div>

            <div className={`w-1/2 flex flex-row gap-1 ${isLableCols1 ? inputCol : ""}`}>
                {
                    isEditable
                        ? (
                            label === ""
                                ? <></>
                                : renderInput()
                        )
                        : (
                            <div className={`w-full text-lg font-medium ${inputCol}`}>
                                {getValue()}
                            </div>
                        )
                }
                {rightInputComponent}
            </div>

        </div>
    )
}

export interface InputElementProps {
    type?: "text" | "number" | "select" | "date" | "radio" | "autocomplete" | "switch" | "checkbox";
    label: string;
    isEditable?: boolean;
    labelWidth?: number | string;
    inputCol?: string;
    isLableCols1?: boolean;
    allGridCols?: string;
    defaultValue?: string;
    textShow?: string;
    labelAlign?: Property.TextAlign | undefined;
    rightInputComponent?: React.ReactNode;
    textFieldElementProps?: TextFieldElementProps;
    autocompleteElementProps?: AutocompleteElementProps;
    datePickerElementProps?: DatePickerElementProps;
    radioButtonGroupProps?: RadioButtonGroupProps;
    switchElementProps?: SwitchElementProps;
    checkboxElementProps?: CheckboxElementProps;
}