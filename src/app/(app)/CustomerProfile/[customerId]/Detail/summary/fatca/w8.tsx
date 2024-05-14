import LabelBase from "@/components/custom/label-base";
import HeaderNavbar from "@/components/navbar/header-navbar";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { FatcaW8Input } from "@/services/rest-api/customer-service";
import { Grid } from "@mui/material";
import React, { ReactElement } from "react";

export interface SummaryW8Props extends FatcaW8Input {
    tinType?: string
}

const SummaryW8 = (props: SummaryW8Props) => {

    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    const inputData1 = [
        {
            name: 'name',
            label: '1. Name of individual who is the beneficial owner',
            col: 12,
            labelWidth: 340,
            required: true
        },
        {
            name: 'citizenCountryCode',
            label: '2. Country of citizenship',
            col: 12,
            labelWidth: 200,
            type: 'autocomplete',
            options: countries,
            required: true
        },
        {
            name: 'address1',
            label: '3. Permanent residence address ( street, apt. or suite no., or rural route). Do not use a P.O. box or in-care-of address.',
            col: 12,
            labelWidth: 800,
            required: true
        },
        {
            name: 'address2',
            label: 'City or town, state or province. Include postal code where appropriate',
            col: 10,
            labelWidth: 480,
            labelLeft: 15,
            required: true
        },
        {
            name: 'countryCode',
            label: 'Country',
            col: 2,
            labelWidth: 70,
            type: 'autocomplete',
            options: countries,
            required: true
        },
        {
            name: 'mailingAddress1',
            label: '4. Mailing address (if different from above)',
            col: 12,
            labelWidth: 300,
            required: true
        },
        {
            name: 'mailingAddress2',
            label: 'City or town, state or province. Include postal code where appropriate',
            col: 10,
            labelWidth: 480,
            labelLeft: 20,
            required: true
        },
        {
            name: 'mailingCountryCode',
            label: 'Country',
            col: 2,
            labelWidth: 70,
            type: 'autocomplete',
            options: countries,
            required: true
        },
        {
            name: 'taxNo',
            label: '5. U.S. taxpayer identification number (SSN or ITIN), if required (see instructions)',
            col: 12,
            labelWidth: 550,
            required: true
        },
        {
            name: 'foreignTaxNo',
            label: '6. a. Foreign tax identifying number (see instructions)',
            col: 6,
            labelWidth: 370,
            required: true
        },
        {
            name: 'foreignTaxNoRemark',
            label: '6. b. Check if FTIN not legally required',
            col: 6,
            labelWidth: 270,
            required: true
        },
        {
            name: 'referenceNo',
            label: '7. Reference number(s) (see instructions)',
            col: 12,
            labelWidth: 300,
            required: true
        },
        {
            name: 'dateOfBirth',
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

    const confirm = { ...props }

    const w8List = [
        {
            title: "Certificate of Foreign Status of Beneficial Owner for UnitedStates Tax Withholding and Reporting (Individuals) W-8BEN",
            fields: inputData1
        },
        {
            title: "PART II: CLAIM OF TAX TREATY BENEFITS (FOR CHAPTER 3 PURPOSES ONLY)(SEE INSTRUCTION)",
            fields: inputData2
        }
    ]

    console.log(`confirm`, confirm)

    return <>
        {
            w8List.map((w8, idx: number) => {
                return <React.Fragment key={`w8-${idx}`}>
                    <HeaderNavbar
                        title={w8.title}
                    />
                    <Grid container spacing={2} padding={5} marginTop={0} paddingTop={2}>
                        {
                            w8.fields?.map((item, index) => {

                                const name = item?.name?.replace(/^w8\./, '')

                                let _value = confirm[name as keyof SummaryW8Props];

                                if (item?.options) {
                                    _value = (item?.options?.filter(o => o.rValue === _value)[0] || [])?.rText
                                }

                                if (!_value && !item.label) return null

                                let labelValue: string | ReactElement | undefined = _value?.toString()

                                if (item.label) {
                                    labelValue = <>
                                        <LabelBase
                                            width={item.labelWidth}
                                            title={item.label}
                                        //title={_value ? item.label : ''}
                                        />
                                        {_value?.toString()}</>
                                }

                                return <Grid
                                    key={index}
                                    item
                                    xs={item.col}
                                    className="flex flex-row items-center">
                                    <div style={{ width: item.labelLeft || 0 }} />
                                    {labelValue}
                                </Grid>
                            })
                        }
                    </Grid>
                </React.Fragment>
            })
        }

    </>
}

export default SummaryW8;