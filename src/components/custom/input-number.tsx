import { NumericFormat } from 'react-number-format';

export default function InputNumber({
    name, // ชื่อของ input
    value,
    defaultValue, // ค่าเริ่มต้น
    placeholder, // ข้อความ placeholder
    className,
    required = false,
    decimal = 0,
    disabled = false,
    readonly = false,
    onChange,
    type = 'number'
}: InputNumberProps) {

    if (type === 'percent') {
        return <NumericFormat
            value={value}
            onValueChange={(values) => onChange && onChange(values.floatValue || 0)}
            name={name}
            required={required}
            defaultValue={defaultValue}
            readOnly={readonly}
            disabled={disabled}
            decimalScale={0}
            maxLength={4}
            max={100}
            suffix={'%'}
            className={`w-full px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`}
            placeholder={placeholder || ""}
        />
    }

    return (
        <NumericFormat
            onValueChange={(values) => onChange && onChange(values.floatValue || 0)}
            name={name}
            required={required}
            defaultValue={defaultValue}
            readOnly={readonly}
            disabled={disabled}
            decimalScale={decimal}
            thousandSeparator=","
            className={`w-full px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`}
            placeholder={placeholder || ""}
        />
    )
}

interface InputNumberProps {
    type?: 'number' | 'percent';
    required?: boolean;
    name: string;
    value?: number;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    onChange?: (value: number) => void;
    decimal?: number;
    disabled?: boolean;
    readonly?: boolean;
}