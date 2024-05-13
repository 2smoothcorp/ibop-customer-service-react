import InputCheckbox from "@/components/custom/input-checkbox";
import InputHorizontal from "@/components/custom/input-horizontal";
import LabelText from "@/components/custom/label";
import useMasterDataIncomeSource from "@/hooks/masterDataIncomeSourceHook";
import { FinancialInfoModel } from "@/services/rest-api/customer-service";
import { UseFormReturn } from "react-hook-form";

export interface IncomeSourceFormProps {
    isEditable?: boolean
    data: FinancialInfoModel | undefined | null
    form: UseFormReturn<FinancialInfoModel>
    onChangeCheckBox?: (fieldName: string, value: string, isChecked: boolean) => void
}

const IncomeSourceForm = (props: IncomeSourceFormProps) => {

    const { isEditable = true, data, form, onChangeCheckBox } = props;

    const masterDataIncomeSource = useMasterDataIncomeSource();
    const { data: incomeSources = [] } = masterDataIncomeSource;
    incomeSources?.sort((a, b) => Number(a?.rSort || '') - Number(b?.rSort || ''));

    const isIncomeSourceCodesExist = (value: string = '') => {
        return (form.getValues('incomeSourceCode') || []).filter(p => p == value).length ? true : false
    }

    const isIncomeSourceOther = () => {
        return (form.watch('incomeSourceCode') || []).filter(p => p == '0').length ? true : false
    }

    const view = () => {
        return <>
            {
                (data?.incomeSourceCode || []).map((incomeSource: string, idx: number) => {
                    const _incomeSource = incomeSources?.filter((d) => d.rValue === incomeSource)[0]?.rText
                        || incomeSource
                    return <div className="text-lg px-10 tracking-wide" key={`incomeSource${idx}`}>{_incomeSource}</div>
                })
            }
            {
                data?.incomeSourceOther ?
                    <div className="text-lg px-10 tracking-wide">{data?.incomeSourceOther}</div> : null
            }
            {
                (data?.incomeSourceCode || []).length === 0 && !data?.incomeSourceOther ?
                    <div className="text-lg px-10 tracking-wide">-</div> : null
            }
        </>
    }

    const edit = () => {
        return (<>
            <div className="grid grid-cols-3 w-2/3">
                {
                    (incomeSources || []).map((incomeSource, idx) => {
                        return (
                            <InputCheckbox
                                key={`purpose_${idx}`}
                                label={incomeSource?.rText || ''}
                                name={incomeSource?.rValue || ''}
                                width={'max-content'}
                                defaultValue={isIncomeSourceCodesExist(incomeSource?.rValue || '')}
                                onChange={(v) => onChangeCheckBox?.(`incomeSourceCode`, incomeSource?.rValue || '', v)}

                            />
                        )
                    })
                }

                <div className="col-span-2">
                    <InputHorizontal
                        name="incomeSourceOther"
                        label={"ระบุ แหล่งที่มาของรายได้อื่นๆ Other (Please specify)"}
                        defaultValue={form.getValues('incomeSourceOther') || ''}
                        isEditable={true}
                        labelWidth="max-content"
                        labelAlign="left"
                        disabled={!isIncomeSourceOther()}
                        onChange={(v) => form.setValue('incomeSourceOther', v, { shouldDirty: true })}
                    />
                </div>
            </div>
        </>)
    }

    return (
        <>
            <LabelText label="แหล่งที่มาของรายได้ (เลือกได้มากกว่า 1 ข้อ) Source of income (You can select more than 1 item)" isFullWidth={true} isRequired={true} isEditable={true} />
            {isEditable ? edit() : view()}
        </>
    )
}

export default IncomeSourceForm;