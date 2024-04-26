import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import useMasterDataCountries from "@/hooks/masterDataCountries";
import useMasterDataIncomeRate from "@/hooks/masterDataIncomeRateHook";
import useMasterDataIncomeSource from "@/hooks/masterDataIncomeSourceHook";
import useMasterDataInvestmentPurpose from "@/hooks/masterDataInvestmentPurpose";
import { FinancialInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { ApiResponse } from "@/type/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const FinancialInformation = () => {
    const search = useSearchParams()
    const params = useParams()

    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ['financialInfo', params.customerId],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/customer-profile/financial-info/${params.customerId}`)
                const response: ApiResponse<FinancialInfoResponseDataResponse> = await request.json();
                // console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    const masterDataIncomeRate = useMasterDataIncomeRate();
    const masterDataIncomeSource = useMasterDataIncomeSource();
    const masterDataInvestmentPurpose = useMasterDataInvestmentPurpose();
    const masterDataCountries = useMasterDataCountries();

    // console.log(`MasterDataIncomeRate`, masterDataIncomeRate.data)
    // console.log(`MasterDataIncomeSource`, masterDataIncomeSource.data)

    const getCountryText = (countryCode: string) => {
        let _text = '-'
        const foundCountry = masterDataCountries?.data?.filter((d) => d.rValue === countryCode);
        if (foundCountry && foundCountry.length > 0) {
            _text = `${countryCode} - ${foundCountry[0]?.rText}`
        }
        return _text
    }

    const getIncomeRateText = (incomeRateCode: string | number) => {
        let _text = '-'
        const foundIncomeRate = masterDataIncomeRate?.data?.filter((d) => d.rValue === incomeRateCode.toString());
        if (foundIncomeRate && foundIncomeRate.length > 0) {
            _text = `${foundIncomeRate[0]?.rText}`
        }
        return _text
    }

    return (
        <ContentLoading
            isLoading={isLoading}
        >
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลทางการเงิน"
            />
            <div className="text-lg px-4 font-semibold tracking-wide">วัตถุประสงค์การลงทุน (เลือกได้มากกว่า 1 ข้อ) Investment Objective (You can select more than 1 item) <span className="text-red-500">*</span></div>
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
            <div className="text-lg px-4 font-semibold tracking-wide">ประเทศของแหล่งที่มาของรายได้/เงินลงทุน Country's Source of income / Investment Fund <span className="text-red-500">*</span></div>
            <div className="text-lg px-10 tracking-wide" >{getCountryText(data?.data?.financialInfo?.investmentFundCode || '-')}</div>
            <div className="text-lg px-4 font-semibold tracking-wide">แหล่งที่มาของรายได้ (เลือกได้มากกว่า 1 ข้อ) Source of income (You can select more than 1 item) <span className="text-red-500">*</span></div>
            {
                (data?.data?.financialInfo?.incomeSourceCode || []).map((incomeSource: string, idx: number) => {
                    const _incomeSource = masterDataIncomeSource?.data?.filter((d) => d.rValue === incomeSource)[0]?.rText
                        || incomeSource
                    return <div className="text-lg px-10 tracking-wide" key={`incomeSource${idx}`}>{_incomeSource}</div>
                })
            }
            {
                data?.data?.financialInfo?.incomeSourceOther ?
                    <div className="text-lg px-10 tracking-wide">{data?.data?.financialInfo?.incomeSourceOther}</div> : null
            }
            {
                (data?.data?.financialInfo?.incomeSourceCode || []).length === 0 && !data?.data?.financialInfo?.incomeSourceOther ?
                    <div className="text-lg px-10 tracking-wide">-</div> : null
            }
            <div className="text-lg px-4 font-semibold tracking-wide">รายได้ต่อเดือน (บาท) Monthly Income (Baht) <span className="text-red-500">*</span></div>
            <div className="text-lg px-10 tracking-wide" >{getIncomeRateText(data?.data?.financialInfo?.incomeRateCode || '-')}</div>
            <div className="text-lg px-4 font-semibold tracking-wide">ประสบการณ์การลงทุน (ปี) Experience in Investment (Year) <span className="text-red-500">*</span></div>
            <div className="text-lg px-10 tracking-wide" >{data?.data?.financialInfo?.investmentYear || 'ไม่มีประสบการณ์'}</div>
            <div className="text-lg px-4 font-semibold tracking-wide">มูลค่าทรัพย์สิน (บาท) Asset Value (Baht) <span className="text-red-500">*</span></div>
            <div className="text-lg px-10 tracking-wide">
                {data?.data?.financialInfo?.assetValue?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || '-'}
            </div>
        </ContentLoading>
    )
}

export default FinancialInformation;