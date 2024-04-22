import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface DetailSection {
    name?: string
    label: string
    value: string
    defaultValue: string
    isRequired?: boolean
    isEditable?: boolean
}

const attorneySectionList : Array<DetailSection> = [
    {
        name: '',
        label: 'ประเภทหลักฐาน',
        defaultValue: 'บัตรประจำตัว',
        value: '',
        isRequired: true
    },
    {
        label: 'เลขที่บัตร',
        defaultValue: '310012320981',
        value: '',
        isRequired: true
    },
    {
        label: 'ประเทศเจ้าของสัญชาติ',
        defaultValue: 'ไทย',
        value: '',
        isRequired: true
    },
    {
        label: 'คำนำหน้า',
        defaultValue: 'นาย',
        value: '',
        isRequired: true
    },
    {
        label: 'ชื่อ-นามสกุล ผู้รับมอบอำนาจ',
        defaultValue: 'อนันกร อังคสุวรรณศิริ ',
        value: '',
        isRequired: true
    },
    {
        label: 'ความสัมพันธ์',
        defaultValue: 'สามี',
        value: '',
    },
    {
        label: 'โทรศัพท์มือถือ',
        defaultValue: '083-3333333',
        value: '',
    },
    {
        label: 'อีเมล',
        defaultValue: 'ABCD@hotmail.com',
        value: '',
    },
]

const addressAttornetSectionList : Array<DetailSection> = [
    {
        name: '',
        label: 'เลขที่',
        defaultValue: '',
        value: '',
        isRequired: true
    },
    {
        label: 'หมู่ที่',
        defaultValue: '',
        value: '',
        isRequired: true
    },
    {
        label: 'หมู่บ้าน / อาคาร',
        defaultValue: '',
        value: '',
        isRequired: true
    },
    {
        label: 'ห้อง',
        defaultValue: '',
        value: '',
        isRequired: true
    },
    {
        label: 'ชั้น',
        defaultValue: '',
        value: '',
        isRequired: true
    },
    {
        label: 'ตรอก / ซอย',
        defaultValue: '',
        value: '',
    },
    {
        label: 'ถนน',
        defaultValue: '',
        value: '',
    },
    {
        label: 'ประเทศ',
        defaultValue: '',
        value: '',
    },
    {
        label: 'รหัสไปรษณีย์',
        defaultValue: '',
        value: '',
    },
    {
        label: 'จังหวัด',
        defaultValue: '',
        value: '',
    },
    {
        label: 'อำเภอ / เขต',
        defaultValue: '',
        value: '',
    },
    {
        label: 'ตำบล / แขวง',
        defaultValue: '',
        value: '',
    },
]

const AttorneySection = () => {

    const search = useSearchParams()
    const params = useParams()
    //const { customerId } = router.
    console.log(`params`, params)

    useEffect( () => {
        getAttorney()
    }, [] )

    const getAttorney = async () => {
        //await fetch(`/api/customer-profile/attorney/${customerId}`)
    }

    return (
        <React.Fragment>
            <HeaderTitle
                className="gap-0"
                title="ผู้รับมอบอำนาจ Attorney"
            />
            <div className="flex flex-col">
                <span className="mx-4 font-bold">ท่านเป็นผู้มีสถานภาพทางการเมืองหรือเป็นสมาชิกในครอบครัว หรือเป็นผู้ใกล้ชิดกับบุคคลผู้มีสถานภาพทางการเมืองหรือไม่ * </span>
                <span className="mx-4">ไม่มี</span>
            </div>

            <div>
                <HeaderTitle
                    className="gap-0"
                    title="ผู้รับมอบอำนาญคนที่ 1"
                />
                <div className="grid grid-cols-3">
                    {
                        attorneySectionList.map( (attorneySection: DetailSection, idx: number) => {
                            const { name = '', label, defaultValue, value, isRequired, isEditable } = attorneySection
                            return <React.Fragment key={idx}>
                                <InputHorizontal
                                    label={attorneySection.label}
                                    defaultValue={value}
                                    isEditable={isEditable}
                                    //register={register}
                                    name={name}
                                    isRequired
                                />
                            </React.Fragment>
                        } )
                    }
                </div>

                <HeaderTitle
                    className="ml-8 gap-0"
                    title="ที่อยู่ปัจจุบันที่ติดต่อได้"
                />
                <div className="grid grid-cols-3">
                    {
                        addressAttornetSectionList.map( (attorneySection: DetailSection, idx: number) => {
                            const { name = '', label, defaultValue, value, isRequired, isEditable } = attorneySection
                            return <React.Fragment key={idx}>
                                <InputHorizontal
                                    label={attorneySection.label}
                                    defaultValue={value}
                                    isEditable={isEditable}
                                    //register={register}
                                    name={name}
                                    isRequired={isRequired}
                                />
                            </React.Fragment>
                        } )
                    }
                </div>

                <HeaderTitle
                    className="ml-8 gap-0"
                    title="มอบอำนาจในการแทนข้าพเจ้าในบัญชี"
                />
                <div className="ml-14">
                    <div>บัญชีเงินสด (Cash)</div>
                    <div>บัญชีแคชบาลานซ์หลักทรัพย์ไทย (Cash Balance - Thai)</div>
                </div>
            </div>

        </React.Fragment>
    )
}

/*
const fetchData = async (corporateId: string) => {
    try{
        const menus = (await fetch(`${Constants.APIUrl}/api/customer-profile/dashboard/${corporateId}`, {
          headers: { Cookie: cookies().toString() },
          cache: 'no-cache',
        }))
        const response = await menus.json()
        return response
        //
      }catch(e){
        console.error(e)
      }
}
*/

export default AttorneySection;