"use client"

import AddressComponent from "@/components/address";
import InputHorizontal from "@/components/custom/input-horizontal";
import InputRadio from "@/components/custom/input-radio";
import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { setBeneficiaryData } from "@/libs/redux/store/beneficiary";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { BeneficiaryInfoModel, BeneficiaryInfoResponseDataResponse } from "@/services/rest-api/customer-service/models";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ReactElement } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import PersonForm from "./beneficiary/person-form";

interface DetailSection {
    name: keyof BeneficiaryInfoModel
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
}

const fieldList = ({ form }: { form: UseFormReturn<BeneficiaryInfoModel> }): Array<DetailSection> => (

    [
        {
            label: 'เลขที่',
            name: 'addressNo'
        },
        {
            label: 'หมู่ที่',
            name: 'moo'
        },
        {
            label: 'หมู่บ้าน / อาคาร',
            name: 'buildingOrVillage'
        },
        {
            label: 'เลขที่ห้อง',
            name: 'roomNo'
        },
        {
            label: 'ชั้น',
            name: 'floor'
        },
        {
            label: 'ตรอก / ซอย',
            name: 'soi'
        },
        {
            label: 'ถนน',
            name: 'street'
        },
        /*
        {
            label: 'ประเทศ',
            name: 'countryCode',
            type: 'autocomplete',
            onChange: (value) => {
                if (value !== form.watch("countryCode")) {
                    form.setValue('countryCode', value, { shouldDirty: true });
                }
            }
        }
        */
    ]
)

const getValueFromFieldName = (attributeName: string, data: BeneficiaryInfoModel | undefined | null, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as BeneficiaryInfoModel, value) : value
}

const normalizationData = (attributeName: string, data: BeneficiaryInfoModel | undefined, defaultValue: string | boolean) => {
    switch (attributeName) {
        case 'addressNo':
            return handleEmptyStringFormApi(data?.addressNo);
        case 'moo':
            return handleEmptyStringFormApi(data?.moo);
        case 'buildingOrVillage':
            return handleEmptyStringFormApi(data?.buildingOrVillage);
        case 'roomNo':
            return handleEmptyStringFormApi(data?.roomNo);
        case 'floor':
            return handleEmptyStringFormApi(data?.floor);
        case 'soi':
            return handleEmptyStringFormApi(data?.soi);
        case 'street':
            return handleEmptyStringFormApi(data?.street);
        case 'countryCode':
            return handleEmptyStringFormApi(data?.countryCode);
        case 'country':
            return isEmptyStringFormApi(data?.countryCode) ? '-' : `${data?.countryCode} - ${data?.countryDesc}`;
        case 'zipCode':
            return handleEmptyStringFormApi(data?.zipCode);
        case 'province':
            return handleEmptyStringFormApi(data?.provinceNameTh);
        case 'district':
            return handleEmptyStringFormApi(data?.districtNameTh);
        case 'subDistrict':
            return handleEmptyStringFormApi(data?.subDistrictNameTh);
        case 'customAddress1':
            return handleEmptyStringFormApi(data?.customAddress1);
        case 'customAddress2':
            return handleEmptyStringFormApi(data?.customAddress2);
        case 'customAddress3':
            return handleEmptyStringFormApi(data?.customAddress3);
        default:
            return '-';
    }
}

export interface BeneficiaryPageProps {
    data?: BeneficiaryInfoModel
}

