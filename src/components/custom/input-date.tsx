import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";

export default function InputDate({
    defaultValue, // 2024-04-06
    className,
    required = false,
    disabled = false,
    readonly = false,
    onChange,
}: InputDateProps) {
    return (
        <div className={'w-full' + className}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th-TH">
                <DemoContainer sx={{ padding: 0 }} components={['DatePicker']}>
                    <MobileDatePicker
                        className="bg-white"
                        format="DD/MM/YYYY"
                        disabled={disabled}
                        readOnly={readonly}
                        value={dayjs(defaultValue)}
                        onChange={(newValue) => onChange && onChange(newValue?.format('YYYY-MM-DD').toString() ?? '')}
                        slotProps={{
                            textField: {
                                required: required,
                                size: 'small',
                                color: 'primary',
                                fullWidth: true,
                                InputProps: {
                                    sx: {
                                        fontFamily: 'Cordia New',
                                        fontSize: '18px',
                                    }
                                },
                            },
                            day: {
                                sx: {
                                    "&.MuiPickersDay-root.Mui-selected": {
                                        backgroundColor: "#1F346B",
                                    },
                                },
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
    defaultValue?: string;
    className?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    readonly?: boolean;
}