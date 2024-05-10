import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState, setDataCustomerInformation, setDataPersonalConfirm } from "@/libs/redux/store/customer-information-slice";
import { nextStep } from "@/libs/redux/store/customer-profile-slice";
import { dirtyValues } from "@/utils/function";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormContainer } from "react-hook-form-mui";
import AddressByCurrent from "./customer-information/address-by-current";
import AddressByType from "./customer-information/address-by-type";
import OccupationInfo from "./customer-information/occupation-info";
import PersonalInfo from "./customer-information/personal-info";
import PoliticRelationInfo from "./customer-information/politic-relation-info";
import SpouseInfo from "./customer-information/spouse-info";

export default function CustomerInformation() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const customerInformation = useAppSelector(state => state.customerInformation)

    const useFormAll = useForm<CustomerInformationState>({
        defaultValues: customerInformation
    })

    const saveData = (data: CustomerInformationState) => {
        const { formState: { dirtyFields }, getValues } = useFormAll
        // console.log(dirtyFields, getValues)
        const dirtyData = dirtyValues(dirtyFields, getValues())
        dispatch(setDataCustomerInformation(data))
        // console.log(dirtyData)
        if (dirtyData) {
            dispatch(setDataPersonalConfirm(dirtyData))
        }
        dispatch(nextStep())
    }

    return (
        <FormContainer formContext={useFormAll} onSuccess={saveData}>
            <PersonalInfo useForm={useFormAll} />
            <SpouseInfo useForm={useFormAll} />
            <AddressByType useForm={useFormAll} />
            <AddressByCurrent useForm={useFormAll} />
            <OccupationInfo useForm={useFormAll} />
            <PoliticRelationInfo useForm={useFormAll} />
            {
                isEditable && <div className="flex justify-end gap-4">
                    <Button variant="contained" color="error" onClick={() => router.push('/CustomerProfile/Edit/Offline')}>ย้อนกลับ</Button>
                    <Button variant="contained" type="submit">ถัดไป</Button>
                    {/* <Button variant="contained" onClick={saveData}>ถัดไป</Button> */}
                </div>
            }
        </FormContainer>
    )
}

