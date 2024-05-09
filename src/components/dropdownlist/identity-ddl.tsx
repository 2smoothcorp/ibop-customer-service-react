import InputCheckbox from "@/components/custom/input-checkbox";
import InputHorizontal from "@/components/custom/input-horizontal";
import dayjs from "dayjs";
import { useState } from "react";

export interface IdentityDDLProps {
    name: string
    isEditable?: boolean
    label?: string
    placeHolder?: string
    defaultValue?: string
    setValue?: (value: string) => void
    defaultIdentityNeverExpireValue?: boolean
    identityNeverExpireName: string
    setIdentityNeverExpireValue?: (value: boolean) => void
}

const IdentityDDL = (props: IdentityDDLProps) => {

    const {
        isEditable,
        name,
        label,
        placeHolder,
        defaultValue,
        setValue,
        identityNeverExpireName,
        defaultIdentityNeverExpireValue,
        setIdentityNeverExpireValue
    } = props;

    const [identityExpireDate, setIdentityExpireDate] = useState<string>('')
    const [identityNeverExpire, setIdentityNeverExpire] = useState<boolean>(defaultIdentityNeverExpireValue || false)

    const dateTime = defaultValue ? dayjs(defaultValue).format('DD/MM/YYYY') : ''

    return (<>
        <InputHorizontal
            name={name}
            type="date"
            label={label || "วันที่หมดอายุบัตร (ค.ศ.)"}
            placeholder={placeHolder || "โปรดระบุวันที่หมดอายุบัตร"}
            defaultValue={defaultValue || identityExpireDate}
            textShow={dateTime}
            isEditable={isEditable}
            minDate={dayjs().format('YYYY-MM-DD')}
            isRequired={false}
            disabled={identityNeverExpire}
            onChange={(value) => {
                setIdentityExpireDate(value)
                setValue?.(value)
            }}
            rightInputComponent={
                isEditable ?
                    <div className="w-[120px] flex justify-center">
                        <InputCheckbox
                            width={100}
                            label="ตลอดชีพ"
                            name={identityNeverExpireName}
                            defaultValue={defaultIdentityNeverExpireValue || identityNeverExpire}
                            onChange={(value) => {
                                setIdentityNeverExpire(value)
                                setIdentityNeverExpireValue?.(value)
                            }}
                        />
                    </div> : <></>
            }
        />
    </>)
}

export default IdentityDDL;