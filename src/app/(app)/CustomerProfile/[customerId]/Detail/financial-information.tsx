import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { setFinancialInfoData } from "@/libs/redux/store/financial-infomation";
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

const FinancialInformation = () => {

    const searchParams = useSearchParams()
    const params = useParams()
    const router = useRouter()
    const dispatch = useAppDispatch()

    const isEditable = searchParams.get('edit') === 'true';

    const financialInfomation = useAppSelector(state => state.financialInfomation)

    const financialInfomationForm = useForm<FinancialInfoModel>({
        defaultValues: { ...financialInfomation }
    })
    const form = financialInfomationForm;

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['financialInfo', params.customerId],
        queryFn: async function () {
            try {

                const request = await fetch(`/api/customer-profile/financial-info/${params.customerId}`)
                const response: ApiResponse<FinancialInfoResponseDataResponse> = await request.json();

                for (let key in response.data?.data?.financialInfo) {
                    form.setValue(key as any, response.data?.data?.financialInfo[key as keyof FinancialInfoModel])
                }

                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    const toggleValueFromCheckBox = (fieldName: string, value: string, isChecked: boolean) => {
        const _vaules = form.getValues(fieldName as any) || [];
        let _newValues = []
        if (isChecked) {
            _newValues = [..._vaules, value]
        } else {
            _newValues = _vaules.filter((v: any) => v !== value)
        }
        form.setValue(fieldName as any, _newValues);
    }

    const onBack = (e: any) => {
        dispatch(prevStep())
    }

    const onSubmit = (e: any) => {
        const { getValues } = form

        dispatch(setFinancialInfoData(getValues()))
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
                <PurposeForm data={data} isEditable={isEditable} form={form} onChangeCheckBox={toggleValueFromCheckBox} />
            </div>
            <div className="my-4">
                <InvestmentSection data={data} isEditable={isEditable} form={form} />
            </div>
            <div className="my-4">
                <IncomeSourceForm data={data} isEditable={isEditable} form={form} onChangeCheckBox={toggleValueFromCheckBox} />
            </div>
            <div className="my-4">
                <IncomeRateForm data={data} isEditable={isEditable} form={form} />
            </div>
            <div className="my-4">
                <InvestmentYearForm data={data} isEditable={isEditable} form={form} />
            </div>
            <div className="my-4">
                <AssetForm data={data} isEditable={isEditable} form={form} />
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