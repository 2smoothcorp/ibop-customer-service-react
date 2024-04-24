'use client'


import HeaderNavbar from "@/components/navbar/header-navbar"
import TabNavbar from "@/components/navbar/tab-navbar"
import React from "react"
import ATS from "./ats"
import AttorneySection from "./attorney"
import CustomerContract from "./customer-contract"
import CustomerInformation from "./customer-information"
import EDividend from "./e-dividend"
import FATCA from "./fatca"

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
            component: <div>Content3</div>
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
            title: "สรุปรายละเอียด",
            component: <div>Content10</div>
        }
    ]
    const [stepIndex, setStepIndex] = React.useState(0)
    return (
        <div className="">
            <HeaderNavbar
                title={stepper[stepIndex].title}
            />
            <div className="px-[44px]">
                <TabNavbar
                    list={stepper.map((item) => item.title)}
                    onChange={(index) => setStepIndex(index)}
                />
                <div className="border border-b-[1px] h-[1px]" />
                <div className="h-[calc(100vh-250px)] overflow-y-auto">
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