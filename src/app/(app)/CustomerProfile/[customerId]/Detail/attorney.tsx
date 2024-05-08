import AddressComponent, { AddressComponentReturn } from "@/components/address";
import ContentLabel from "@/components/content/content-label";
import ContentLoading from "@/components/content/content-loading";
import InputCheckbox from "@/components/custom/input-checkbox";
import InputHorizontal from "@/components/custom/input-horizontal";
import InputRadio from "@/components/custom/input-radio";
import NationDDL from "@/components/dropdownlist/nation-ddl";
import ReferenceTypeDDL from "@/components/dropdownlist/reference-type-ddl";
import RelationShipDDL from "@/components/dropdownlist/relationship-ddl";
import TitleDDL from "@/components/dropdownlist/title-ddl";
import HeaderTitle from "@/components/navbar/header-title";
import useMasterDataProduct from "@/hooks/masterDataProduct";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { setAttorneyData } from "@/libs/redux/store/attorney";
import { nextStep } from "@/libs/redux/store/customer-profile-slice";
import { AttorneyInfoModel, AttorneyInfoResponse, AttorneyInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { ApiResponse } from "@/type/api";
import { handleEmptyStringFormApi } from "@/utils/function";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { UseFormReturn, useFieldArray, useForm } from "react-hook-form";

interface DetailSection {
    name?: keyof AttorneyInfoModel
    label: string
    defaultValue: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    onChange?: (value: string) => void
    CustomComponent?: any
}

interface SectionList {
    form: UseFormReturn<{
        attorneyInfo: Array<AttorneyInfoModel>,
        isAttorney?: boolean
    }>
    isEditable?: boolean,
    index: number,
    fieldName?: any
    AddressComponent?: AddressComponentReturn
}

const attorneySectionList = ({ form, isEditable, index, fieldName }: SectionList): Array<DetailSection> => ([
    {
        name: 'referenceTypeDesc',
        label: 'ประเภทหลักฐาน',
        defaultValue: '',
        isRequired: true,
        normalize: 'reference',
        CustomComponent: <ReferenceTypeDDL
            name={`${fieldName}.${index}.referenceTypeDesc`}
            isEditable={isEditable}
            setValue={(value) => form.setValue(`${fieldName}.${index}.referenceTypeDesc` as any, value)}
            defaultValue={form.watch(`${fieldName}.${index}.referenceTypeDesc` as any)}
        />
    },
    {
        name: 'referenceNo',
        label: 'เลขที่บัตร',
        defaultValue: '',
        isRequired: true
    },
    {
        name: 'nationCode',
        label: 'ประเทศเจ้าของสัญชาติ',
        defaultValue: '',
        isRequired: true,
        normalize: 'nation',
        CustomComponent: <NationDDL
            name={`${fieldName}.${index}.nationCode`}
            isEditable={isEditable}
            setValue={(value) => form.setValue(`${fieldName}.${index}.nationCode` as any, value)}
            defaultValue={form.watch(`${fieldName}.${index}.nationCode` as any)}
        />
    },
    {
        name: 'titleDesc',
        label: 'คำนำหน้า',
        defaultValue: '',
        isRequired: true,
        normalize: 'title',
        CustomComponent: <TitleDDL
            name={`${fieldName}.${index}.titleCode`}
            isEditable={isEditable}
            setValue={(value) => form.setValue(`${fieldName}.${index}.titleCode` as any, value)}
            defaultValue={form.watch(`${fieldName}.${index}.titleCode` as any)}
        />
    },
    {
        name: 'name',
        label: 'ชื่อ-นามสกุล ผู้รับมอบอำนาจ',
        defaultValue: '',
        isRequired: true,
    },
    {
        name: 'relationDesc',
        label: 'ความสัมพันธ์',
        defaultValue: 'สามี',
        normalize: 'relation',
        CustomComponent: <RelationShipDDL
            name={`${fieldName}.${index}.relationCode`}
            relationshipOtherName={`${fieldName}.${index}.relationOther`}
            isEditable={isEditable}
            setValue={(value) => form.setValue(`${fieldName}.${index}.relationCode` as any, value)}
            defaultValue={form.watch(`${fieldName}.${index}.relationCode` as any)}
        />
    },
    {
        name: 'mobileNo',
        label: 'โทรศัพท์มือถือ',
        defaultValue: '083-3333333',
    },
    {
        name: 'email',
        label: 'อีเมล',
        defaultValue: 'ABCD@hotmail.com',
    },
])

const addressAttornetSectionList = ({ form, isEditable, index, fieldName }: SectionList): Array<DetailSection> => {

    return [
        {
            name: 'addressNo',
            label: 'เลขที่',
            defaultValue: '',
            isRequired: true
        },
        {
            name: 'moo',
            label: 'หมู่ที่',
            defaultValue: '',
            isRequired: true
        },
        {
            name: 'buildingOrVillage',
            label: 'หมู่บ้าน / อาคาร',
            defaultValue: '',
            isRequired: true
        },
        {
            name: 'roomNo',
            label: 'ห้อง',
            defaultValue: '',
            isRequired: true
        },
        {
            name: 'floor',
            label: 'ชั้น',
            defaultValue: '',
            isRequired: true
        },
        {
            name: 'soi',
            label: 'ตรอก / ซอย',
            defaultValue: '',
        },
        {
            name: 'street',
            label: 'ถนน',
            defaultValue: '',
        }
    ]
}

const getValueFromFieldName = (attributeName: string, data: AttorneyInfoModel | AttorneyInfoResponse | undefined, normalize?: string): string => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as AttorneyInfoModel, value) : value
}

