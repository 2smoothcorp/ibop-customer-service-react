import { Checkbox, FormControlLabel } from "@mui/material";

// Example
{/* <InputRadio
    label="เพศ"
    name="name"
    defaultValue={false}
/> */}

export default function InputCheckbox({
    name, // ชื่อของ input
    defaultValue = false, // ค่าเริ่มต้น
    required = false,
    disabled = false,
    onChange,
    label,
    width = 100,
}: InputCheckboxProps) {

    return (
        <FormControlLabel
            style={{ width: width, padding: '0px', margin: '0px' }}
            name={name}
            control={<Checkbox defaultChecked={defaultValue} />}
            required={required}
            disabled={disabled}
            onChange={(e) => onChange && onChange((e.target as HTMLInputElement).checked)}
            label={label}
        />
    )
}


interface InputCheckboxProps {
    name: string;
    defaultValue?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    width?: number | string;
}