import HeaderTitle from "@/components/navbar/header-title"
import { useAppSelector } from "@/libs/redux/hook"
import { CustomerAtsEDividendConfirm } from "@/libs/redux/store/customer-ats-e-dividend-slice"
import { ContractConfirm } from "@/libs/redux/store/customer-contract-slice"
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice"
import { CustomerInformationState, PersonalConfirm } from "@/libs/redux/store/customer-information-slice"
import { swal } from "@/libs/sweetalert"
import { BeneficiaryInfoModel, FinancialInfoModel } from "@/services/rest-api/customer-service"
import { Button } from "@mui/material"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import FinancialInformation from "./financial-information"
import SummaryATSInfo from "./summary/ats/table"
import BeneficiaryPage from "./summary/beneficiary"
import SummaryContractEmergencyInfo from "./summary/contract-information/contract-emergency"
import SummaryContractInformationInfo from "./summary/contract-information/contract-information"
import SummaryAddressByCurrentInfo from "./summary/customer-information/address-by-current"
import SummaryAddressByTypeInfo from "./summary/customer-information/address-by-type"
import SummaryOccupationInfo from "./summary/customer-information/occupation-info"
import SummaryPersonalInfo from "./summary/customer-information/personal-info"
import SummaryPoliticRelationInfo from "./summary/customer-information/politic-relation-info"
import SummarySpouseInfo from "./summary/customer-information/spouse-info"
import SummaryEDividendInfo from "./summary/e-dividend/table"
import SummaryFatcaInfo from "./summary/fatca"

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
            <SummaryPersonalInfo data={form.customerInformation.confirm as PersonalConfirm} />
            <SummarySpouseInfo data={form.customerInformation.confirm as PersonalConfirm} />
            <SummaryAddressByTypeInfo data={form.customerInformation.confirm as PersonalConfirm} />
            <SummaryAddressByCurrentInfo data={form.customerInformation.confirm as PersonalConfirm} />
            <SummaryOccupationInfo data={form.customerInformation.confirm as PersonalConfirm} />
            <SummaryPoliticRelationInfo data={form.customerInformation.confirm as PersonalConfirm} />
        </div>

        <div className="rounded-lg border-2 p-4 my-2">
            <SummaryContractInformationInfo data={form.customerContract.confirm as ContractConfirm} />
            <SummaryContractEmergencyInfo data={form.customerContract.confirm as ContractConfirm} />
        </div>

        <div className="rounded-lg border-2 p-4 my-2">
            <FinancialInformation data={form.financialInfomation.confirm as FinancialInfoModel} isReadonly={true} showOnlyChangedFields={true} />
        </div>
        <div className="rounded-lg border-2 p-4 my-2">
            <BeneficiaryPage data={form.beneficiary.confirm as BeneficiaryInfoModel} />
        </div>

        <div className="rounded-lg border-2 p-4 my-2">
            <SummaryATSInfo data={form.customerAtsEDividend.confirm as CustomerAtsEDividendConfirm} />
        </div>
        <div className="rounded-lg border-2 p-4 my-2">
            <SummaryEDividendInfo data={form.customerAtsEDividend.confirm as CustomerAtsEDividendConfirm} />
        </div>

        <div className="rounded-lg border-2 p-4 my-2">
            <div className="pl-8">
                <SummaryFatcaInfo data={form.cusomterFatca as CustomerFatcaState} />
            </div>
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