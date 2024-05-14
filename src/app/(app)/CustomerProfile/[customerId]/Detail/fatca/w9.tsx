"use client"

import ContentLoading from "@/components/content/content-loading";
import LabelBase from "@/components/custom/label-base";
import HeaderNavbar from "@/components/navbar/header-navbar";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice";
import { GetFatcaW9Output } from "@/services/rest-api/customer-service";
import { isObjectEmpty, objectToArray } from "@/utils/function";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { RadioButtonGroup, TextFieldElement } from "react-hook-form-mui";

export default function W9({ useForm }: { useForm: UseFormReturn<CustomerFatcaState, any, undefined> }) {
    const { watch, setValue } = useForm;
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const params = useParams()
    const inputData = [
        {
            name: 'w9.name',
            label: 'Name Surname',
            col: 3,
            labelWidth: 120,
            required: true,
        },
        {
            name: 'w9.businessName',
            label: 'Business name / disregarded entity name, if different from above',
            col: 9,
            labelWidth: 450,
            required: false,
        },
        {
            type: 'radio',
            name: 'w9.appropriate',
            label: 'Check appropriate box for federal tax classification of the person whose name is entered on line 1. Check only one of the following seven boxes.',
            col: 12,
            isCol: true,
            defaultValue: watch('w9.appropriate'),
            options: [
                { id: 'Individual / sole proprietor or single-member LLC', label: 'Individual / sole proprietor or single-member LLC' },
                { id: 'C Corporation', label: 'C Corporation' },
                { id: 'S Corporation', label: 'S Corporation' },
                { id: 'Partnership', label: 'Partnership' },
                { id: 'Trust / estate', label: 'Trust / estate' },
                { id: 'Limited liability company', label: 'Limited liability company' },
                { id: 'Other (see instructions)', label: 'Other (see instructions)' },
            ],
            required: false,
        },
        {
            label: 'Exemption ( codes apply only to certain entities, not individuals; see instructions on page 3 )'
        },
        {
            name: 'w9.exemptionPayeeCode',
            label: 'Exempt payee code ( if any )',
            col: 12,
            labelWidth: 200,
            required: false,
        },
        {
            name: 'w9.exemptionReportingCode',
            label: 'Exemption from FATCA reporting code ( if any )',
            col: 12,
            labelWidth: 320,
            required: false,
        },
        {
            name: 'w9.address1',
            label: 'Address (number, street, and apt. or suite no.) See instructions.',
            col: 12,
            labelWidth: 430,
            required: true,
        },
        {
            name: 'w9.address2',
            label: 'City, state, and ZIP code',
            col: 6,
            labelWidth: 180,
            required: true,
        },
        {
            name: 'w9.accountList',
            label: 'List account number(s) here ( optional )',
            col: 6,
            labelWidth: 260,
            required: false,
        },
        {
            type: 'radio',
            name: 'tinType',
            label: 'Taxpayer Identification Number ( TIN )',
            col: 5,
            defaultValue: '1',
            labelWidth: 300,
            options: [
                { id: '1', label: 'Social security number' },
                { id: '2', label: 'Employer identification number' },
            ],
            required: true,
        },
        {
            name: 'w9.ssn',
            label: '',
            col: 7,
            labelWidth: 0,
            required: true,
        },
        {
            name: 'w9.ein',
            label: '',
            col: 7,
            labelWidth: 0,
            required: true,
        },
    ]

    const tinType = watch('tinType')

    useEffect(() => {
        setValue('w9.ssn', '')
        setValue('w9.ein', '')
    }, [setValue, tinType])

    const { data, isLoading, error } = useQuery({
        queryKey: ['fatca-w9', params.customerId],
        queryFn: () => getData(),
    })

    const confirmFatcaW9Input = useAppSelector(state => state.cusomterFatca.confirm?.fatcaW9Input)

    const setDefaultDataChange = () => {
        setTimeout(() => {
            if (confirmFatcaW9Input) {
                try {
                    const oldData = objectToArray({ w9: confirmFatcaW9Input });
                    oldData.map((item) => {
                        const [key, value] = item;
                        setValue(key as any, value, {
                            shouldDirty: true
                        })
                    });
                } catch (err) {
                    console.error(err)
                }
            }
        }, 100)
    }

    const getData = async (): Promise<GetFatcaW9Output | null> => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/w9/${customerId}`, { method: 'GET' });
                const response: GetFatcaW9Output = await request.json();
                if (!isObjectEmpty(response)) {
                    setValue('w9', response);
                    setDefaultDataChange();
                    return response;
                }
                setDefaultDataChange();
            } catch (error) {
                throw error
            }
        }
        return null
    }

    return (
        <>
            <HeaderNavbar
                title="Request for Taxpayer Identification Number and Certification (W-9)"
            />
            <div className="border min-h-[400px] border-t-0">
                <ContentLoading
                    isLoading={isLoading}
                    error={error && error.message || undefined}
                    hight={500}
                >
                    <Grid container spacing={2} padding={5} marginTop={0} paddingTop={2}>
                        {
                            inputData.map((item, index) => {
                                if (watch('tinType') === '1' && item.name === 'w9.ein') {
                                    return null
                                }
                                if (watch('tinType') === '2' && item.name === 'w9.ssn') {
                                    return null
                                }
                                if (!item.name) {
                                    return <Grid key={index} item xs={12}>
                                        <LabelBase
                                            title={item.label}
                                        />
                                    </Grid>
                                }
                                if (item.type === 'radio') {
                                    return <Grid
                                        key={index}
                                        item
                                        xs={item.col}
                                        className={item.isCol ? 'flex flex-col' : 'flex flex-row items-center'}
                                    >
                                        <LabelBase
                                            className={item.isCol ? 'mb-2' : ''}
                                            width={item.labelWidth}
                                            title={item.label}
                                        />
                                        <RadioButtonGroup
                                            row
                                            name={item.name}
                                            options={item.options || []}
                                        />
                                        {/* <InputRadio
                                            className="w-full flex justify-between"
                                            row
                                            name={item.name}
                                            options={item.options || []}
                                            defaultValue={item.defaultValue}
                                            onSelectOption={(value) => setValue(item.name as any, value)}
                                        /> */}
                                    </Grid>
                                }
                                return <Grid
                                    key={index}
                                    item
                                    xs={item.col}
                                    className="flex flex-row items-center">
                                    <LabelBase
                                        width={item.labelWidth}
                                        title={item.label}
                                    />
                                    <TextFieldElement
                                        disabled={!isEditable}
                                        name={item.name}
                                        required={item.required}
                                    />
                                </Grid>
                            })
                        }
                        <Grid item xs={12} className="text-[18px] indent-10 py-10 px-[16px]">
                            Enter your TIN in the appropriate box. The TIN provided must match the name given on line 1 to avoid backup withholding. For inGrididuals this is generally your social security number (SSN). However, for a resident alien, sole proprietor, or disregarded entity, see the instructions for Part I, later. For other entities, it is your employer identification number (EIN). If you do not have a number, see How to get a TIN, later.
                        </Grid>
                        <Grid item xs={12} className="text-[18px] indent-10 px-[16px]">
                            Note: If the account is in more than one name, see the instructions for line 1. Also see What Name and Number To Give the Requester for guidelines on whose number to enter.
                        </Grid>
                    </Grid>
                </ContentLoading>
            </div >
        </>
    )
}
