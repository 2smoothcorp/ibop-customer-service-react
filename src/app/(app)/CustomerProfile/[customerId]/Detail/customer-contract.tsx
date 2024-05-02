import { useAppDispatch } from "@/libs/redux/hook";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import ContractEmergency from "./customer-contract/contract-emergency";
import ContractInformation from "./customer-contract/contract-information";

export default function CustomerContract() {
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    return (
        <>
            <ContractInformation />
            <ContractEmergency />
            {
                isEditable && <div className="flex justify-end gap-4">
                    <Button variant="contained" color="error" onClick={() => dispatch(prevStep())}>ย้อนกลับ</Button>
                    <Button variant="contained" onClick={() => dispatch(nextStep())}>ถัดไป</Button>
                </div>
            }

        </>
    )
}