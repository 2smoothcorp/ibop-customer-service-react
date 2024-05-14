

import InputText from "@/components/custom/input-text"
import LabelText from "@/components/custom/label"
import { FinancialInfoModel } from "@/services/rest-api/customer-service"
import { UseFormReturn } from "react-hook-form"

export interface AssetFormProps {
    isEditable?: boolean
    data: FinancialInfoModel | undefined | null
    form: UseFormReturn<FinancialInfoModel>
    showOnlyChangedFields?: boolean
}

const AssetForm = (props: AssetFormProps) => {
    const { isEditable = true, data, form, showOnlyChangedFields } = props

    if (showOnlyChangedFields && !data?.assetValue) return null;
    
    return (<div className={isEditable ? "flex flex-nowrap" : ""}>
        <LabelText
            label="มูลค่าทรัพย์สิน (บาท) Asset Value (Baht)"
            isEditable={isEditable}
            isRequired={true}
            isFullWidth={true}
        />
        {
            isEditable ?
                <div className="w-60">
                    <InputText
                        name={"assetValue"}
                        defaultValue={form.watch('assetValue') || 0}
                        disabled={false}
                        required={true}
                        onChange={(value) => form.setValue("assetValue", parseInt(value.toString()), { shouldDirty: true })}
                    />
                </div>
                :
                <div className="text-lg px-10 tracking-wide" >{data?.assetValue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || '-'}</div>
        }
    </div>)
}

export default AssetForm