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
import { AttorneyInfoModel, AttorneyInfoResponse, AttorneyInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { ApiResponse } from "@/type/api";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import React, { ReactElement } from "react";
import { UseFormReturn, useFieldArray, useForm } from "react-hook-form";

interface DetailSection {
    name?: keyof AttorneyInfoModel
    label: string
    defaultValue: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
}

interface SectionList {
    form: UseFormReturn<{
        attorneyInfo: Array<AttorneyInfoModel>,
        isAttorney?: boolean
    }>
    isEditable?: boolean,
    index: number,
    fieldName?: string
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

const addressAttornetSectionList: Array<DetailSection> = [
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
    },
    {
        name: 'countryDesc',
        label: 'ประเทศ',
        defaultValue: '',
        normalize: 'country'
    },
    {
        name: 'zipCode',
        label: 'รหัสไปรษณีย์',
        defaultValue: '',
    },
    {
        name: 'provinceNameTh',
        label: 'จังหวัด',
        defaultValue: '',
    },
    {
        name: 'districtNameTh',
        label: 'อำเภอ / เขต',
        defaultValue: '',
    },
    {
        name: 'subDistrictNameTh',
        label: 'ตำบล / แขวง',
        defaultValue: '',
    },
]

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
        default:
            return defaultValue;
    }
}

const AttorneySection = () => {

    const searchParams = useSearchParams();
    const params = useParams();

    const masterDataProduct = useMasterDataProduct();

    const isEditable = searchParams.get('edit') === 'true';

    const { data, isLoading, error } = useQuery({
        queryKey: ['attorneyInfo', params.customerId],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/customer-profile/attorney/${params.customerId}`)
                const response: ApiResponse<AttorneyInfoResponseDataResponse> = await request.json();
                // console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    const useFormAll = useForm<{ attorneyInfo: Array<AttorneyInfoModel>, isAttorney?: boolean }>({
        defaultValues: {
            isAttorney: false,
            attorneyInfo: data?.data?.attorneyInfo || []
        }
    })

    const form = useFormAll;
    const { register, setValue, watch, control, handleSubmit, getValues } = form
    const { fields, append, remove } = useFieldArray({
        control,
        name: "attorneyInfo"
    })

    const addAttroney = () => {
        append({

        })
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

    const onSubmit = (e) => {
        const { getValues } = useFormAll
        //console.log(`getValues()`, getValues())
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
                        return <React.Fragment key={`attorney${index}`}>

                            <div>
                                <HeaderTitle
                                    className="gap-0"
                                    title={`ผู้รับมอบอำนาจคนที่ ${index + 1}`}
                                />
                                <div className="grid grid-cols-3">
                                    {
                                        attorneySectionList({ form, isEditable, index, fieldName: "attorneyInfo" }).map((attorneySection: DetailSection, idx: number) => {
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
                                        addressAttornetSectionList.map((attorneySection: DetailSection, idx: number) => {
                                            const { name = '', label, defaultValue, isRequired, normalize } = attorneySection;
                                            const value = getValueFromFieldName(name, attorneyInfo, normalize);
                                            const _fieldName = `attorneyInfo.${index}.${name}`;

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
                                                                    defaultValue={false}
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
                        </React.Fragment>
                    })
                    :
                    null
            }

            {
                isEditable && watch("isAttorney") ?
                    <Button onClick={addAttroney}>+ เพิ่มผู้รับมอบอำนาจ</Button>
                    : null
            }
            <Button onClick={onSubmit}>Submit</Button>
        </ContentLoading>
    )
}

export default AttorneySection;