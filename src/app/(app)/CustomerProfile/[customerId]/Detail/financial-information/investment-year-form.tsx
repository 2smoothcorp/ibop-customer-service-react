

import InputText from "@/components/custom/input-text"
import LabelText from "@/components/custom/label"
import { FinancialInfoModel, FinancialInfoResponseDataResponse } from "@/services/rest-api/customer-service"
import { UseFormReturn } from "react-hook-form"

export interface InvestmentYearFormProps {
    isEditable?: boolean
    data: FinancialInfoResponseDataResponse | undefined
    form: UseFormReturn<FinancialInfoModel>
}

const InvestmentYearForm = (props: InvestmentYearFormProps) => {
    const { isEditable = true, data, form } = props

    return (<div className={isEditable ? "flex flex-nowrap" : ""}>
        <LabelText
            label="ประสบการณ์การลงทุน (ปี) Experience in Investment (Year)"
            isEditable={isEditable}
            isRequired={true}
            isFullWidth={true}
        />
        {
            isEditable ?
                <div className="w-60">
                    <InputText
                        name={"investmentYear"}
                        defaultValue={form.watch('investmentYear') || 0}
                        disabled={false}
                        required={true}
                        onChange={(value) => form.setValue("investmentYear", parseInt(value.toString()), { shouldDirty: true })}
                    />
                </div>
                :
                <div className="text-lg px-10 tracking-wide" >{data?.data?.financialInfo?.investmentYear || 'ไม่มีประสบการณ์'}</div>
        }
    </div>)
}

export default InvestmentYearForm