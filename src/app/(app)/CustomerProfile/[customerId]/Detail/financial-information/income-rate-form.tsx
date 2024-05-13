import LabelText from "@/components/custom/label"
import IncomeRateDDL from "@/components/dropdownlist/income-rate-ddl"
import { useMasterDataIncomeRateCustom } from "@/hooks/masterDataIncomeRateHook"
import { FinancialInfoModel } from "@/services/rest-api/customer-service"
import { UseFormReturn } from "react-hook-form"

export interface IncomeRateFormProps {
    isEditable?: boolean
    data: FinancialInfoModel | undefined | null
    form: UseFormReturn<FinancialInfoModel>
}

const IncomeRateForm = (props: IncomeRateFormProps) => {
    const { isEditable = true, data, form } = props

    const masterDataIncomeRate = useMasterDataIncomeRateCustom();

    const getIncomeRateText = (incomeRateCode: string | number) => {
        let _text = '-'
        const foundIncomeRate = masterDataIncomeRate?.data?.filter((d) => d.rValue === incomeRateCode.toString());
        if (foundIncomeRate && foundIncomeRate.length > 0) {
            _text = `${foundIncomeRate[0]?.rText}`
        }
        return _text
    }

    return (<div className={isEditable ? "flex flex-nowrap" : ""}>
        <LabelText
            label="รายได้ต่อเดือน (บาท) Monthly Income (Baht)"
            isEditable={isEditable}
            isRequired={true}
            isFullWidth={true}
        />
        {
            isEditable ?
                <div className="w-60">
                    <IncomeRateDDL
                        name={`incomeRateCode`}
                        defaultValue={form.watch('incomeRateCode') || ''}
                        onChange={(v) => form.setValue(`incomeRateCode`, v, { shouldDirty: true })}
                    />
                </div>
                :
                <div className="text-lg px-10 tracking-wide" >{getIncomeRateText(data?.incomeRateCode || '-')}</div>
        }
    </div>)
}

export default IncomeRateForm