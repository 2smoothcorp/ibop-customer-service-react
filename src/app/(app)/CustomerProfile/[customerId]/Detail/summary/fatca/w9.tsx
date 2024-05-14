import LabelBase from "@/components/custom/label-base";
import HeaderNavbar from "@/components/navbar/header-navbar";
import { FatcaW9Input } from "@/services/rest-api/customer-service";
import { Grid } from "@mui/material";

export interface SummaryW9Props extends FatcaW9Input {
    tinType?: string
}

const SummaryW9 = (props: SummaryW9Props) => {

    const inputData = [
        {
            name: 'name',
            label: 'Name Surname',
            col: 3,
            labelWidth: 120,
            required: true,
        },
        {
            name: 'businessName',
            label: 'Business name / disregarded entity name, if different from above',
            col: 9,
            labelWidth: 450,
            required: false,
        },
        {
            type: 'radio',
            name: 'appropriate',
            label: 'Check appropriate box for federal tax classification of the person whose name is entered on line 1. Check only one of the following seven boxes.',
            col: 12,
            isCol: true,
            //defaultValue: watch('appropriate'),
            options: [
                { value: 'Individual / sole proprietor or single-member LLC', label: 'Individual / sole proprietor or single-member LLC' },
                { value: 'C Corporation', label: 'C Corporation' },
                { value: 'S Corporation', label: 'S Corporation' },
                { value: 'Partnership', label: 'Partnership' },
                { value: 'Trust / estate', label: 'Trust / estate' },
                { value: 'Limited liability company', label: 'Limited liability company' },
                { value: 'Other (see instructions)', label: 'Other (see instructions)' },
            ],
            required: false,
        },
        {
            label: 'Exemption ( codes apply only to certain entities, not individuals; see instructions on page 3 )'
        },
        {
            name: 'exemptionPayeeCode',
            label: 'Exempt payee code ( if any )',
            col: 12,
            labelWidth: 200,
            required: false,
        },
        {
            name: 'exemptionReportingCode',
            label: 'Exemption from FATCA reporting code ( if any )',
            col: 12,
            labelWidth: 320,
            required: false,
        },
        {
            name: 'address1',
            label: 'Address (number, street, and apt. or suite no.) See instructions.',
            col: 12,
            labelWidth: 430,
            required: true,
        },
        {
            name: 'address2',
            label: 'City, state, and ZIP code',
            col: 6,
            labelWidth: 180,
            required: true,
        },
        {
            name: 'accountList',
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
            labelWidth: 0,
            options: [
                { value: '1', label: 'Social security number' },
                { value: '2', label: 'Employer identification number' },
            ],
            required: true,
        },
        {
            name: 'ssn',
            label: '',
            col: 7,
            labelWidth: 0,
            required: true,
        },
        {
            name: 'ein',
            label: '',
            col: 7,
            labelWidth: 0,
            required: true,
        },
    ]

    const confirm = { ...props }

    return <>
        <HeaderNavbar
            title="Request for Taxpayer Identification Number and Certification (W-9)"
            className="mt-4"
        />
        <Grid container spacing={2} padding={5} marginTop={0} paddingTop={2}>
            {
                inputData.map((item, index) => {

                    const _value = confirm[item?.name as keyof SummaryW9Props]

                    if (!_value && !item.label) return null

                    if (!item.label && _value) return <Grid
                        key={index}
                        item
                        xs={item.col}
                        className="flex flex-row items-center">
                        {_value}
                    </Grid>

                    return <Grid
                        key={index}
                        item
                        xs={item.col}
                        className="flex flex-row items-center">
                        <LabelBase
                            width={item.labelWidth}
                            title={item.label}
                        //title={_value ? item.label : ''}
                        />
                        {_value}
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
    </>
}

export default SummaryW9;