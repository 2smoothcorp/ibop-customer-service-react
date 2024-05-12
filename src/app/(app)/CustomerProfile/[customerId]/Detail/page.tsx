'use client'


import BreadcrumbsNavbar from "@/components/navbar/breadcrumbs-navbar"
import HeaderNavbar from "@/components/navbar/header-navbar"
import TabNavbar from "@/components/navbar/tab-navbar"
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook"
import { jumpToStep } from "@/libs/redux/store/customer-profile-slice"
import { useSearchParams } from "next/navigation"
import React from "react"
import AccountInformation from "./account-information"
import ATS from "./ats"
import AttorneySection from "./attorney"
import Beneficiary from "./beneficiary"
import Consent from "./consent"
import CustomerContract from "./customer-contract"
import CustomerInformation from "./customer-information"
import EDividend from "./e-dividend"
import FATCA from "./fatca"
import FinancialInformation from "./financial-information"
import SummaryInformation from "./summary-information"

export default function DetailPage() {
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const stepper = [
        {
            title: "ข้อมูลส่วนตัว",
            component: <CustomerInformation />
        },
        {
            title: "ข้อมูลติดต่อ",
            component: <CustomerContract />
        },
        {
            title: "ข้อมูลทางการเงิน",
            component: <FinancialInformation />
        },
        {
            title: "ผู้รับผลประโยชน์ที่แท้จริง",
            component: <Beneficiary />
        },
        {
            title: "ข้อมูล ATS ",
            component: <ATS />
        },
        {
            title: "ข้อมูล e-Dividend",
            component: <EDividend />
        },
        {
            title: "ผู้รับมอบอำนาจ",
            component: <AttorneySection />
        },
        {
            title: "ความยินยอมและวัตถุประสงค์อื่น",
            component: <Consent />
        },
        {
            title: "FATCA - CRS",
            component: <FATCA />
        },
        {
            title: isEditable ? "สรุปรายละเอียดที่แก้ไข" : "ข้อมูลบัญชี",
            component: isEditable ? <SummaryInformation></SummaryInformation> : <AccountInformation />
        }
    ]

    // const customerInformationConfirm = useAppSelector(state => state.customerInformation.confirm)

    // useEffect(() => {
    //     console.log('customerInformationConfirm', customerInformationConfirm)
    // }, [customerInformationConfirm])

    const step = useAppSelector((state) => state.customerProfile.step)
    const dispatch = useAppDispatch()

    return (
        <div className="">
            <BreadcrumbsNavbar
                className="px-10"
                data={[
                    {
                        title: isEditable ? "แก้ไขข้อมูล" : "ข้อมูลลูกค้า",
                        link: isEditable ? "/CustomerProfile/Edit/Offline" : "/CustomerProfile"
                    },
                    { title: "รายละเอียดลูกค้า" }
                ]}
            />
            <HeaderNavbar
                title={stepper[step - 1].title}
            />
            <div className="px-[44px]">
                <TabNavbar
                    value={step - 1}
                    list={stepper.map((item) => item.title)}
                    onChange={(index) => dispatch(jumpToStep(index + 1))}
                />
                <div className="border border-b-[1px] h-[1px]" />
                <div className="h-[calc(100vh-300px)] overflow-y-auto">
                    {
                        stepper[step - 1].component
                    }
                </div>
            </div>
        </div>
    )
}

interface StepData {
    title: string;
    component: React.ReactNode;
}