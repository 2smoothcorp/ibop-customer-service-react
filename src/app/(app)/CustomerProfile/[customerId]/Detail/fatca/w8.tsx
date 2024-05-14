"use client"

import ContentLoading from "@/components/content/content-loading";
import InputNumber from "@/components/custom/input-number";
import LabelBase from "@/components/custom/label-base";
import HeaderNavbar from "@/components/navbar/header-navbar";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice";
import { TinInfoOutput } from "@/services/rest-api/customer-service";
import { isObjectEmpty, objectToArray } from "@/utils/function";
import { Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { AutocompleteElement, TextFieldElement } from "react-hook-form-mui";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";

export default function W8({ useForm }: { useForm: UseFormReturn<CustomerFatcaState, any, undefined> }) {
    const { watch, setValue, register, formState: { errors } } = useForm;
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const params = useParams()

    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    const inputData1 = [
        {
            name: 'w8.name',
            label: '1. Name of individual who is the beneficial owner',
            col: 12,
            labelWidth: 340,
            required: true
        },
        {
            name: 'w8.citizenCountryCode',
            label: '2. Country of citizenship',
            col: 12,
            labelWidth: 200,
            type: 'autocomplete',
            options: countries,
            required: true
        },
        {
            name: 'w8.address1',
            label: '3. Permanent residence address ( street, apt. or suite no., or rural route). Do not use a P.O. box or in-care-of address.',
            col: 12,
            labelWidth: 800,
            required: true
        },
        {
            name: 'w8.address2',
            label: 'City or town, state or province. Include postal code where appropriate',
            col: 10,
            labelWidth: 480,
            labelLeft: 15,
            required: true
        },
        {
            name: 'w8.countryCode',
            label: 'Country',
            col: 2,
            labelWidth: 70,
            type: 'autocomplete',
            options: countries,
            required: true
        },
        {
            name: 'w8.mailingAddress1',
            label: '4. Mailing address (if different from above)',
            col: 12,
            labelWidth: 300,
            required: true
        },
        {
            name: 'w8.mailingAddress2',
            label: 'City or town, state or province. Include postal code where appropriate',
            col: 10,
            labelWidth: 480,
            labelLeft: 20,
            required: true
        },
        {
            name: 'w8.mailingCountryCode',
            label: 'Country',
            col: 2,
            labelWidth: 70,
            type: 'autocomplete',
            options: countries,
            required: true
        },
        {
            name: 'w8.taxNo',
            label: '5. U.S. taxpayer identification number (SSN or ITIN), if required (see instructions)',
            col: 12,
            labelWidth: 550,
            required: true
        },
        {
            name: 'w8.foreignTaxNo',
            label: '6. a. Foreign tax identifying number (see instructions)',
            col: 6,
            labelWidth: 370,
            required: true
        },
        {
            name: 'w8.foreignTaxNoRemark',
            label: '6. b. Check if FTIN not legally required',
            col: 6,
            labelWidth: 270,
            required: true
        },
        {
            name: 'w8.referenceNo',
            label: '7. Reference number(s) (see instructions)',
            col: 12,
            labelWidth: 300,
            required: true
        },
        {
            name: 'w8.dateOfBirthDayjs',
            label: '8. Date of birth (DD/MM/YYYY) (see instructions)',
            col: 12,
            labelWidth: 330,
            type: 'date',
            required: true
        },
    ]

    const inputData2 = [
        {
            name: '',
            label: '9. I certify that the beneficial owner is a resident of (please select below) within the meaning of the income tax treaty between the United States and that country.',
            col: 12,
        },
        {
            name: 'w8.beneficialCountryCode',
            label: '',
            col: 12,
            type: 'autocomplete',
            options: countries,
            required: true
        },
        {
            label: '10. Special rate and conditions (if applicable-see instructions)',
            col: 12,
        },
        {
            name: 'w8.beneficialTaxRemark1',
            label: 'The beneficial owner is claiming the provisions of Article and paragraph',
            col: 12,
            labelWidth: 500,
            labelLeft: 20,
            required: false
        },
        {
            name: 'w8.beneficialTaxRate',
            label: 'of the treaty identified on line 9 above to claim a',
            col: 12,
            labelWidth: 500,
            labelLeft: 20,
            type: 'number',
            required: false
        },
        {
            name: 'w8.beneficialTaxRemark1',
            label: 'rate of withholding on (specify type of income)',
            col: 12,
            labelWidth: 500,
            labelLeft: 20,
            required: false
        },
        {
            label: 'Explain the additional conditions in the Article and paragraph the beneficial owner meets to be eligible for the rate of withholding:',
            col: 12,
            labelLeft: 14,
        },
        {
            name: 'w8.additionCondition',
            label: '',
            col: 12,
            labelLeft: 14,
            required: false
        }

    ]

    const { data, isLoading, error } = useQuery({
        queryKey: ['fatca-w8', params.customerId],
        queryFn: () => getData(),
    })

    const confirmFatcaW8Input = useAppSelector(state => state.cusomterFatca.confirm?.fatcaW8Input)

    const setDefaultDataChange = () => {
        console.log("setDefaultDataChange")
        setTimeout(() => {
            if (confirmFatcaW8Input) {
                try {
                    const oldData = objectToArray({ w8: confirmFatcaW8Input });
                    oldData.map((item) => {
                        const [key, value] = item;
                        if (key === 'w8.dateOfBirth') {
                            setValue("w8.dateOfBirthDayjs", dayjs(value as any), {
                                shouldDirty: false,
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
        }, 100)
    }

    const getData = async () => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/w8/${customerId}`, { method: 'GET' });
                const response: TinInfoOutput = await request.json();
                if (!isObjectEmpty(response)) {
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

    const birthDateDayjs = watch('w8.dateOfBirthDayjs')

    useEffect(() => {
        if (birthDateDayjs) {
            const result = birthDateDayjs.format('YYYY-MM-DD');
            setValue('w8.dateOfBirth', result as any, { shouldDirty: true })
        }
    }, [birthDateDayjs, setValue])

    const renderInput = (item: any, index: number) => {
        if (!item.name) {
            return <Grid key={index} item xs={item.col} className="flex flex-row items-center">
                <div style={{ width: item.labelLeft || 0 }} />
                <LabelBase
                    title={item.label}
                />
            </Grid>
        }
        if (item.type === 'date') {
            return <Grid
                key={index}
                item
                xs={item.col}
                className="flex flex-row items-center">
                <div style={{ width: item.labelLeft || 0 }} />
                <LabelBase
                    width={item.labelWidth}
                    title={item.label}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePickerElement
                            rules={{
                                required: "This field is required"
                            }}
                            name={item.name}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
        }
        if (item.type === 'number') {
            return <Grid
                key={index}
                item
                xs={item.col}
                className="flex flex-row items-center">
                <div style={{ width: item.labelLeft || 0 }} />
                <LabelBase
                    width={item.labelWidth}
                    title={item.label}
                />
                <InputNumber
                    disabled={!isEditable}
                    type="percent"
                    name={item.name}
                    value={watch(item.name as any)}
                    onChange={(e) => {
                        if (e > 100) {
                            setValue(item.name as any, '100', { shouldDirty: true })
                        } else if (e <= 0) {
                            setValue(item.name as any, '', { shouldDirty: true })
                        } else {
                            setValue(item.name as any, e, { shouldDirty: true })
                        }
                    }}
                />
            </Grid>
        }
        if (item.type === 'autocomplete') {
            return <Grid
                key={index}
                item
                xs={item.col}
                className="flex flex-row items-center">
                <div style={{ width: item.labelLeft || 0 }} />
                <LabelBase
                    width={item.labelWidth}
                    title={item.label}
                />
                <AutocompleteElement
                    autocompleteProps={{
                        disabled: !isEditable,
                        fullWidth: true,
                    }}
                    textFieldProps={{
                        placeholder: 'Select country',
                    }}
                    name={item.name}
                    options={item.options}
                    required
                    transform={{
                        output: (event, item) => {
                            return item.value || ''
                        },
                    }}
                />
            </Grid>
        }
        return <Grid
            key={index}
            item
            xs={item.col}
            className="flex flex-row items-center">
            <div style={{ width: item.labelLeft || 0 }} />
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
    }

    return (
        <>
            <HeaderNavbar
                title="Certificate of Foreign Status of Beneficial Owner for UnitedStates Tax Withholding and Reporting (Individuals) W-8BEN"
            />
            <div className="border min-h-[400px] border-t-0 p-10">
                <ContentLoading
                    isLoading={isLoading || isLoadingCountries}
                    error={error && error.message || undefined}
                    hight={500}
                >
                    <HeaderTitle
                        className="gap-0"
                        title="PART I: IDENTIFICATION OF BENEFICIAL OWNER (SEE INSTRUCTIONS)"
                    />
                    <Grid container spacing={2} marginTop={0} paddingTop={2}>
                        {
                            inputData1.map((item, index) => {
                                return renderInput(item, index)
                            })
                        }
                    </Grid>
                    <HeaderTitle
                        className="gap-0"
                        title="PART II: CLAIM OF TAX TREATY BENEFITS (FOR CHAPTER 3 PURPOSES ONLY)(SEE INSTRUCTION)"
                    />
                    <Grid container spacing={2} marginTop={0} paddingTop={2}>
                        {
                            inputData2.map((item, index) => {
                                return renderInput(item, index)
                            })
                        }
                    </Grid>
                </ContentLoading>
            </div>
        </>
    )
}
