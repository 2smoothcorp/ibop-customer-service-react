import HeaderTitle from "@/components/navbar/header-title"
import { useAppSelector } from "@/libs/redux/hook"
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice"
import { swal } from "@/libs/sweetalert"
import { Button } from "@mui/material"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import SummaryFatcaInfo from "./summary/fatca"
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice"

const SummaryInformation = () => {

    const params = useParams()

    const form = useAppSelector((state) => state)

    //console.log(`SummaryInformation`, form)

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
            const request = await fetch(`/api/customer-profile/update/${params.customerId}`, {
                method: 'PUT',
                body: JSON.stringify(form)
            })

            console.log(`request`, request)
            console.log(`ResponseError`, await request.text())
        } catch (e) {
            console.error(`SummaryInformation onSubmit function`, e)
        } finally {

        }
    }

    console.log(`form.customerInformation.confirm`, form)

    return (<>
        <HeaderTitle
            className="gap-0"
            title="สรุปรายละเอียดที่แก้ไข"
        />
        <div className="rounded-lg border-2 p-4 my-2">
            {/*
            <SummaryPersonalInfo data={form.customerInformation.confirm as CustomerInformationState} />
            <SummarySpouseInfo data={form.customerInformation.confirm as CustomerInformationState} />
            <SummaryAddressByTypeInfo data={form.customerInformation.confirm as CustomerInformationState} />
            <SummaryAddressByCurrentInfo data={form.customerInformation.confirm as CustomerInformationState} />
            <SummaryOccupationInfo data={form.customerInformation.confirm as PersonalConfirm} />
            <SummaryPoliticRelationInfo data={form.customerInformation.confirm as CustomerInformationState} />
            */}
        </div>

        {/*
        <div className="rounded-lg border-2 p-4 my-2">
            <SummaryContractInformationInfo data={form.customerContract.confirm as ContractConfirm} />
            <SummaryContractEmergencyInfo data={form.customerContract.confirm as ContractConfirm} />
        </div>
        */}

        {/*
        <div className="rounded-lg border-2 p-4 my-2">
            <FinancialInformation data={form.financialInfomation as FinancialInfoModel} />
        </div>
        <div className="rounded-lg border-2 p-4 my-2">
            <BeneficiaryPage data={form.beneficiary.data as BeneficiaryInfoModel} />
        </div>
        <div className="rounded-lg border-2 p-4 my-2">
            <SummaryATSInfo data={form.customerAtsEDividend as CustomerAtsEDividendState} />
        </div>
        <div className="rounded-lg border-2 p-4 my-2">
            <SummaryEDividendInfo data={form.customerAtsEDividend as CustomerAtsEDividendState} />
        </div>
        */}

        <div className="rounded-lg border-2 p-4 my-2">
            <SummaryFatcaInfo data={form.cusomterFatca as CustomerFatcaState} />
        </div>

        {
            <div className="flex justify-end gap-4">
                <Button variant="contained" color="error" onClick={onCancel}>ยกเลิก</Button>
                <Button variant="contained" onClick={onSubmit}>บันทึก</Button>
            </div>
        }
    </>)
}

export default SummaryInformation