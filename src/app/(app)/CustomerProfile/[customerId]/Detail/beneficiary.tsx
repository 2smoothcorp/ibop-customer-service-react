import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { BeneficiaryInfoModel, BeneficiaryInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function Beneficiary() {
    // const search = useSearchParams()
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<SubmitInput>()

    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ['financialInfo', params.customerId],
        queryFn: async function () {
            try {
                const { customerId } = params;
                const request = await fetch(`/api/customer-profile/beneficiary/${customerId}`)
                const response: BeneficiaryInfoResponseDataResponse = await request.json();
                if (response.status == 200 && response.data && response.data.beneficiaryInfo) {
                    // console.log(`beneficiaryInfo`, response.data.beneficiaryInfo)
                    setDefaultData(response.data.beneficiaryInfo)
                    return response.data.beneficiaryInfo
                }
                return null;
            } catch (e) {
                return null;
            } finally {
            }
        }
    })

    const normalizationData = (name: string, beneficiaryInfo: BeneficiaryInfoModel): any => {
        switch (name) {
            case 'addressNo':
                return handleEmptyStringFormApi(beneficiaryInfo.addressNo);
            case 'moo':
                return handleEmptyStringFormApi(beneficiaryInfo.moo);
            case 'buildingOrVillage':
                return handleEmptyStringFormApi(beneficiaryInfo.buildingOrVillage);
            case 'roomNo':
                return handleEmptyStringFormApi(beneficiaryInfo.roomNo);
            case 'floor':
                return handleEmptyStringFormApi(beneficiaryInfo.floor);
            case 'soi':
                return handleEmptyStringFormApi(beneficiaryInfo.soi);
            case 'street':
                return handleEmptyStringFormApi(beneficiaryInfo.street);
            case 'country':
                return isEmptyStringFormApi(beneficiaryInfo.countryCode) ? '-' : `${beneficiaryInfo.countryCode} - ${beneficiaryInfo.countryDesc}`;
            case 'zipCode':
                return handleEmptyStringFormApi(beneficiaryInfo.zipCode);
            case 'province':
                return handleEmptyStringFormApi(beneficiaryInfo.provinceNameTh);
            case 'district':
                return handleEmptyStringFormApi(beneficiaryInfo.districtNameTh);
            case 'subDistrict':
                return handleEmptyStringFormApi(beneficiaryInfo.subDistrictNameTh);
            case 'customAddress1':
                return handleEmptyStringFormApi(beneficiaryInfo.customAddress1);
            case 'customAddress2':
                return handleEmptyStringFormApi(beneficiaryInfo.customAddress2);
            case 'customAddress3':
                return handleEmptyStringFormApi(beneficiaryInfo.customAddress3);
            case 'beneficiaryFirstName':
                return handleEmptyStringFormApi(beneficiaryInfo.beneficiaryFirstName);
            case 'beneficiaryLastName':
                return handleEmptyStringFormApi(beneficiaryInfo.beneficiaryLastName);
            case 'referenceType':
                return isEmptyStringFormApi(beneficiaryInfo.beneficiaryType) ? '-' : `${beneficiaryInfo.beneficiaryType} - ${beneficiaryInfo.referenceTypeDesc}`;
            case 'beneficiaryRelationshipCode':
                return handleEmptyStringFormApi(beneficiaryInfo.beneficiaryRelationshipCode);
            case 'beneficiaryRelationship':
                return isEmptyStringFormApi(beneficiaryInfo.beneficiaryRelationshipCode) ? '-' : `${beneficiaryInfo.beneficiaryRelationshipCode} - ${beneficiaryInfo.relationDesc}`;

            case 'beneficiaryNo':
                return handleEmptyStringFormApi(beneficiaryInfo.beneficiaryNo);
            case 'beneficiaryExpire':
                if (beneficiaryInfo.beneficiaryNeverExpire) {
                    return 'ตลอดชีพ';
                }
                return handleEmptyStringFormApi(beneficiaryInfo.beneficiaryExpireDate);
            case 'beneficiaryExpireDate':
                return !isEmptyStringFormApi(beneficiaryInfo.beneficiaryExpireDate) ? dayjs(beneficiaryInfo.beneficiaryExpireDate).format('DD/MM/YYYY') : '-';
            default:
                return '-';
        }
    }

    const setDefaultData = (beneficiaryInfo: BeneficiaryInfoModel) => {
        setValue('addressNo', normalizationData('addressNo', beneficiaryInfo));
        setValue('moo', normalizationData('moo', beneficiaryInfo));
        setValue('buildingOrVillage', normalizationData('buildingOrVillage', beneficiaryInfo));
        setValue('roomNo', normalizationData('roomNo', beneficiaryInfo));
        setValue('floor', normalizationData('floor', beneficiaryInfo));
        setValue('soi', normalizationData('soi', beneficiaryInfo));
        setValue('street', normalizationData('street', beneficiaryInfo));
        setValue('country', normalizationData('country', beneficiaryInfo));
        setValue('zipCode', normalizationData('zipCode', beneficiaryInfo));
        setValue('province', normalizationData('province', beneficiaryInfo));
        setValue('district', normalizationData('district', beneficiaryInfo));
        setValue('subDistrict', normalizationData('subDistrict', beneficiaryInfo));
        setValue('customAddress1', normalizationData('customAddress1', beneficiaryInfo));
        setValue('customAddress2', normalizationData('customAddress2', beneficiaryInfo));
        setValue('customAddress3', normalizationData('customAddress3', beneficiaryInfo));
        setValue('beneficiaryFirstName', handleEmptyStringFormApi(beneficiaryInfo.beneficiaryFirstName));
        setValue('beneficiaryLastName', handleEmptyStringFormApi(beneficiaryInfo.beneficiaryLastName));
        setValue('beneficiaryRelationshipCode', handleEmptyStringFormApi(beneficiaryInfo.beneficiaryRelationshipCode));
        setValue('beneficiaryExpireDate', normalizationData('beneficiaryExpireDate', beneficiaryInfo));
    }

    return (
        <ContentLoading
            isLoading={isLoading}
            error={error && error.message || undefined}
        >
            <HeaderTitle
                className="gap-0"
                title="ผู้รับผลประโยชน์ที่แท้จริง ULTIMATE BENEFICIARY"
            />
            <div className="px-10">
                <HeaderTitleSub
                    title="ข้าพเจ้าเป็นเจ้าของบัญชีและเป็นผู้รับประโยชน์ที่แท้จริงจากการซื้อขายหลักทรัพย์ในบัญชีนี้"
                    isBorder={false}
                />
                <div className="text-lg px-6 tracking-wide" >{data && data.beneficiaryType === '2' ? 'บุคคลอื่นๆ' : 'ใช่'}</div>
                {
                    data && data.beneficiaryType === '2' && (
                        <>
                            <div className="grid grid-cols-3">
                                <InputHorizontal
                                    label="ชื่อ"
                                    defaultValue={data && normalizationData('beneficiaryFirstName', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="beneficiaryFirstName"
                                />
                                <InputHorizontal
                                    label="นามสกุล"
                                    defaultValue={data && normalizationData('beneficiaryLastName', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="beneficiaryLastName"
                                />
                                <InputHorizontal
                                    label="ความสัมพันธ์"
                                    defaultValue={data && normalizationData('beneficiaryRelationshipCode', data) || "-"}
                                    textShow={data && normalizationData('beneficiaryRelationship', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="beneficiaryRelationshipCode"
                                />
                                <InputHorizontal
                                    label="ประเภทหลักฐาน"
                                    defaultValue={data && normalizationData('beneficiaryType', data) || "-"}
                                    textShow={data && normalizationData('referenceType', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="beneficiaryType"
                                />
                                <InputHorizontal
                                    label="เลขที่บัตร"
                                    defaultValue={data && normalizationData('beneficiaryNo', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="beneficiaryNo"
                                />
                                <InputHorizontal
                                    label="วันที่หมดอายุบัตร (ค.ศ.)"
                                    defaultValue={data && normalizationData('beneficiaryExpireDate', data) || "-"}
                                    textShow={data && normalizationData('beneficiaryExpire', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="beneficiaryExpireDate"
                                />
                            </div>
                            <HeaderTitleSub
                                title="ที่อยู่ตามผู้รับผลประโยชน์ที่แท้จริง"
                                isBorder={false}
                            />
                            <div className="grid grid-cols-3">
                                <InputHorizontal
                                    label="เลขที่"
                                    defaultValue={data && normalizationData('addressNo', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="addressNo"
                                />
                                <InputHorizontal
                                    label="หมู่ที่"
                                    defaultValue={data && normalizationData('moo', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="moo"
                                />
                                <InputHorizontal
                                    label="หมู่บ้าน / อาคาร"
                                    defaultValue={data && normalizationData('buildingOrVillage', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="buildingOrVillage"
                                />
                                <InputHorizontal
                                    label="ห้อง"
                                    defaultValue={data && normalizationData('roomNo', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="roomNo"
                                />
                                <InputHorizontal
                                    label="ชั้น"
                                    defaultValue={data && normalizationData('floor', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="floor"
                                />
                                <InputHorizontal
                                    label="ตรอก / ซอย"
                                    defaultValue={data && normalizationData('soi', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="soi"
                                />
                                <InputHorizontal
                                    label="ถนน"
                                    defaultValue={data && normalizationData('street', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="street"
                                />
                                <InputHorizontal
                                    label="ประเทศ"
                                    defaultValue={data && normalizationData('country', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="country"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="รหัสไปรษณีย์"
                                    defaultValue={data && normalizationData('zipCode', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="zipCode"
                                    isRequired
                                />
                                {
                                    data?.countryCode !== '000'
                                        ?
                                        <>
                                            <InputHorizontal
                                                label="ที่อยู่ 1"
                                                defaultValue={data && normalizationData('customAddress1', data) || "-"}
                                                isEditable={isEditable}
                                                register={register}
                                                name="customAddress1"
                                                isRequired
                                            />
                                            <InputHorizontal
                                                label="ที่อยู่ 2"
                                                defaultValue={data && normalizationData('customAddress2', data) || "-"}
                                                isEditable={isEditable}
                                                register={register}
                                                name="customAddress2"
                                                isRequired
                                            />
                                            <InputHorizontal
                                                label="ที่อยู่ 3"
                                                defaultValue={data && normalizationData('customAddress3', data) || "-"}
                                                isEditable={isEditable}
                                                register={register}
                                                name="customAddress3"
                                                isRequired
                                            />
                                        </>
                                        : <>
                                            <InputHorizontal
                                                label="จังหวัด"
                                                defaultValue={data && normalizationData('province', data) || "-"}
                                                isEditable={isEditable}
                                                register={register}
                                                name="province"
                                                isRequired
                                            />
                                            <InputHorizontal
                                                label="อำเภอ / เขต"
                                                defaultValue={data && normalizationData('district', data) || "-"}
                                                isEditable={isEditable}
                                                register={register}
                                                name="district"
                                                isRequired
                                            />
                                            <InputHorizontal
                                                label="ตำบล / แขวง"
                                                defaultValue={data && normalizationData('subDistrict', data) || "-"}
                                                isEditable={isEditable}
                                                register={register}
                                                name="subDistrict"
                                                isRequired
                                            />

                                        </>
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </ContentLoading>
    )
}

interface SubmitInput {
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    country: string;
    zipCode: string;
    province: string;
    district: string;
    subDistrict: string;
    customAddress1: string;
    customAddress2: string;
    customAddress3: string;
    beneficiaryFirstName: string;
    beneficiaryLastName: string;
    beneficiaryRelationshipCode: string;
    beneficiaryExpireDate: string;
}