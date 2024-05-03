"use client"

import ContentLoading from "@/components/content/content-loading";
import InputCheckbox from "@/components/custom/input-checkbox";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataNationCustom } from "@/hooks/master-data-nation";
import { useMasterDataPersonTypeCustom } from "@/hooks/master-data-person-type";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { CusomterInformationState } from "@/libs/redux/store/customer-information-slice";
import { PersonalInfoModel, PersonalInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function PersonalInfo({ useForm }: { useForm: UseFormReturn<CusomterInformationState, any, undefined> }) {
    const { setValue, watch } = useForm
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data, isLoading, error } = useQuery({
        queryKey: ['personalInfo', params.customerId],
        queryFn: () => getData(),
    })

    // master data
    const { data: personType, isLoading: isLoadingPersonType } = useMasterDataPersonTypeCustom();
    const { data: reference, isLoading: isLoadingReference } = useMasterDataReferenceCustom();
    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();
    const { data: titles, isLoading: isLoadingTitles } = useMasterDataTitlesCustom();
    const { data: nation, isLoading: isLoadingNation } = useMasterDataNationCustom();

    const normalizationData = (name: string, personalInfo: PersonalInfoModel): string => {
        switch (name) {
            case 'personTypeCode':
                return handleEmptyStringFormApi(personalInfo.personTypeCode);
            case 'personType':
                return !isEmptyStringFormApi(personalInfo.personTypeCode) ? `${personalInfo.personTypeCode} - ${personalInfo.personTypeDesc}` : '-';
            case 'referenceType':
                return handleEmptyStringFormApi(personalInfo.referenceType);
            case 'referenceTypeDesc':
                return !isEmptyStringFormApi(personalInfo.referenceType) ? `${personalInfo.referenceType} - ${personalInfo.referenceTypeDesc} ` : '-';
            case 'referenceID':
                return handleEmptyStringFormApi(personalInfo.referenceID);
            case 'countryCode':
                return handleEmptyStringFormApi(personalInfo.countryCode);
            case 'country':
                return !isEmptyStringFormApi(personalInfo.countryCode) ? `${personalInfo.countryCode} - ${personalInfo.countryNameTh || personalInfo.countryNameEn}` : '-';
            case 'nationalityCode':
                return handleEmptyStringFormApi(personalInfo.nationalityCode);
            case 'nation':
                return !isEmptyStringFormApi(personalInfo.nationalityCode) ? `${personalInfo.nationalityCode} - ${personalInfo.nationDesc}` : '-';
            case 'identityNeverExpire':
                if (personalInfo.identityNeverExpire) {
                    return 'ตลอดชีพ';
                }
                return handleEmptyStringFormApi(personalInfo.identityExpireDate);
            case 'identityExpireDate':
                return !isEmptyStringFormApi(personalInfo.identityExpireDate) ? dayjs(personalInfo.identityExpireDate).format('DD/MM/YYYY') : '-';
            case 'genderCode':
                return handleEmptyStringFormApi(personalInfo.genderCode);
            case 'gender':
                return !isEmptyStringFormApi(personalInfo.genderCode) ? `${personalInfo.genderCode} - ${personalInfo.gender}` : '-';
            case 'titleCode':
                return handleEmptyStringFormApi(personalInfo.titleCode);
            case 'title':
                return !isEmptyStringFormApi(personalInfo.titleCode) ? `${personalInfo.titleCode} - ${personalInfo.titleNameTh || personalInfo.titleNameEn}` : '-';
            case 'firstNameTh':
                return handleEmptyStringFormApi(personalInfo.firstNameTh);
            case 'lastNameTh':
                return handleEmptyStringFormApi(personalInfo.lastNameTh);
            case 'firstNameEn':
                return handleEmptyStringFormApi(personalInfo.firstNameEn);
            case 'lastNameEn':
                return handleEmptyStringFormApi(personalInfo.lastNameEn);
            case 'birthDate':
                return !isEmptyStringFormApi(personalInfo.birthDate) ? dayjs(personalInfo.birthDate).format('YYYY-MM-DD') : '-';
            default:
                return '-';
        }
    }

    const setDefaultData = (personalInfo: PersonalInfoModel) => {
        setValue('personalInfo.personType', normalizationData('personType', personalInfo));
        setValue('personalInfo.personTypeCode', normalizationData('personTypeCode', personalInfo));
        setValue('personalInfo.referenceTypeDesc', normalizationData('referenceTypeDesc', personalInfo));
        setValue('personalInfo.referenceType', normalizationData('referenceType', personalInfo));
        setValue('personalInfo.referenceID', normalizationData('referenceID', personalInfo));
        setValue('personalInfo.country', normalizationData('country', personalInfo));
        setValue('personalInfo.countryCode', normalizationData('countryCode', personalInfo));
        setValue('personalInfo.nation', normalizationData('nation', personalInfo));
        setValue('personalInfo.nationalityCode', normalizationData('nationalityCode', personalInfo));
        setValue('personalInfo.identityExpireDate', normalizationData('identityExpireDate', personalInfo));
        setValue('personalInfo.gender', normalizationData('gender', personalInfo));
        setValue('personalInfo.genderCode', normalizationData('genderCode', personalInfo));
        setValue('personalInfo.title', normalizationData('title', personalInfo));
        setValue('personalInfo.titleCode', normalizationData('titleCode', personalInfo));
        setValue('personalInfo.firstNameTh', normalizationData('firstNameTh', personalInfo));
        setValue('personalInfo.lastNameTh', normalizationData('lastNameTh', personalInfo));
        setValue('personalInfo.firstNameEn', normalizationData('firstNameEn', personalInfo));
        setValue('personalInfo.lastNameEn', normalizationData('lastNameEn', personalInfo));
        setValue('personalInfo.birthDate', normalizationData('birthDate', personalInfo));

    }

    const getData = async () => {
        if (data) {
            setDefaultData(data)
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/personal-info/${customerId}`, { method: 'GET' });
                const response: PersonalInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;
                    if (data && data.personalInfo) {
                        // console.log(`data.personalInfo`, data.personalInfo)
                        setDefaultData(data.personalInfo)
                        return data.personalInfo
                    }
                }
            } catch (error) {
                throw error
            }
        }
        return null
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลส่วนตัว"
            />
            <ContentLoading
                isLoading={isLoading || isLoadingPersonType || isLoadingReference || isLoadingCountries || isLoadingTitles || isLoadingNation}
                error={error ? error.message : undefined}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <InputHorizontal
                        label="ประเภทลูกค้า"
                        placeholder="โปรดเลือกประเภทลูกค้า"
                        defaultValue={watch('personalInfo.personTypeCode')}
                        textShow={data && normalizationData('personType', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="personTypeCode"
                        type="autocomplete"
                        list={personType}
                        isRequired
                        onChange={(value) => setValue('personalInfo.personTypeCode', value)}
                    />
                    <InputHorizontal
                        label="ประเภทหลักฐานลูกค้า"
                        placeholder="โปรดเลือกประเภทหลักฐานลูกค้า"
                        defaultValue={watch('personalInfo.referenceType')}
                        textShow={data && normalizationData('referenceTypeDesc', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="referenceType"
                        type="autocomplete"
                        list={reference}
                        isRequired
                        onChange={(value) => setValue('personalInfo.referenceType', value)}
                    />
                    <InputHorizontal
                        label="เลขที่บัตร"
                        placeholder="โปรดระบุเลขที่บัตร"
                        defaultValue={watch('personalInfo.referenceID')}
                        textShow={data && normalizationData('referenceID', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="referenceID"
                        isRequired
                        onChange={(value) => setValue('personalInfo.referenceID', value)}
                    />
                    <InputHorizontal
                        label="ประเทศที่ออกบัตร"
                        placeholder="โปรดเลือกประเทศที่ออกบัตร"
                        defaultValue={watch('personalInfo.countryCode')}
                        textShow={data && normalizationData('country', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        type="autocomplete"
                        list={countries}
                        name="countryCode"
                        isRequired
                        onChange={(value) => setValue('personalInfo.countryCode', value)}
                    />
                    <InputHorizontal
                        label="ประเทศเจ้าของสัญชาติ"
                        placeholder="โปรดเลือกประเทศเจ้าของสัญชาติ"
                        defaultValue={watch('personalInfo.nationalityCode')}
                        textShow={data && normalizationData('nation', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="nationalityCode"
                        type="autocomplete"
                        list={nation}
                        isRequired
                        onChange={(value) => setValue('personalInfo.nationalityCode', value)}
                    />
                    <InputHorizontal
                        label="วันที่หมดอายุบัตร (ค.ศ.)"
                        placeholder="โปรดระบุวันที่หมดอายุบัตร"
                        defaultValue={data &&
                            (
                                normalizationData('identityExpireDate', data) !== '-'
                                    ? normalizationData('identityExpireDate', data)
                                    : null
                            )
                            || undefined}
                        textShow={data &&
                            (
                                normalizationData('identityExpireDate', data) !== '-'
                                    ? dayjs(normalizationData('identityExpireDate', data)).format('DD/MM/YYYY')
                                    : normalizationData('identityNeverExpire', data) || null
                            )
                            || '-'}
                        isEditable={isEditable}
                        // register={register}
                        type="date"
                        minDate={dayjs().format('YYYY-MM-DD')}
                        name="identityExpireDate"
                        isRequired={false}
                        disabled={watch("personalInfo.identityNeverExpire") || false}
                        onChange={(value) => setValue("personalInfo.identityExpireDate", value)}
                        rightInputComponent={
                            isEditable ?
                                <div className="w-[120px] flex justify-center">
                                    <InputCheckbox
                                        width={100}
                                        label="ตลอดชีพ"
                                        name="identityNeverExpire"
                                        defaultValue={watch('personalInfo.identityNeverExpire')}
                                        onChange={(value) => { setValue('personalInfo.identityNeverExpire', value) }}
                                    />
                                </div> : <></>
                        }
                    />
                    <InputHorizontal
                        label="คำนำหน้า"
                        placeholder="โปรดเลือกคำนำหน้า"
                        defaultValue={watch('personalInfo.titleCode')}
                        textShow={data && normalizationData('title', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="titleCode"
                        type="autocomplete"
                        list={titles}
                        isRequired
                        onChange={(value) => {
                            if (value === '103' || value === '301' || value === '302') {
                                console.log('change man')
                                setValue('personalInfo.genderCode', '0')
                            }
                            if (value === '104' || value === '105' || value === '304' || value === '306') {
                                console.log('change girl')
                                setValue('personalInfo.genderCode', '1')
                            }
                            setValue('personalInfo.titleCode', value)
                        }}
                    />
                    <InputHorizontal
                        label="ชื่อ (ภาษาไทย)"
                        placeholder="โปรดระบุชื่อ (ภาษาไทย)"
                        defaultValue={watch('personalInfo.firstNameTh')}
                        textShow={data && normalizationData('firstNameTh', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="firstNameTh"
                        isRequired
                        onChange={(value) => setValue('personalInfo.firstNameTh', value)}
                    />
                    <InputHorizontal
                        label="นามสกุล (ภาษาไทย)"
                        placeholder="โปรดระบุนามสกุล (ภาษาไทย)"
                        defaultValue={watch('personalInfo.lastNameTh')}
                        textShow={data && normalizationData('lastNameTh', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="lastNameTh"
                        isRequired
                        onChange={(value) => setValue('personalInfo.lastNameTh', value)}
                    />
                    <InputHorizontal
                        label="เพศ"
                        placeholder="โปรดเลือกเพศ"
                        defaultValue={watch('personalInfo.genderCode')}
                        textShow={data && normalizationData('gender', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="genderCode"
                        type="radio"
                        list={[
                            { value: '0', label: 'ชาย' },
                            { value: '1', label: 'หญิง' },
                            // { value: '2', label: '2-นิติบุคคล' },
                            { value: '3', label: 'ไม่ระบุ' },
                        ]}
                        isRequired
                        onChange={(value) => setValue('personalInfo.genderCode', value)}
                    />
                    <InputHorizontal
                        label="ชื่อ (ภาษาอังกฤษ)"
                        placeholder="โปรดระบุชื่อ (ภาษาอังกฤษ)"
                        defaultValue={data && normalizationData('firstNameEn', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="firstNameEn"
                        isRequired
                        onChange={(value) => setValue('personalInfo.firstNameEn', value)}
                    />
                    <InputHorizontal
                        label="นามสกุล (ภาษาอังกฤษ)"
                        placeholder="โปรดระบุนามสกุล (ภาษาอังกฤษ)"
                        defaultValue={data && normalizationData('lastNameEn', data) || '-'}
                        isEditable={isEditable}
                        // register={register}
                        name="lastNameEn"
                        isRequired
                        onChange={(value) => setValue('personalInfo.lastNameEn', value)}
                    />
                    <InputHorizontal
                        label=""
                        defaultValue=""
                        // register={register}
                        name=""
                    />

                    <InputHorizontal
                        label="วัน/เดือน/ปีเกิด (ค.ศ.)"
                        placeholder="โปรดระบุวัน/เดือน/ปีเกิด"
                        defaultValue={data &&
                            (
                                normalizationData('birthDate', data) !== '-'
                                    ? normalizationData('birthDate', data)
                                    : null
                            )
                            || undefined}
                        textShow={
                            data && (
                                normalizationData('birthDate', data) !== '-'
                                    ? dayjs(normalizationData('birthDate', data)).format('DD/MM/YYYY')
                                    : null
                            ) || '-'
                        }
                        isEditable={isEditable}
                        // register={register}
                        name="birthDate"
                        type="date"
                        maxDate={dayjs().subtract(18, 'year').format('YYYY-MM-DD')}
                        onChange={(val) => setValue("personalInfo.birthDate", val)}
                        isRequired
                    />
                </div>
            </ContentLoading>
        </>
    )
}