const normalizationData = (attributeName: string, data: AttorneyInfoModel | undefined, defaultValue: string) => {
    switch (attributeName) {
        case 'nation':
            return data?.nationCode ? `${data?.nationCode} - ${data?.nationDesc}` : '-';
        case 'reference':
            return data?.referenceTypeCode ? `${data?.referenceTypeCode} - ${data?.referenceTypeDesc}` : '-';
        case 'country':
            return data?.countryCode ? `${data?.countryCode} - ${data?.countryDesc}` : '-';
        case 'relation':
            return data?.relationCode ? `${data?.relationCode} - ${data?.relationDesc}` : '-';
        case 'title':
            return data?.titleCode ? `${data?.titleCode} - ${data?.titleDesc}` : '-';
        case 'zipCode':
            return handleEmptyStringFormApi(data?.zipCode);
        case 'province':
            return handleEmptyStringFormApi(data?.provinceNameTh);
        case 'district':
            return handleEmptyStringFormApi(data?.districtNameTh);
        case 'subDistrict':
            return handleEmptyStringFormApi(data?.subDistrictNameTh);
        default:
            return defaultValue;
    }
}

const AttorneySection = () => {

    const searchParams = useSearchParams()
    const params = useParams()
    const router = useRouter()
    const dispatch = useAppDispatch()

    const isEditable = searchParams.get('edit') === 'true';

    const attorney = useAppSelector(state => state.attorney.data)

    const masterDataProduct = useMasterDataProduct();


    const useFormAll = useForm<{ attorneyInfo: Array<AttorneyInfoModel>, isAttorney?: boolean }>({
        defaultValues: {
            isAttorney: attorney.length ? true : false,
            attorneyInfo: [...attorney] || []
        }
    })

    const form = useFormAll;
    const { register, setValue, watch, control, handleSubmit, getValues } = form
    const { fields, append, remove } = useFieldArray({
        control,
        name: "attorneyInfo"
    })

    const { data, isLoading, error } = useQuery({
        queryKey: ['attorneyInfo', params.customerId],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/customer-profile/attorney/${params.customerId}`)
                const response: ApiResponse<AttorneyInfoResponseDataResponse> = await request.json();
                // console.log(`response`, response)
                response.data?.data?.attorneyInfo?.forEach((attorneyInfo: AttorneyInfoModel, idx: number) => {
                    for (let key in attorneyInfo) {
                        form.setValue(`attorneyInfo.${idx}.${key}` as any, attorneyInfo[key as keyof AttorneyInfoModel])
                    }
                })
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    const addAttroney = () => {
        append({})
    }

    const isProductCodesExist = (fieldName: string, value: string = '') => {
        return (form.getValues(fieldName as any) || [])?.filter(p => p == value).length ? true : false
    }

    const toggleProductCodes = (fieldName: string, value: string, isChecked: boolean) => {
        const _vaules = getValues(fieldName as any) || [];
        let _newValues = []
        //console.log(_vaules, value, isChecked)
        if (isChecked) {
            _newValues = [..._vaules, value]
        } else {
            _newValues = _vaules.filter(v => v !== value)
        }
        setValue(fieldName as any, _newValues);
    }

    const getAddressSection = ({ fieldName, index }: { fieldName: string, index: number }) => {
        return <AddressComponent
            isEditable={true}
            country={{
                name: `${fieldName}.${index}.countryCode`,
                isRequired: true,
                textShow: form.watch(`${fieldName}.${index}.countryCode` as any) || '',
                setValue: (value) => {
                    form.setValue(`${fieldName}.${index}.countryCode` as any, value)
                },
            }}
            province={{
                name: 'province',
                isRequired: true,
            }}
            district={{
                name: 'district',
                isRequired: true,
            }}
            subDistrict={{
                name: 'subDistrict',
                isRequired: true,
            }}
            zipCode={{
                name: 'zipCode',
                isRequired: true,
            }}
            addressValues={{
                postCode: form.watch(`${fieldName}.${index}.zipCode` as any) || '',
                province: normalizationData('province', form.getValues(`${fieldName}.${index}` as any), ''),
                provinceCode: form.watch(`${fieldName}.${index}.provinceCode` as any) || '',
                district: normalizationData('district', form.getValues(`${fieldName}.${index}` as any), ''),
                districtCode: form.watch(`${fieldName}.${index}.districtCode` as any) || '',
                subDistrict: normalizationData('subDistrict', form.getValues(`${fieldName}.${index}` as any), ''),
                subDistrictCode: form.watch(`${fieldName}.${index}.subDistrictCode` as any) || '',
            }}
            onAddressChange={(address) => {
                form.setValue(`${fieldName}.${index}.zipCode` as any, address.value.postCode);
                form.setValue(`${fieldName}.${index}.provinceNameTh` as any, address.value.province);
                form.setValue(`${fieldName}.${index}.provinceCode` as any, address.value.provinceCode);
                form.setValue(`${fieldName}.${index}.districtNameTh` as any, address.value.district);
                form.setValue(`${fieldName}.${index}.districtCode` as any, address.value.districtCode);
                form.setValue(`${fieldName}.${index}.subDistrictNameTh` as any, address.value.subDistrict);
                form.setValue(`${fieldName}.${index}.subDistrictCode` as any, address.value.subDistrictCode);
            }}
        />
    }

    const onBack = (e: any) => {
        router.push('/CustomerProfile/Edit/Offline')
    }

    const onSubmit = (e: any) => {
        const { getValues } = useFormAll
        const { isAttorney, attorneyInfo } = getValues()
        if (isAttorney) {
            dispatch(setAttorneyData(attorneyInfo))
        } else {
            dispatch(setAttorneyData([]))
        }
        dispatch(nextStep())
    }

    return (
        <ContentLoading
            isLoading={isLoading}
        >
            <HeaderTitle
                className="gap-0"
                title="ผู้รับมอบอำนาจ Attorney"
            />
            <ContentLabel
                label="ข้าพเจ้ามีความประสงค์ที่จะมอบอำนาจให้บุคคลอื่นทำธุรกรรมในตลาดทุนแทนข้าพเจ้า"
            >
                {
                    isEditable ?
                        <InputRadio
                            defaultValue={(watch("attorneyInfo") || []).length === 0 ? "N" : "Y"}
                            value={watch("isAttorney") ? "Y" : "N"}
                            disabled={!isEditable}
                            onChange={(value) => setValue('isAttorney', value === "Y")}
                            name={"isAttorney"}
                            list={[
                                { value: "N", label: 'ไม่มี' },
                                { value: "Y", label: 'มี (โปรดระบุด้านล่าง)' }
                            ]} />
                        :
                        (data?.data?.attorneyInfo || []).length === 0 ? 'ไม่มี' : 'มี'
                }
            </ContentLabel>
            {
                !isEditable || watch("isAttorney") ?
                    fields?.map((attorneyInfo, index) => {
                        return <div key={`attorney${index}`} className="border border-[#00000080] p-4 rounded-lg">

                            <div>
                                <HeaderTitle
                                    className="gap-0"
                                    title={`ผู้รับมอบอำนาจคนที่ ${index + 1}`}
                                />
                                <div className="grid grid-cols-3">
                                    {
                                        attorneySectionList({ form, isEditable, index, fieldName: `attorneyInfo` }).map((attorneySection: DetailSection, idx: number) => {
                                            const { name, label, defaultValue, isRequired, normalize, CustomComponent } = attorneySection;
                                            const _dataInfo = (name?.toString() === 'referenceId' ? data?.data : attorneyInfo) || undefined;
                                            const value = getValueFromFieldName(name || '', _dataInfo, normalize)
                                            const _fieldName = `attorneyInfo.${index}.${name}`;

                                            if (CustomComponent) return CustomComponent

                                            return <React.Fragment key={idx}>
                                                <InputHorizontal
                                                    label={label}
                                                    defaultValue={value}
                                                    isEditable={isEditable}
                                                    //register={register}
                                                    name={name || ''}
                                                    isRequired
                                                    onChange={(value) => setValue(_fieldName as any, value)}
                                                />
                                            </React.Fragment>
                                        })
                                    }
                                </div>

                                <HeaderTitle
                                    className="ml-8 gap-0"
                                    title="ที่อยู่ปัจจุบันที่ติดต่อได้"
                                />
                                <div className="grid grid-cols-3">
                                    {
                                        addressAttornetSectionList({
                                            form, isEditable, index,
                                            fieldName: "attorneyInfo"
                                        }).map((attorneySection: DetailSection, idx: number) => {
                                            const { name = '', label, defaultValue, isRequired, normalize, CustomComponent } = attorneySection;
                                            const value = getValueFromFieldName(name, attorneyInfo, normalize);
                                            const _fieldName = `attorneyInfo.${index}.${name}`;

                                            if (CustomComponent) return CustomComponent

                                            return <React.Fragment key={idx}>
                                                <InputHorizontal
                                                    label={label}
                                                    defaultValue={value}
                                                    isEditable={isEditable}
                                                    //register={register}
                                                    name={name}
                                                    isRequired={isRequired}
                                                    onChange={(value) => setValue(_fieldName as any, value)}
                                                />
                                            </React.Fragment>
                                        })
                                    }
                                    {
                                        getAddressSection({ fieldName: 'attorneyInfo', index })
                                    }

                                </div>

                                <HeaderTitle
                                    className="ml-8 gap-0"
                                    title="มอบอำนาจในการแทนข้าพเจ้าในบัญชี"
                                />
                                <div className="ml-14">
                                    {
                                        isEditable ?
                                            <>
                                                {
                                                    masterDataProduct?.data?.map((p, idx) => {
                                                        return (
                                                            <div key={`product_${idx}`}>
                                                                <InputCheckbox
                                                                    label={p?.rText || ''}
                                                                    name={`attorneyInfo.${index}.productCode`}
                                                                    defaultValue={isProductCodesExist(`attorneyInfo.${index}.productCode`, p?.rValue || '')}
                                                                    width={'max-content'}
                                                                    onChange={(value) => toggleProductCodes(`attorneyInfo.${index}.productCode`, p?.rValue || '', value)}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                            :
                                            attorneyInfo?.productCode?.map((productCode: string, idx: number) => {
                                                const product = masterDataProduct?.data?.filter((d) => d.rValue === productCode)[0]?.rText
                                                    || productCode
                                                return <div key={`productCode${idx}`}>
                                                    {product}
                                                </div>
                                            })
                                    }
                                </div>
                            </div>
                        </div>
                    })
                    :
                    null
            }

            {
                isEditable && watch("isAttorney") ?
                    <Button onClick={addAttroney} className="bg-[#403993] text-white min-w-32 mt-4">+ เพิ่มผู้รับมอบอำนาจ</Button>
                    : null
            }
            {
                isEditable && <div className="flex justify-end gap-4 mt-4">
                    <Button variant="contained" color="error" onClick={onBack}>ย้อนกลับ</Button>
                    <Button variant="contained" onClick={onSubmit}>ถัดไป</Button>
                </div>
            }
        </ContentLoading>
    )
}

export default AttorneySection;