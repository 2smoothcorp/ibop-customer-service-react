import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { ContractInformation, CustomerContractState } from "@/libs/redux/store/customer-contract-slice";
import { AddressInfoModel } from "@/services/rest-api/customer-service";
import { Property } from "csstype";
import { ReactElement } from "react";

interface DetailSection<T> {
    name?: keyof T
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
    condition?: (data: T) => boolean
    isFull?: boolean
    labelAlign?: Property.TextAlign
}
//contractInformation

const fieldList = ({ data }: { data: ContractInformation }): Array<DetailSection<ContractInformation>> => {
    return (
        [
            {
                label: 'วิธีการรับเอกสาร Mailing Method (กรุณาเลือกเพียง 1 ช่องทาง)',
                name: 'docReceiveChannel',
                isFull: true,
                labelAlign: 'left'
            },
            {
                label: 'ที่อยู่ติดต่อทางไปรษณีย์กรณีบริษัทส่งเอกสารอื่นๆ รวมถึงเอกสารจากนายทะเบียนหลักทรัพย์/ศูนย์รับฝากหลักทรัพย์ฯ ที่ต้องติดต่อทางไปรษณีย์ (กรุณาระบุข้อความให้ครบถ้วนแม้ว่าท่านจะได้ระบุวิธีการรับเอกสารทางอีเมล)',
                name: 'docReceiveAddressType',
                isFull: true,
                labelAlign: 'left'
            }
        ]
    )
}

const addressFieldList = ({ data }: { data: ContractInformation }): Array<DetailSection<ContractInformation>> => {
    return (
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
                name: 'countryCode'
            },
            {
                label: 'รหัสไปรษณีย์',
                name: 'zipCode'
            },
            {
                label: 'ที่อยู่ 1',
                name: 'customAddress1',
                condition: (data: ContractInformation) => data.countryCode !== '000'
            },
            {
                label: 'ที่อยู่ 2',
                name: 'customAddress2',
                condition: (data: ContractInformation) => data.countryCode !== '000'
            },
            {
                label: 'ที่อยู่ 3',
                name: 'customAddress3',
                condition: (data: ContractInformation) => data.countryCode !== '000'
            },
            {
                label: 'จังหวัด',
                name: 'provinceCode',
                condition: (data: ContractInformation) => data.countryCode === '000'
            },
            {
                label: 'อำเภอ / เขต',
                name: 'districtCode',
                condition: (data: ContractInformation) => data.countryCode === '000'
            },
            {
                label: 'ตำบล / แขวง',
                name: 'subDistrictCode',
                condition: (data: ContractInformation) => data.countryCode === '000'
            }
        ]
    )
}

const getValueFromFieldName = (attributeName: string, data: AddressInfoModel | undefined | null, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as AddressInfoModel, value) : value
}

const normalizationData = (name: string, data: AddressInfoModel, defaultValue: string | boolean): string => {
    switch (name) {
        case 'addressTypeCode':
            return defaultValue === '01' ? `ตามประเภทหลักฐาน` : `อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)`;
        default:
            return defaultValue.toString() || '-';
    }
}

export default function SummaryContractInformationInfo({ data }: { data: CustomerContractState }) {

    const isEditable = false;
    const _data = data.docReceiveAddressInfo;

    return <>
        <HeaderTitle
            className={'ml-8'}
            title="ข้อมูลการติดต่อ CONTRACT INFORMATION"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    fieldList({ data: _data }).map((detail: DetailSection<ContractInformation>, idx: number) => {
                        const { name, label, defaultValue, isRequired, normalize, CustomComponent, condition, isFull, labelAlign } = detail

                        if (!name) return <div></div>
                        if (condition && typeof condition === 'function' && !condition(_data)) return null

                        const _textShow = (getValueFromFieldName(name, _data, normalize) || '').toString();
                        //if (CustomComponent) return CustomComponent
                        return <div key={`field-item-${idx}`} className={isFull ? `col-span-3` : ``}>
                            <InputHorizontal
                                label={label || ''}
                                defaultValue={defaultValue}
                                isEditable={isEditable}
                                textShow={_textShow}
                                name={name}
                                isRequired={isRequired}
                                labelAlign={labelAlign}
                                isLabelFullWidth={isFull}
                            />
                        </div>
                    })
                }

                {

                    data?.docReceiveAddressInfo?.docReceiveAddressType === '04' ?
                        addressFieldList({ data: _data }).map((detail: DetailSection<ContractInformation>, idx: number) => {
                            const { name, label, defaultValue, isRequired, normalize, CustomComponent, condition, isFull, labelAlign } = detail

                            if (!name) return <div></div>
                            if (condition && typeof condition === 'function' && !condition(_data)) return null

                            const _textShow = (getValueFromFieldName(name, _data, normalize) || '').toString();
                            //if (CustomComponent) return CustomComponent
                            return <div key={`field-item-${idx}`} className={isFull ? `col-span-3` : ``}>
                                <InputHorizontal
                                    label={label || ''}
                                    defaultValue={defaultValue}
                                    isEditable={isEditable}
                                    textShow={_textShow}
                                    name={name}
                                    isRequired={isRequired}
                                    labelAlign={labelAlign}
                                    isLabelFullWidth={isFull}
                                />
                            </div>

                        }) :
                        null
                }
            </div>
        </ContentLoading>
    </>
}