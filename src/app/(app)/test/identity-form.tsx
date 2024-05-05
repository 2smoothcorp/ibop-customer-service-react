import InputCheckbox from "@/components/custom/input-checkbox";
import InputHorizontal from "@/components/custom/input-horizontal";
import dayjs from "dayjs";
import { useState } from "react";

export interface IndentityFormProps {
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

const IdentityForm = (props: IndentityFormProps) => {

    const {
        isEditable,
        name,
        defaultValue,
        setValue,
        identityNeverExpireName,
        defaultIdentityNeverExpireValue,
        setIdentityNeverExpireValue
    } = props;

    const [identityExpireDate, setIdentityExpireDate] = useState<string>('')
    const [identityNeverExpire, setIdentityNeverExpire] = useState<boolean>(false)

    return (<>
        <InputHorizontal
            label="วันที่หมดอายุบัตร (ค.ศ.)"
            placeholder="โปรดระบุวันที่หมดอายุบัตร"
            defaultValue={defaultValue || undefined}
            textShow={'-'}
            isEditable={isEditable}
            type="date"
            minDate={dayjs().format('YYYY-MM-DD')}
            name={name}
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
                            defaultValue={defaultIdentityNeverExpireValue}
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

export default IdentityForm;