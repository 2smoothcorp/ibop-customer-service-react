import InputCheckbox from "@/components/custom/input-checkbox";
import InputHorizontal from "@/components/custom/input-horizontal";
import LabelText from "@/components/custom/label";
import useMasterDataInvestmentPurpose from "@/hooks/masterDataInvestmentPurpose";
import { FinancialInfoModel, FinancialInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { UseFormReturn } from "react-hook-form";

export interface PurposeFormProps {
    isEditable?: boolean
    data: FinancialInfoResponseDataResponse | undefined
    form: UseFormReturn<FinancialInfoModel>
    onChangeCheckBox?: (fieldName: string, value: string, isChecked: boolean) => void
}

const PurposeForm = (props: PurposeFormProps) => {

    const { isEditable = true, data, form, onChangeCheckBox } = props;

    const masterDataInvestmentPurpose = useMasterDataInvestmentPurpose();
    const { data: purposes } = masterDataInvestmentPurpose;
    purposes?.sort((a, b) => Number(a?.rSort || '') - Number(b?.rSort || ''));

    const isPurposeExist = (value: string = '') => {
        return (form.getValues('investmentPurposeCode') || []).filter(p => p == value).length ? true : false
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
                        onChange={(v) => form.setValue('investmentPurposeOther', v)}
                    />
                </div>
            </div>
        </>)
    }

    const viewMode = () => {
        return (<>
            {
                (data?.data?.financialInfo?.investmentPurposeCode || []).map((purpose: string, idx: number) => {
                    const _purpose = masterDataInvestmentPurpose?.data?.filter((d) => d.rValue === purpose)[0]?.rText
                        || purpose
                    return <div className="text-lg px-10 tracking-wide" key={`purpose${idx}`}>{_purpose}</div>
                })
            }
            {
                data?.data?.financialInfo?.investmentPurposeOther ?
                    <div className="text-lg px-10 tracking-wide">{data?.data?.financialInfo?.investmentPurposeOther}</div> : null
            }
            {
                (data?.data?.financialInfo?.investmentPurposeCode || []).length === 0 && !data?.data?.financialInfo?.investmentPurposeOther ?
                    <div className="text-lg px-10 tracking-wide">-</div> : null
            }
        </>)
    }

    const getDetailSection = () => {
        return isEditable ? editMode() : viewMode()
    }

    return <>
        <LabelText label="วัตถุประสงค์การลงทุน (เลือกได้มากกว่า 1 ข้อ) Investment Objective (You can select more than 1 item)" isFullWidth={true} isRequired={true} isEditable={true} />
        {getDetailSection()}
    </>
}

export default PurposeForm;