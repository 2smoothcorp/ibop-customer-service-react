import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import useMasterDataCountries from "@/hooks/masterDataCountries";
import { useMasterDataIncomeRateCustom } from "@/hooks/masterDataIncomeRateHook";
import useMasterDataIncomeSource from "@/hooks/masterDataIncomeSourceHook";
import useMasterDataInvestmentPurpose from "@/hooks/masterDataInvestmentPurpose";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { setConfirmFinancialInfoData, setFinancialInfoData } from "@/libs/redux/store/financial-infomation";
import { FinancialInfoModel, FinancialInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { ApiResponse } from "@/type/api";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import AssetForm from "./financial-information/asset-form";
import IncomeRateForm from "./financial-information/income-rate-form";
import IncomeSourceForm from "./financial-information/income-source-form";
import InvestmentSection from "./financial-information/investment-form";
import PurposeForm from "./financial-information/investment-purpose-form";
import InvestmentYearForm from "./financial-information/investment-year-form";

export interface FinancialInformationProps {
    data?: FinancialInfoModel
    isReadonly?: boolean
    showOnlyChangedFields?: boolean
}

const FinancialInformation = (props: FinancialInformationProps) => {

    const searchParams = useSearchParams()
    const params = useParams()
    const router = useRouter()
    const dispatch = useAppDispatch()

    const masterDataInvestmentPurpose = useMasterDataInvestmentPurpose();
    const masterDataCountries = useMasterDataCountries();
    const masterDataIncomeSource = useMasterDataIncomeSource();
    const masterDataIncomeRate = useMasterDataIncomeRateCustom();

    const isEditable = searchParams.get('edit') === 'true' && !props?.isReadonly;

    const financialInfomation = useAppSelector(state => state.financialInfomation)

    const { data: _data, isLoading, error, refetch } = useQuery({
        queryKey: ['financialInfo', params.customerId],
        queryFn: async function () {
            try {

                const request = await fetch(`/api/customer-profile/financial-info/${params.customerId}`)
                const response: ApiResponse<FinancialInfoResponseDataResponse> = await request.json();
                /*
                if (!props?.showOnlyChangedFields) {
                    for (let key in response.data?.data?.financialInfo) {
                        form.setValue(key as any, response.data?.data?.financialInfo[key as keyof FinancialInfoModel])
                    }
                }
                */
                for (let key in response.data?.data?.financialInfo) {
                    form.setValue(key as any, response.data?.data?.financialInfo[key as keyof FinancialInfoModel])
                }

                dispatch(setFinancialInfoData(response?.data?.data?.financialInfo as FinancialInfoModel))

                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    const data: FinancialInfoModel | undefined | null = props?.showOnlyChangedFields ? props?.data : (financialInfomation.data || _data?.data?.financialInfo);
    console.log(`financialInfomation.data`, financialInfomation.data)

    const financialInfomationForm = useForm<FinancialInfoModel>({
        defaultValues: { ...data as FinancialInfoModel },
        mode: 'onChange'
    })
    const form = financialInfomationForm;

    const toggleValueFromCheckBox = (fieldName: string, value: string, isChecked: boolean) => {
        const _vaules = form.getValues(fieldName as any) || [];
        let _newValues = []
        if (isChecked) {
            _newValues = [..._vaules, value]
        } else {
            _newValues = _vaules.filter((v: any) => v !== value)
        }
        form.setValue(fieldName as any, _newValues, { shouldDirty: true });
    }

    const onBack = (e: any) => {
        dispatch(prevStep())
    }

    const onSubmit = (e: any) => {
        const { getValues, formState: { dirtyFields } } = form

        const values = getValues()
        const _dirtyValues: any = {}
        for (let key in dirtyFields) {
            _dirtyValues[key as keyof FinancialInfoModel] = values[key as keyof FinancialInfoModel]
        }

        dispatch(setFinancialInfoData(values))
        dispatch(setConfirmFinancialInfoData(_dirtyValues as FinancialInfoModel))
        dispatch(nextStep())
    }

    return (
        <ContentLoading
            isLoading={isLoading}
        >
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลทางการเงิน"
            />

            <div className="my-4">
                <PurposeForm data={data} isEditable={isEditable} form={form} onChangeCheckBox={toggleValueFromCheckBox} showOnlyChangedFields={props?.showOnlyChangedFields} />
            </div>
            <div className="my-4">
                <InvestmentSection data={data} isEditable={isEditable} form={form} showOnlyChangedFields={props?.showOnlyChangedFields} />
            </div>
            <div className="my-4">
                <IncomeSourceForm data={data} isEditable={isEditable} form={form} onChangeCheckBox={toggleValueFromCheckBox} showOnlyChangedFields={props?.showOnlyChangedFields} />
            </div>
            <div className="my-4">
                <IncomeRateForm data={data} isEditable={isEditable} form={form} showOnlyChangedFields={props?.showOnlyChangedFields} />
            </div>
            <div className="my-4">
                <InvestmentYearForm data={data} isEditable={isEditable} form={form} showOnlyChangedFields={props?.showOnlyChangedFields} />
            </div>
            <div className="my-4">
                <AssetForm data={data} isEditable={isEditable} form={form} showOnlyChangedFields={props?.showOnlyChangedFields} />
            </div>
            {
                isEditable && <div className="flex justify-end gap-4">
                    <Button variant="contained" color="error" onClick={onBack}>ย้อนกลับ</Button>
                    <Button variant="contained" onClick={onSubmit}>ถัดไป</Button>
                </div>
            }
        </ContentLoading>
    )
}

export default FinancialInformation;