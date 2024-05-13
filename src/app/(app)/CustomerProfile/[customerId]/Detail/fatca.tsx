import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { AnswerInput, CustomerFatcaState, setAnswerInput, setFatcaW8Input, setFatcaW9Input, setIsFatcaIndividualSelfCertified, setTinInput } from "@/libs/redux/store/customer-fatca-slice";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormContainer } from "react-hook-form-mui";
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
    // const confirm = useAppSelector(state => state.cusomterFatca.confirm)

    // useEffect(() => {
    //     console.log('confirm', confirm)
    // }, [confirm])

    const useFormAll = useForm<CustomerFatcaState>({
        defaultValues: cusomterFatca
    })
    const { watch } = useFormAll


    const saveData = (data: CustomerFatcaState) => {
        const { formState: { dirtyFields } } = useFormAll
        // console.log(dirtyFields)
        const { americaStatus, isFatcaIndividualSelfCert, tinInput, w8 } = dirtyFields
        if (americaStatus && americaStatus?.length > 0) {
            const answerInput = data.americaStatus.map((item) => { return { questionId: item.questionId, choiceId: item.choiceId } as AnswerInput })
            dispatch(setAnswerInput(answerInput));
        }
        // if (isFatcaIndividualSelfCert !== undefined) {
        if (data.isFatcaIndividualSelfCert) {
            dispatch(setIsFatcaIndividualSelfCertified(data.isFatcaIndividualSelfCert))
        }
        // }
        if (tinInput !== undefined) {
            if (data.tinInput) {
                dispatch(setTinInput(data.tinInput))
            }


        }
        if (data.isW8) {
            if (data.w8) {
                dispatch(setFatcaW8Input(data.w8))
            }
        } else {
            dispatch(setFatcaW8Input(null))
        }

        if (data.isW9) {
            if (data.w9) {
                dispatch(setFatcaW9Input(data.w9))
            }
        } else {
            dispatch(setFatcaW9Input(null))
        }
        dispatch(nextStep())
    }

    return <FormContainer formContext={useFormAll} onSuccess={saveData}>
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
                <Button variant="contained" type="submit">ถัดไป</Button>
            </div>
        }
    </FormContainer>
}