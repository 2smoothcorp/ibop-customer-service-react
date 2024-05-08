"use client"

import ContentLoading from "@/components/content/content-loading";
import HeaderNavbar from "@/components/navbar/header-navbar";
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice";
import { TinInfoOutput } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function W8({ useForm }: { useForm: UseFormReturn<CustomerFatcaState, any, undefined> }) {
    const { watch, setValue } = useForm;
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const params = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['fatca-w8', params.customerId],
        queryFn: () => getData(),
    })

    const getData = async () => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/w8/${customerId}`, { method: 'GET' });
                const response: TinInfoOutput = await request.json();
                const { isFatcaIndividualSelfCert } = response;
                if (response) {
                    setValue('isFatcaIndividualSelfCert', isFatcaIndividualSelfCert || false)
                    return response;
                }
            } catch (error) {
                throw error
            }
        }
        return null
    }

    return (
        <>
            <HeaderNavbar
                title="Certificate of Foreign Status of Beneficial Owner for UnitedStates Tax Withholding and Reporting (Individuals) W-8BEN"
            />
            <ContentLoading
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={300}
            >
                <></>
            </ContentLoading>

        </>
    )
}
