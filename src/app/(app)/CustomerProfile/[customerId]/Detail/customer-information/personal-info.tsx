"use client"

import ContentLoading from "@/components/content/content-loading";
import InputElement, { InputElementProps } from "@/components/custom/input-element";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataNationCustom } from "@/hooks/master-data-nation";
import { useMasterDataPersonTypeCustom } from "@/hooks/master-data-person-type";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { PersonalInfoModel, PersonalInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, handlerEmpty, isEmptyStringFormApi, objectToArray } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { CheckboxElement } from "react-hook-form-mui";

export default function PersonalInfo({ useForm }: { useForm: UseFormReturn<CustomerInformationState, any, undefined> }) {
    const { setValue, watch, trigger } = useForm
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const confirmPersonalInfo = useAppSelector(state => state.customerInformation.confirm?.personalInfo)

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
                return handlerEmpty(personalInfo.genderCode);
            case 'gender':
                return !isEmptyStringFormApi(personalInfo.genderCode) ? `${personalInfo.genderCode} - ${personalInfo.gender}` : '-';
            case 'titleCode':
                return handlerEmpty(personalInfo.titleCode);
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
                return !isEmptyStringFormApi(personalInfo.birthDate) ? personalInfo.birthDate || '' : '';
            default:
                return '-';
        }
    }

    const setDefaultData = (personalInfo: PersonalInfoModel) => {

        setValue('personalInfo.personType', normalizationData('personType', personalInfo));
        setValue('personalInfo.personTypeCode', normalizationData('personTypeCode', personalInfo), { shouldDirty: false });
        setValue('personalInfo.referenceTypeDesc', normalizationData('referenceTypeDesc', personalInfo));
        setValue('personalInfo.referenceType', normalizationData('referenceType', personalInfo));
        setValue('personalInfo.referenceID', normalizationData('referenceID', personalInfo));
        setValue('personalInfo.country', normalizationData('country', personalInfo));
        setValue('personalInfo.countryCode', normalizationData('countryCode', personalInfo));
        setValue('personalInfo.nation', normalizationData('nation', personalInfo));
        setValue('personalInfo.nationalityCode', normalizationData('nationalityCode', personalInfo));
        setValue('personalInfo.identityExpireDate', normalizationData('identityExpireDate', personalInfo));
        setValue('personalInfo.identityExpireDateDayjs',
            (personalInfo.identityExpireDate !== '' && personalInfo.identityExpireDate !== '-')
                ? dayjs(personalInfo.identityExpireDate || null)
                : null,
            { shouldDirty: false });
        setValue('personalInfo.gender', normalizationData('gender', personalInfo));
        setValue('personalInfo.genderCode', normalizationData('genderCode', personalInfo));
        setValue('personalInfo.title', normalizationData('title', personalInfo));
        setValue('personalInfo.titleCode', normalizationData('titleCode', personalInfo), { shouldDirty: false });
        setValue('personalInfo.firstNameTh', normalizationData('firstNameTh', personalInfo));
        setValue('personalInfo.lastNameTh', normalizationData('lastNameTh', personalInfo));
        setValue('personalInfo.firstNameEn', normalizationData('firstNameEn', personalInfo));
        setValue('personalInfo.lastNameEn', normalizationData('lastNameEn', personalInfo));
        setValue('personalInfo.birthDate', normalizationData('birthDate', personalInfo), { shouldDirty: false });
        setValue('personalInfo.birthDateDayjs',
            (personalInfo.birthDate !== '' && personalInfo.birthDate !== '-')
                ? dayjs(personalInfo.birthDate || null)
                : null,
            { shouldDirty: false });
        if (confirmPersonalInfo) {
            try {
                const oldData = objectToArray({ personalInfo: confirmPersonalInfo });
                oldData.map((item) => {
                    const [key, value] = item
                    if (key === 'personalInfo.birthDate') {
                        setValue("personalInfo.birthDateDayjs", dayjs(value as any), {
                            shouldDirty: true
                        })
                    }
                    if (key === 'personalInfo.identityExpireDate') {
                        setValue("personalInfo.identityExpireDateDayjs", dayjs(value as any), {
                            shouldDirty: true
                        })
                    }
                    setValue(key as any, value, {
                        shouldDirty: true
                    })
                });
            } catch (err) {
                console.error(err)
            }
        }

    }

    const getData = async (): Promise<PersonalInfoModel | null> => {
        if (data) {
            setDefaultData(data)
            return data;
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/personal-info/${customerId}`, { method: 'GET' });
                const response: PersonalInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;
                    if (data && data.personalInfo) {
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


    const inputDate: InputElementProps[] = [
        {
            type: "autocomplete",
            label: "ประเภทลูกค้า",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "personalInfo.personTypeCode",
                rules: {
                    required: 'โปรดเลือกประเภทลูกค้า',
                },
                options: personType || [],
            }
        },
        {
            type: "autocomplete",
            label: "ประเภทหลักฐานลูกค้า",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "personalInfo.referenceType",
                rules: {
                    required: 'โปรดเลือกประเภทหลักฐานลูกค้า',
                },
                options: reference || [],
            }
        },
        {
            label: "เลขที่บัตร",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "personalInfo.referenceID",
                rules: {
                    required: 'โปรดระบุเลขที่บัตร',
                },
                inputProps: {
                    placeholder: "เลขที่บัตร",
                }
            }
        },
        {
            type: "autocomplete",
            label: "ประเทศที่ออกบัตร",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "personalInfo.countryCode",
                rules: {
                    required: 'โปรดเลือกประเทศที่ออกบัตร',
                },
                options: countries || [],
            }
        },
        {
            type: "autocomplete",
            label: "ประเทศเจ้าของสัญชาติ",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "personalInfo.nationalityCode",
                rules: {
                    required: 'โปรดเลือกประเทศเจ้าของสัญชาติ',
                },
                options: nation || [],
            }
        },
        {
            type: "date",
            label: "วันที่หมดอายุบัตร (ค.ศ.)",
            isEditable: isEditable,
            datePickerElementProps: {
                name: "personalInfo.identityExpireDateDayjs",
                minDate: dayjs(),
                inputProps: {
                    placeholder: "โปรดระบุวันที่หมดอายุบัตร",
                },
                rules: {
                    required: 'โปรดระบุวันที่หมดอายุบัตร',
                },
            },
            rightInputComponent: isEditable ?
                <div className="w-full h-full flex justify-center items-center p-2">
                    <CheckboxElement
                        label="ตลอดชีพ"
                        name="personalInfo.identityNeverExpire"
                    />
                </div> : <></>
        },
        {
            type: "autocomplete",
            label: "คำนำหน้า",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "personalInfo.titleCode",
                rules: {
                    required: 'โปรดเลือกคำนำหน้า',
                },
                options: titles || [],
            }
        },
        {
            label: "ชื่อ (ภาษาไทย)",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "personalInfo.firstNameTh",
                rules: {
                    required: 'โปรดระบุชื่อ (ภาษาไทย)',
                },
                inputProps: {
                    placeholder: "โปรดระบุชื่อ (ภาษาไทย)",
                }
            }
        },
        {
            label: "นามสกุล (ภาษาไทย)",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "personalInfo.lastNameTh",
                rules: {
                    required: 'โปรดระบุนามสกุล (ภาษาไทย)',
                },
                inputProps: {
                    placeholder: "โปรดระบุนามสกุล (ภาษาไทย)",
                }
            }
        },
        {
            type: "radio",
            label: "เพศ",
            isEditable: isEditable,
            radioButtonGroupProps: {
                row: true,
                name: "personalInfo.genderCode",
                rules: {
                    required: 'โปรดเลือกเพศ',
                },
                options: [
                    { id: '0', value: '0', label: 'ชาย' },
                    { id: '1', value: '1', label: 'หญิง' },
                    { id: '3', value: '3', label: 'ไม่ระบุ' },
                ]
            }
        },
        {
            label: "ชื่อ (ภาษาอังกฤษ)",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "personalInfo.firstNameEn",
                rules: {
                    required: 'โปรดระบุชื่อ (ภาษาอังกฤษ)',
                },
                inputProps: {
                    placeholder: "โปรดระบุชื่อ (ภาษาอังกฤษ)",
                }
            }
        },
        {
            label: "นามสกุล (ภาษาอังกฤษ)",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "personalInfo.lastNameEn",
                rules: {
                    required: 'โปรดระบุนามสกุล (ภาษาอังกฤษ)',
                },
                inputProps: {
                    placeholder: "โปรดระบุนามสกุล (ภาษาอังกฤษ)",
                }
            }
        },
        {
            label: "",
        },
        {
            type: "date",
            label: "วัน/เดือน/ปีเกิด (ค.ศ.)",
            isEditable: isEditable,
            datePickerElementProps: {
                name: "personalInfo.birthDateDayjs",
                rules: {
                    required: 'โปรดระบุวัน/เดือน/ปีเกิด',
                },
                inputProps: {
                    placeholder: "โปรดระบุวัน/เดือน/ปีเกิด",
                },
                maxDate: dayjs().subtract(15, 'year'),
            }
        },

    ]

    useEffect(() => {
        if (!isLoading) {
            trigger('personalInfo')
        }
    }, [isLoading, trigger])

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
                <div className="grid grid-cols-3">
                    {
                        inputDate.map((input, index) => {
                            return (
                                <InputElement
                                    key={index}
                                    {...input}
                                />
                            )
                        })
                    }
                </div>
            </ContentLoading>
        </>
    )
}

