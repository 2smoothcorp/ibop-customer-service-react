"use client"

import AddressComponent from "@/components/address";
import InputHorizontal from "@/components/custom/input-horizontal";
import InputRadio from "@/components/custom/input-radio";
import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { BeneficiaryInfoModel } from "@/services/rest-api/customer-service/models";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { Button } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import PersonForm from "./person-form";

interface DetailSection {
    name: keyof BeneficiaryInfoModel
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
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

const addressInfo: any = {};

const TestPage = () => {

    const params = useParams()
    const [isEditable, setIsEditable] = React.useState<boolean>(true);
    /*
    const { data, isLoading, error } = useQuery({
        queryKey: ['financialInfo', params.customerId],
        queryFn: async function () {
            try {
                const { customerId } = params;
                const request = await fetch(`/api/customer-profile/beneficiary/${customerId}`)
                const response: BeneficiaryInfoResponseDataResponse = await request.json();
                if (response.status == 200 && response.data && response.data.beneficiaryInfo) {
                    return response.data.beneficiaryInfo
                }
                return null;
            } catch (e) {
                return null;
            } finally {
            }
        }
    })
    */
    const data: BeneficiaryInfoModel | undefined = undefined;

    const useFormAll = useForm<BeneficiaryInfoModel>({
        defaultValues: { ...data }
    })

    const form = useFormAll;
    const { register, setValue, watch } = form

    const setValueToForm = (name: keyof BeneficiaryInfoModel, value: any) => {
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
                        <PersonForm form={form} dataInfo={data} isEditable={isEditable} getValueFromFieldName={getValueFromFieldName} normalizationData={normalizationData} />
                    </div>
                    <HeaderTitle
                        className="gap-0"
                        title="ที่อยู่ตามประเภทหลักฐาน"
                    />
                    <div className="grid grid-cols-3">
                        {
                            fieldList({ form }).map((detail: DetailSection, idx: number) => {
                                const { name, label, defaultValue, isRequired, normalize } = detail
                                const _value = getValueFromFieldName(name, addressInfo, normalize);
                                const textShow = watch(name)?.toString();
                                return <React.Fragment key={`field-item-${idx}`}>
                                    <InputHorizontal
                                        label={label}
                                        defaultValue={_value.toString()}
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
                </>
        }

        <Button variant="contained" onClick={saveData}>ถัดไป</Button>
    </div>)
}

export default TestPage