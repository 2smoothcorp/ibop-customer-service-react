import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState, setDataPersonalConfirm } from "@/libs/redux/store/customer-information-slice";
import { normalizationDataFormHook } from "@/utils/function";
import { Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
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
        defaultValues: customerInformation,
        mode: 'onChange'
    })
    const { watch, getFieldState } = useFormAll

    const saveData = (data: CustomerInformationState) => {
        const { formState: { dirtyFields }, getValues } = useFormAll
        console.log(dirtyFields, getValues())
        // const dirtyData = dirtyValues(dirtyFields, getValues())
        // dispatch(setDataCustomerInformation(data))
        // console.log(data, dirtyData)
        // if (dirtyData) {
        //     dispatch(setDataPersonalConfirm(dirtyData))
        // }
    }

    useEffect(() => {
        const subscription = watch((_, { name, type }) => {
            if (name) {
                const { isDirty } = getFieldState(name);
                if (isDirty && (
                    type === 'change' ||
                    name.search('.zipCode') > 1 ||
                    name.search('.provinceCode') > 1 ||
                    name.search('.districtCode') > 1 ||
                    name.search('.subDistrictCode') > 1 ||
                    name.search('.politicianRelation') > 1
                )) {
                    const value = watch(name);
                    if (name == 'personalInfo.birthDateDayjs' && typeof value === 'object') {
                        const dataString = dayjs(value as Dayjs).format('YYYY-MM-DD')
                        const objValue = normalizationDataFormHook("personalInfo.birthDate", dataString);
                        dispatch(setDataPersonalConfirm(objValue))
                    } else if (name == 'personalInfo.identityExpireDateDayjs' && typeof value === 'object') {
                        const dataString = dayjs(value as Dayjs).format('YYYY-MM-DD')
                        const objValue = normalizationDataFormHook("personalInfo.identityExpireDate", dataString);
                        dispatch(setDataPersonalConfirm(objValue))
                    } else {
                        const objValue = normalizationDataFormHook(name, value);
                        dispatch(setDataPersonalConfirm(objValue))
                    }
                }
            }
        });
        return () => subscription.unsubscribe();
    }, [getFieldState, watch, dispatch]);

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

