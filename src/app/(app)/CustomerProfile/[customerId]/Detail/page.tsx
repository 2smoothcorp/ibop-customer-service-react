'use client'


import BreadcrumbsNavbar from "@/components/navbar/breadcrumbs-navbar"
import HeaderNavbar from "@/components/navbar/header-navbar"
import TabNavbar from "@/components/navbar/tab-navbar"
import React from "react"
import AccountInformation from "./account-information"
import ATS from "./ats"
import AttorneySection from "./attorney"
import CustomerContract from "./customer-contract"
import CustomerInformation from "./customer-information"
import EDividend from "./e-dividend"
import FATCA from "./fatca"
import FinancialInformation from "./financial-information"

export default function DetailPage() {
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
            component: <div>Content4</div>
        },
        {
            title: "บัญชี ATS ",
            component: <ATS />
        },
        {
            title: "e-Dividend",
            component: <EDividend />
        },
        {
            title: "ผู้รับมอบอำนาจ",
            component: <AttorneySection />
        },
        {
            title: "ความยินยอมและวัตถุประสงค์อื่น",
            component: <div>Content8</div>
        },
        {
            title: "FATCA - CRS",
            component: <FATCA />
        },
        {
            title: "ข้อมูลบัญชี",
            component: <AccountInformation />
        }
    ]
    const [stepIndex, setStepIndex] = React.useState(0)
    return (
        <div className="">
            <BreadcrumbsNavbar
                className="px-10"
                data={[
                    { title: "ข้อมูลลูกค้า", link: "/CustomerProfile" },
                    { title: "รายละเอียดลูกค้า" }
                ]}
            />
            <HeaderNavbar
                title={stepper[stepIndex].title}
            />
            <div className="px-[44px]">
                <TabNavbar
                    list={stepper.map((item) => item.title)}
                    onChange={(index) => setStepIndex(index)}
                />
                <div className="border border-b-[1px] h-[1px]" />
                <div className="h-[calc(100vh-300px)] overflow-y-auto">
                    {
                        stepper[stepIndex].component
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