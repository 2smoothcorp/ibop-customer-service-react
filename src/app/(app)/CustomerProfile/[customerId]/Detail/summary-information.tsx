import HeaderTitle from "@/components/navbar/header-title"
import { useAppSelector } from "@/libs/redux/hook"
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice"
import { swal } from "@/libs/sweetalert"
import { services } from "@/services"
import { CustomerProfileV2Api, PersonalInfoRequest } from "@/services/rest-api/customer-service"
import { Button } from "@mui/material"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"

const SummaryInformation = () => {

    const params = useParams()

    const form = useAppSelector((state) => state)

    const useFormAll = useForm<CustomerInformationState>({
        defaultValues: form.customerInformation
    })

    const onCancel = async () => {
        await swal({
            title: 'คุณต้องการยกเลิกการแก้ไขข้อมูล',
            description: '',
            icon: 'question',
            confirmButton: { text: 'WIP' }
        });
    }

    const onSubmit = async () => {
        try {
            const customerProfileApi = await services.getCustomerServiceApi();
            const api: CustomerProfileV2Api = customerProfileApi.getCustomerProfileV2Api()
            await api.customerProfileCustomerInformationCorporateIdPut({
                corporateId: params.customerId as string,
                customerProfileCustomerInformationCorporateIdPutRequest: {
                    personalInfo: form.customerInformation as PersonalInfoRequest,
                    beneficiaryInfo: form.beneficiary.data,
                }
            })
        } catch (e) {
            console.error(`SummaryInformation onSubmit function`, e)
        } finally {

        }
    }

    return (<>
        <HeaderTitle
            className="gap-0"
            title="สรุแรายละเอียดที่แก้ไข"
        />
        {
            <div className="flex justify-end gap-4">
                <Button variant="contained" color="error" onClick={onCancel}>ยกเลิก</Button>
                <Button variant="contained" onClick={onSubmit}>บันทึก</Button>
            </div>
        }
    </>)
}

export default SummaryInformation