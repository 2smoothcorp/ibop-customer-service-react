import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { AttorneyInfoModel, AttorneyInfoResponse, AttorneyInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { ApiResponse } from "@/type/api";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface DetailSection {
    name?: string
    label: string
    defaultValue: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
}

const attorneySectionList: Array<DetailSection> = [
    {
        name: 'referenceTypeDesc',
        label: 'ประเภทหลักฐาน',
        defaultValue: '',
        isRequired: true,
        normalize: 'reference'
    },
    {
        name: 'referenceId',
        label: 'เลขที่บัตร',
        defaultValue: '',
        isRequired: true
    },
    {
        name: 'nationDesc',
        label: 'ประเทศเจ้าของสัญชาติ',
        defaultValue: '',
        isRequired: true,
        normalize: 'nation'
    },
    {
        name: 'titleDesc',
        label: 'คำนำหน้า',
        defaultValue: '',
        isRequired: true
    },
    {
        name: 'name',
        label: 'ชื่อ-นามสกุล ผู้รับมอบอำนาจ',
        defaultValue: '',
        isRequired: true
    },
    {
        name: 'relationDesc',
        label: 'ความสัมพันธ์',
        defaultValue: 'สามี',
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
]

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
        default:
            return defaultValue;
    }
}

const AttorneySection = () => {

    const search = useSearchParams()
    const params = useParams()

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<AttorneyInfoResponseDataResponse>()

    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    useEffect(() => {
        getAttorney()
    }, [])

    const getAttorney = async () => {
        try {
            setIsLoading(true)
            const request = await fetch(`/api/customer-profile/attorney/${params.customerId}`)
            const response: ApiResponse<AttorneyInfoResponseDataResponse> = await request.json();
            console.log(`response`, response)
            if (response.success) {
                setData(response.data)
            }
        } catch (e) {

        } finally {
            setIsLoading(false)
        }
    }

    return (
        <ContentLoading
            isLoading={isLoading}
        >
            <HeaderTitle
                className="gap-0"
                title="ผู้รับมอบอำนาจ Attorney"
            />

            <div className="flex flex-col">
                <span className="mx-4 font-bold">ท่านเป็นผู้มีสถานภาพทางการเมืองหรือเป็นสมาชิกในครอบครัว หรือเป็นผู้ใกล้ชิดกับบุคคลผู้มีสถานภาพทางการเมืองหรือไม่ * </span>
                <span className="mx-4">ไม่มี</span>
            </div>
            {
                data?.data?.attorneyInfo?.map((attorneyInfo, index) => {
                    return <React.Fragment key={`attorney${index}`}>

                        <div>
                            <HeaderTitle
                                className="gap-0"
                                title={`ผู้รับมอบอำนาญคนที่ ${index + 1}`}
                            />
                            <div className="grid grid-cols-3">
                                {
                                    attorneySectionList.map((attorneySection: DetailSection, idx: number) => {
                                        const { name = '', label, defaultValue, isRequired, normalize } = attorneySection
                                        const _dataInfo = (name === 'referenceId' ? data?.data : attorneyInfo) || undefined
                                        const value = getValueFromFieldName(name, _dataInfo, normalize)
                                        return <React.Fragment key={idx}>
                                            <InputHorizontal
                                                label={label}
                                                defaultValue={value}
                                                isEditable={isEditable}
                                                //register={register}
                                                name={name}
                                                isRequired
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
                                        const { name = '', label, defaultValue, isRequired, normalize } = attorneySection
                                        const value = getValueFromFieldName(name, attorneyInfo, normalize)
                                        return <React.Fragment key={idx}>
                                            <InputHorizontal
                                                label={label}
                                                defaultValue={value}
                                                isEditable={isEditable}
                                                //register={register}
                                                name={name}
                                                isRequired={isRequired}
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
                                    attorneyInfo?.productCode?.map((productCode, idx) => {
                                        return <div key={`productCode${idx}`}>{productCode}</div>
                                    })
                                }
                            </div>
                        </div>
                    </React.Fragment>
                })
            }


        </ContentLoading>
    )
}

export default AttorneySection;