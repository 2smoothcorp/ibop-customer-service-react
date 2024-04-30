"use client";

import { useRouter } from "next/navigation";
import CustomerProfileContent from "../../customer-profile-content";
import { SearchParams } from "../../page";

const EditCustomerProfileListPage = ({
    searchParams
}: {
    searchParams?: SearchParams
}) => {

    const router = useRouter()

    const onClickDetail = (coperateId: number) => {
        router.push(`/CustomerProfile/${coperateId}/Detail/?edit=true`)
    }
    return <>
        <CustomerProfileContent searchParams={searchParams} onClickWithEditEvent={onClickDetail} />
    </>
}

export default EditCustomerProfileListPage;