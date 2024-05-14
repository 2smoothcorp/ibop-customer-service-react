import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { ContractConfirm, CustomerContractState, setDataContractConfirm } from "@/libs/redux/store/customer-contract-slice";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { dirtyValues } from "@/utils/function";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormContainer } from "react-hook-form-mui";
import ContractEmergency from "./customer-contract/contract-emergency";
import ContractInformation from "./customer-contract/contract-information";

export default function CustomerContract() {
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const customerContract = useAppSelector(state => state.customerContract)

    const useFormAll = useForm<CustomerContractState>({
        defaultValues: customerContract,
        mode: 'onChange'
    })


    const saveData = (data: CustomerContractState) => {
        setTimeout(() => {
            const { getValues, formState: { dirtyFields } } = useFormAll
            const dirtyData = dirtyValues(dirtyFields, getValues())
            if (dirtyData) {
                const result = dirtyData as ContractConfirm
                // console.log("dirtyData: ", result)
                dispatch(setDataContractConfirm(result))
            }
            dispatch(nextStep())
        }, 300)
    }

    return (
        <FormContainer formContext={useFormAll} onSuccess={saveData}>
            <ContractInformation useForm={useFormAll} />
            <ContractEmergency useForm={useFormAll} />
            {
                isEditable && <div className="flex justify-end gap-4 mt-6">
                    <Button variant="contained" color="error" onClick={() => dispatch(prevStep())}>ย้อนกลับ</Button>
                    <Button variant="contained" type="submit">ถัดไป</Button>
                </div>
            }

        </FormContainer>
    )
}