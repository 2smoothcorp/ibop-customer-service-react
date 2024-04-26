import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";

export default function InputDate({
    defaultValue, // 2024-04-06
    className,
    required = false,
    disabled = false,
    readonly = false,
    maxDate,
    minDate,
    onChange,
}: InputDateProps) {
    return (
        <div className={'w-full' + className}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th-TH">
                <DemoContainer sx={{ padding: 0 }} components={['DatePicker']}>
                    <DatePicker
                        disabled={disabled}
                        readOnly={readonly}
                        maxDate={maxDate && dayjs(maxDate) || undefined}
                        minDate={minDate && dayjs(minDate) || undefined}
                        value={defaultValue && dayjs(defaultValue) || null}
                        defaultValue={defaultValue && dayjs(defaultValue) || null}
                        onChange={(newValue) => onChange && onChange(newValue?.format('YYYY-MM-DD').toString() ?? '')}
                        slotProps={{
                            textField: {
                                required: required,
                            },
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}

interface InputDateProps {
    required?: boolean;
    name: string;
    maxDate?: string;
    minDate?: string;
    defaultValue?: string;
    className?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    readonly?: boolean;
}