"use client"

import AddressComponent from "@/components/address";
import InputHorizontal from "@/components/custom/input-horizontal";
import { AddressInfo } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel, BeneficiaryInfoModel } from "@/services/rest-api/customer-service/models";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { Button } from "@mui/material";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import PersonForm from "./person-form";

interface DetailSection {
    name: keyof AddressInfo
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
}

const fieldList = ({ form }: { form: UseFormReturn<AddressInfo> }): Array<DetailSection> => (

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
    ]
)

const getValueFromFieldName = (attributeName: string, data: AddressInfoModel | undefined, normalize?: string): string => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as AddressInfoModel, value) : value
}

const normalizationData = (attributeName: string, data: AddressInfoModel | undefined, defaultValue: string) => {
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

const addressInfo: any = {};

const TestPage = () => {

    const isEditable = true

    //const addressInfo = useAppSelector(state => state.customerInformation)
    const addressInfo: AddressInfo = {
        addressType: '01',
        addressNo: '',
        moo: '',
        buildingOrVillage: '',
        roomNo: '',
        floor: '',
        soi: '',
        street: '',
        country: '',
        countryCode: '000',
        zipCode: '',
        provinceCode: '',
        districtCode: '',
        subDistrictCode: '',
        customAddress1: '',
        customAddress2: '',
        customAddress3: '',
    }

    const personInfo: BeneficiaryInfoModel = {

    }

    const useFormAll = useForm<AddressInfo & BeneficiaryInfoModel>({
        defaultValues: addressInfo
    })

    const form = useFormAll;
    const { register, setValue, watch } = form

    const setValueToForm = (name: keyof AddressInfo, value: any) => {
        setValue(name, value)
    }

    const Address = AddressComponent({
        isEditable: true,
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
            isRequired: true
        },
        zipCode: {
            name: 'zipCode',
            isRequired: true
        },
        addressValues: {
            postCode: '10220',
            province: '',
            provinceCode: '',
            district: '',
            districtCode: '',
            subDistrict: '',
            subDistrictCode: '',
        },
        onAddressChange(address) {
            setValue('zipCode', address.value.postCode, { "shouldDirty": true });
            setValue('provinceCode', address.value.provinceCode, { "shouldDirty": true });
            setValue('districtCode', address.value.districtCode, { "shouldDirty": true });
            setValue('subDistrictCode', address.value.subDistrictCode, { "shouldDirty": true });
        },
    })

    const saveData = () => {
        const { getValues } = useFormAll
        console.log(`saveData fields ===> `, getValues())
    }

    return (<div>
        <div className="grid grid-cols-3">
            <PersonForm form={form} dataInfo={personInfo} isEditable={isEditable} />
        </div>
        <div className="grid grid-cols-3">
            {
                fieldList({ form }).map((detail: DetailSection, idx: number) => {
                    const { name, label, defaultValue, isRequired, normalize } = detail
                    const _value = getValueFromFieldName(name, addressInfo, normalize);
                    const textShow = watch(name);
                    return <React.Fragment key={`field-item-${idx}`}>
                        <InputHorizontal
                            label={label}
                            defaultValue={_value}
                            isEditable={isEditable}
                            textShow={textShow}
                            //register={register}
                            name={name}
                            isRequired={isRequired}
                            onChange={(value) => setValue(name, value, { shouldDirty: true })}
                        />
                    </React.Fragment>
                })
            }

            {
                Address.ZipCode
            }
            {
                Address.Province
            }
            {
                Address.District
            }
            {
                Address.SubDistrict
            }


        </div>
        <Button variant="contained" onClick={saveData}>ถัดไป</Button>
    </div>)
}

export default TestPage