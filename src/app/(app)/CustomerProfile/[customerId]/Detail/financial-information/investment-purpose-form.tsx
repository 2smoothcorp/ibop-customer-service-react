import InputCheckbox from "@/components/custom/input-checkbox";
import InputHorizontal from "@/components/custom/input-horizontal";
import LabelText from "@/components/custom/label";
import useMasterDataInvestmentPurpose from "@/hooks/masterDataInvestmentPurpose";
import { FinancialInfoModel } from "@/services/rest-api/customer-service";
import { UseFormReturn } from "react-hook-form";

export interface PurposeFormProps {
    isEditable?: boolean
    data: FinancialInfoModel | undefined | null
    form: UseFormReturn<FinancialInfoModel>
    onChangeCheckBox?: (fieldName: string, value: string, isChecked: boolean) => void
    showOnlyChangedFields?: boolean
}

const PurposeForm = (props: PurposeFormProps) => {

    const { isEditable = true, data, form, onChangeCheckBox, showOnlyChangedFields } = props;

    const masterDataInvestmentPurpose = useMasterDataInvestmentPurpose();
    const { data: purposes, isLoading } = masterDataInvestmentPurpose;
    purposes?.sort((a, b) => Number(a?.rSort || '') - Number(b?.rSort || ''));

    const isPurposeExist = (value: string = '') => {
        return (form.getValues('investmentPurposeCode') || []).filter(p => p == value).length ? true : false
    }

    const isPurposeOther = () => {
        return (form.watch('investmentPurposeCode') || []).filter(p => p == '0').length ? true : false
    }

    const editMode = () => {
        return (<>
            <div className="grid grid-cols-3 w-2/3">
                {
                    (purposes || []).map((purpose, idx) => {
                        return (
                            <InputCheckbox
                                key={`purpose_${idx}`}
                                label={purpose?.rText || ''}
                                name={purpose?.rValue || ''}
                                defaultValue={isPurposeExist(purpose?.rValue || '')}
                                width={'max-content'}
                                onChange={(v) => onChangeCheckBox?.(`investmentPurposeCode`, purpose?.rValue || '', v)}
                            />
                        )
                    })
                }

                <div className="col-span-2">
                    <InputHorizontal
                        name="investmentPurposeOther"
                        label={"ระบุ วัตถุประสงค์การลงทุนอื่นๆ Other (Please specify)"}
                        defaultValue={form.getValues('investmentPurposeOther') || ''}
                        isEditable={isEditable}
                        labelWidth="max-content"
                        labelAlign="left"
                        disabled={!isPurposeOther()}
                        onChange={(v) => form.setValue('investmentPurposeOther', v, { shouldDirty: true })}
                    />
                </div>
            </div>
        </>)
    }

    const viewMode = () => {

        return (<>
            {
                (data?.investmentPurposeCode || []).map((purpose: string, idx: number) => {
                    const _purpose = masterDataInvestmentPurpose?.data?.filter((d) => d.rValue === purpose)[0]?.rText
                        || purpose
                    return <div className="text-lg px-10 tracking-wide" key={`purpose${idx}`}>{_purpose}</div>
                })
            }
            {
                data?.investmentPurposeOther ?
                    <div className="text-lg px-10 tracking-wide">{data?.investmentPurposeOther}</div> : null
            }
            {
                (data?.investmentPurposeCode || []).length === 0 && !data?.investmentPurposeOther && !showOnlyChangedFields ?
                    <div className="text-lg px-10 tracking-wide">-</div> : null
            }
        </>)
    }

    const getDetailSection = () => {
        return isEditable ? editMode() : viewMode()
    }

    if (!(data?.investmentPurposeCode && showOnlyChangedFields) && !isEditable) return null;

    return <>
        <LabelText label="วัตถุประสงค์การลงทุน (เลือกได้มากกว่า 1 ข้อ) Investment Objective (You can select more than 1 item)" isFullWidth={true} isRequired={true} isEditable={true} />
        {getDetailSection()}
    </ >
}

export default PurposeForm;