import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState, setDataCustomerInformation } from "@/libs/redux/store/customer-information-slice";
import { nextStep } from "@/libs/redux/store/customer-profile-slice";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
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

    const saveData = () => {
        const { getValues } = useFormAll
        dispatch(setDataCustomerInformation(getValues()))
        dispatch(nextStep())
    }

    return (
        <>
            <PersonalInfo useForm={useFormAll} />
            <SpouseInfo useForm={useFormAll} />
            <AddressByType useForm={useFormAll} />
            <AddressByCurrent useForm={useFormAll} />
            <OccupationInfo useForm={useFormAll} />
            <PoliticRelationInfo useForm={useFormAll} />
            {
                isEditable && <div className="flex justify-end gap-4">
                    <Button variant="contained" color="error" onClick={() => router.push('/CustomerProfile/Edit/Offline')}>ย้อนกลับ</Button>
                    <Button variant="contained" onClick={saveData}>ถัดไป</Button>
                </div>
            }
        </>
    )
}