const BeneficiaryPage = (props: BeneficiaryPageProps) => {

    const searchParams = useSearchParams()
    const params = useParams()
    const router = useRouter()
    const dispatch = useAppDispatch()

    const isEditable = searchParams.get('edit') === 'true' && !props?.data;

    const beneficiary = useAppSelector(state => state.beneficiary.data)

    const useFormAll = useForm<BeneficiaryInfoModel>({
        defaultValues: { ...beneficiary }
    })

    const form = useFormAll;
    const { setValue, getValues, watch } = form

    const { data: _data, isLoading, error } = useQuery({
        queryKey: ['financialInfo', params.customerId],
        queryFn: async function () {
            try {
                const { customerId } = params;
                const request = await fetch(`/api/customer-profile/beneficiary/${customerId}`)
                const response: BeneficiaryInfoResponseDataResponse = await request.json();
                console.log(`response.data`, response.data)
                if (response.status == 200 && response.data && response.data.beneficiaryInfo) {

                    for (let key in response.data?.beneficiaryInfo) {
                        form.setValue(key as any, response.data?.beneficiaryInfo[key as keyof BeneficiaryInfoModel])
                    }

                    return {
                        isOwner: Object.keys(response.data).length === 0,
                        ...response.data.beneficiaryInfo
                    }
                }

                if (Object.keys(response?.data || {}).length === 0) {
                    form.setValue('isOwner', true)
                }

                return {
                    isOwner: Object.keys(response?.data || {}).length === 0
                };
            } catch (e) {
                return null;
            } finally {
            }
        }
    })

    const data: BeneficiaryInfoModel | undefined | null = props?.data || _data;

    const Address = AddressComponent({
        isEditable: isEditable,
        country: {
            name: 'countryCode',
            isRequired: true,
            textShow: form.watch('countryCode') || '',
            setValue(value) {
                form.setValue('countryCode', value)
            },
        },
        province: {
            name: 'province',
            isRequired: true,
        },
        district: {
            name: 'district',
            isRequired: true,
        },
        subDistrict: {
            name: 'subDistrict',
            isRequired: true,
        },
        zipCode: {
            name: 'zipCode',
            isRequired: true,
        },
        addressValues: {
            postCode: form.watch('zipCode') || '',
            province: normalizationData('province', form.getValues(), ''),
            provinceCode: form.watch('provinceCode') || '',
            district: normalizationData('district', form.getValues(), ''),
            districtCode: form.watch('districtCode') || '',
            subDistrict: normalizationData('subDistrict', form.getValues(), ''),
            subDistrictCode: form.watch('subDistrictCode') || '',
        },
        onAddressChange(address) {
            setValue('zipCode', address.value.postCode, { "shouldDirty": true });
            setValue('provinceNameTh', address.value.province, { "shouldDirty": true });
            setValue('provinceCode', address.value.provinceCode, { "shouldDirty": true });
            setValue('districtNameTh', address.value.district, { "shouldDirty": true });
            setValue('districtCode', address.value.districtCode, { "shouldDirty": true });
            setValue('subDistrictNameTh', address.value.subDistrict, { "shouldDirty": true });
            setValue('subDistrictCode', address.value.subDistrictCode, { "shouldDirty": true });
        },
    })

    const onBack = (e: any) => {
        dispatch(prevStep())
    }

    const onSubmit = () => {
        const { getValues } = useFormAll

        dispatch(setBeneficiaryData(getValues()))
        dispatch(nextStep())
    }

    return (<div>
        <HeaderTitle
            className="gap-0"
            title="ผู้รับผลประโยชน์ที่แท้จริง ULTIMATE BENEFICIARY"
        />
        <div className="px-10">
            <HeaderTitleSub
                title="ข้าพเจ้าเป็นเจ้าของบัญชีและเป็นผู้รับประโยชน์ที่แท้จริงจากการซื้อขายหลักทรัพย์ในบัญชีนี้"
                isBorder={false}
            />
            {
                !isEditable ?
                    <div className="text-lg px-6 tracking-wide" >{data && data.isOwner ? 'ใช่' : 'บุคคลอื่นๆ'}</div>
                    :
                    <InputRadio
                        defaultValue={watch("isOwner") ? "01" : "02"}
                        disabled={!isEditable}
                        onChange={(value) => setValue('isOwner', value === "01" ? true : false)}
                        name={"addressType"}
                        list={[
                            { value: "01", label: 'ใช่ (รับรองว่าไม่มีบุคคลอื่น)' },
                            { value: "02", label: 'บุคคลอื่นๆ (โปรดระบุข้างล่าง)' }
                        ]} />
            }
        </div>
        {
            watch("isOwner") ?
                <></>
                :
                <>
                    <div className="grid grid-cols-3">
                        <PersonForm
                            form={form}
                            dataInfo={data}
                            isEditable={isEditable}
                            getValueFromFieldName={getValueFromFieldName}
                            normalizationData={normalizationData}
                        />
                    </div>
                    <HeaderTitle
                        className="gap-0"
                        title="ที่อยู่ตามประเภทหลักฐาน"
                    />
                    <div className="grid grid-cols-3">
                        {
                            fieldList({ form }).map((detail: DetailSection, idx: number) => {
                                const { name, label, isRequired, normalize } = detail
                                const _value = getValueFromFieldName(name, data, normalize);
                                const textShow = watch(name)?.toString();
                                return <div key={`beneficiary-field-item-${idx}`}>
                                    <InputHorizontal
                                        label={label}
                                        defaultValue={getValues(name || '')?.toString()}
                                        isEditable={isEditable}
                                        textShow={textShow}
                                        name={name}
                                        isRequired={isRequired}
                                        onChange={(value) => setValue(name, value, { shouldDirty: true })}
                                        key={`beneficiary-input-field-item-${idx}`}
                                    />
                                </div>
                            })
                        }

                        {
                            Address
                        }

                    </div>
                </>
        }

        {
            isEditable && <div className="flex justify-end gap-4 mt-4">
                <Button variant="contained" color="error" onClick={onBack}>ย้อนกลับ</Button>
                <Button variant="contained" onClick={onSubmit}>ถัดไป</Button>
            </div>
        }
    </div>)
}

export default BeneficiaryPage