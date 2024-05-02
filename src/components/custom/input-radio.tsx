import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect } from "react";

// Example
{/* <InputRadio
    isFlex={true}
    isRow={false}
    name="name"
    defaultValue="3"
    list={
        [
            { value: "1", label: "ชาย" },
            { value: "2", label: "หญิง" },
            { value: "3", label: "อื่นๆ" },
        ]
    }
/> */}

export default function InputRadio({
    name, // ชื่อของ input
    defaultValue, // ค่าเริ่มต้น
    required = false,
    disabled = false,
    onChange,
    list = [],
    isRow = true,
    isFlex = false,
}: InputRadioProps) {
    useEffect(() => {
        console.log(name, defaultValue)
    }, [defaultValue])

    return (
        <RadioGroup
            className={isFlex && "w-full flex justify-around" || ""}
            aria-required={required}
            row={isRow}
            name={name}
            value={defaultValue}
            defaultValue={defaultValue}
            onChange={(e) => onChange && onChange((e.target as HTMLInputElement).value)}
        >
            {
                list.map((item, index) => (
                    <FormControlLabel
                        disabled={disabled}
                        key={index}
                        value={item.value}
                        control={<Radio
                            sx={{
                                color: "#43AD9E",
                                '&.Mui-checked': {
                                    color: "#43AD9E",
                                },

                            }}
                        />}
                        label={item.label}
                    />
                ))
            }
        </RadioGroup>
    )
}

export type InputRadioValue = {
    value: string;
    label: string;
}

interface InputRadioProps {
    name: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    list?: InputRadioValue[];
    isRow?: boolean;
    isFlex?: boolean;
}