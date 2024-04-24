import { FormControlLabel, styled } from "@mui/material";
import Switch from '@mui/material/Switch';

export default function InputSwitch({
    name,
    label,
    defaultValue = false,
    onChange,
    disabled = false,
    isLabelRight = false,
}: InputSwitchProps) {
    return (
        <div className="w-full">
            <FormControlLabel
                labelPlacement={isLabelRight ? 'start' : 'end'}
                control={
                    <CustomSwitch
                        disabled={disabled}
                        onChange={(_, checked) => onChange && onChange(checked)}
                        defaultChecked={defaultValue}
                        name={name}
                    />
                }
                label={<div className="text-md">{label}</div>}
            />
        </div>

    )
}

const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 70,
    height: 44,
    padding: 8,
    '& .MuiSwitch-switchBase': {
        transform: 'translateX(0px)',
        '&.Mui-checked': {
            transform: 'translateX(26px)',
            '& + .MuiSwitch-track::after': {
                opacity: 0,
            },
        }
    },
    '& .MuiSwitch-track': {
        borderRadius: 20,
        fontSize: 10,
        color: theme.palette.primary.main,
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&::before': {
            color: '#fff',
            content: '"ใช่"',
            left: 19,
        },
        '&::after': {
            color: '#fff',
            content: '"ไม่ใช่"',
            right: 19,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 22,
        height: 22,
        margin: 2,
        borderRadius: 15,
    },
}));

interface InputSwitchProps {
    name: string;
    label: string;
    onChange?: (value: boolean) => void;
    defaultValue?: boolean;
    disabled?: boolean;
    isLabelRight?: boolean;
}