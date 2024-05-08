import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice";
import { prevStep } from "@/libs/redux/store/customer-profile-slice";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import ExitUSIndentity from "./fatca/exit-us-identity";
import USIndentity from "./fatca/us-identity";
import W8 from "./fatca/w8";
import W9 from "./fatca/w9";

export default function Fatca() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const cusomterFatca = useAppSelector(state => state.cusomterFatca)

    const useFormAll = useForm<CustomerFatcaState>({
        defaultValues: cusomterFatca
    })
    const { watch } = useFormAll

    const saveData = () => {
        const { getValues } = useFormAll
        console.log(getValues())
        // dispatch(setDataCustomerContract(getValues()))
        // dispatch(nextStep())
    }

    return <>
        <USIndentity useForm={useFormAll} />
        <ExitUSIndentity useForm={useFormAll} />
        {
            watch('isW9') && <W9 useForm={useFormAll} />
        }
        {
            watch('isW8') && <W8 useForm={useFormAll} />
        }
        {
            isEditable && <div className="flex justify-end gap-4 mt-6">
                <Button variant="contained" color="error" onClick={() => dispatch(prevStep())}>ย้อนกลับ</Button>
                <Button variant="contained" onClick={saveData}>ถัดไป</Button>
            </div>
        }
    </>
}