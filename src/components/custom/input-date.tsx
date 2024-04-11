import { FormControl, MenuItem, Select } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from "moment";

export default function InputDate({
    name,
    defaultValue,
    placeholder,
    className,
    register,
    required = false,
}: InputDateProps) {
    console.log(register)
    return (
        <div className={'w-full ' + className}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        value={moment(defaultValue)}
                        onChange={(newValue) => console.log(newValue)}
                        // slots={{
                        //     openPickerIcon: EditCalendarRoundedIcon,
                        //     openPickerButton: StyledButton,
                        //     day: StyledDay,
                        // }}
                        slotProps={{
                            openPickerIcon: { fontSize: 'small' },
                            openPickerButton: { size: 'small' },
                            textField: {
                                required: required,
                                size: 'small',
                                color: 'primary',
                                fullWidth: true,
                                focused: true,
                            },
                            
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </div>

        // <input
        //     type="text"
        //     placeholder={placeholder || ""}
        //     className={`font-cordia-new w-full px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ${className}`}
        //     {...register(name, { required: required, value: defaultValue })}
        // />
    )
}

interface InputDateProps {
    required?: boolean;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    register: UseFormRegister<any>;
}