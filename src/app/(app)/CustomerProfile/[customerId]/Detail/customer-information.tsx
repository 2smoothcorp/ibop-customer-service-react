import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState, PersonalConfirm, setDataPersonalConfirm } from "@/libs/redux/store/customer-information-slice";
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

let callback: string | number | NodeJS.Timeout | null | undefined = null;

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

    const { setValue } = useFormAll

    const saveData = (data: CustomerInformationState) => {
        setValue('personalInfo.identityExpireDateDayjs', null, { shouldDirty: false })
        setValue('personalInfo.birthDateDayjs', null, { shouldDirty: false })
        setTimeout(() => {
            const { getValues, formState: { dirtyFields } } = useFormAll
            const dirtyData = dirtyValues(dirtyFields, getValues())
            if (dirtyData) {
                const result = dirtyData as PersonalConfirm
                // console.log("dirtyData: ", result)
                dispatch(setDataPersonalConfirm(result))
            }
            dispatch(nextStep())
        }, 300)
    }

    // useEffect(() => {
    //     const subscription = watch((_, { name, type }) => {
    //         if (name) {
    //             const { isDirty } = getFieldState(name);
    //             if (isDirty && (
    //                 type === 'change' ||
    //                 name.search('.zipCode') > 1 ||
    //                 name.search('.provinceCode') > 1 ||
    //                 name.search('.districtCode') > 1 ||
    //                 name.search('.subDistrictCode') > 1 ||
    //                 name.search('.politicianRelation') > 1
    //             )) {
    //                 console.log(callback)
    //                 if (callback) {
    //                     clearTimeout(callback);
    //                 }
    //                 // console.log(name, type, isDirty)
    //                 const value = watch(name);
    //                 if (name == 'personalInfo.birthDateDayjs' && typeof value === 'object') {
    //                     const dataString = dayjs(value as Dayjs).format('YYYY-MM-DD')
    //                     const objValue = normalizationDataFormHook("personalInfo.birthDate", dataString);
    //                     dispatch(setDataPersonalConfirm(objValue))
    //                 } else if (name == 'personalInfo.identityExpireDateDayjs' && typeof value === 'object') {
    //                     const dataString = dayjs(value as Dayjs).format('YYYY-MM-DD')
    //                     const objValue = normalizationDataFormHook("personalInfo.identityExpireDate", dataString);
    //                     dispatch(setDataPersonalConfirm(objValue))
    //                 } else {
    //                     const objValue = normalizationDataFormHook(name, value);
    //                     dispatch(setDataPersonalConfirm(objValue))
    //                 }
    //             }
    //         }
    //     });
    //     return () => subscription.unsubscribe();
    // }, [getFieldState, watch, dispatch]);

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

