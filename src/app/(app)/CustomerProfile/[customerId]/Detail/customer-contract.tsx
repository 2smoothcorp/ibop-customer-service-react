import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { CustomerContractState } from "@/libs/redux/store/customer-contract-slice";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import ContractEmergency from "./customer-contract/contract-emergency";
import ContractInformation from "./customer-contract/contract-information";

export default function CustomerContract() {
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const customerContract = useAppSelector(state => state.customerContract)

    const useFormAll = useForm<CustomerContractState>({
        defaultValues: customerContract
    })

    return (
        <>
            <ContractInformation useForm={useFormAll} />
            <ContractEmergency useForm={useFormAll} />
            {
                isEditable && <div className="flex justify-end gap-4 mt-6">
                    <Button variant="contained" color="error" onClick={() => dispatch(prevStep())}>ย้อนกลับ</Button>
                    <Button variant="contained" onClick={() => dispatch(nextStep())}>ถัดไป</Button>
                </div>
            }

        </>
    )
}