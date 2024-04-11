"use client";

import IconLoading from "@/components/custom/icon-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderNavbar from "@/components/navbar/header-navbar";
import HeaderTitle from "@/components/navbar/header-title";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function KycCddPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm<SubmitInput>()
    const labelWidth = "15%";
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const onSubmit: SubmitHandler<SubmitInput> = (data) => {
        if (!isLoadingSubmit) {
            setIsLoadingSubmit(true);
            console.log(data);
            setTimeout(() => {
                setIsLoadingSubmit(false);
                setIsEditable(false);
            }, 1500);
        }
    };

    const editData = () => {
        setValue("riskGroupSummary", "ความเสี่ยงสูง")
        setValue("riskGroup", 3)
        setValue("score", 7)
        setValue("startDate", "2024-04-06")
        setValue("endDate", "2026-04-06")
        setIsEditable(!isEditable);
    }

    return (
        <>
            <HeaderNavbar title="KYC / CDD" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-[37px]">
                    <HeaderTitle
                        title="สรุปผลการจัดกลุ่มความเสี่ยงลูกค้า"
                        rightComponent={
                            isEditable
                                ? <div className="flex gap-2">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 font-cordia-new text-lg py-0">
                                        {isLoadingSubmit ? <IconLoading color="#fff" /> : "บันทึก"}
                                    </Button >
                                    <Button
                                        onClick={() => setIsEditable(!isEditable)}
                                        variant="contained"
                                        className="bg-[#FF6565] hover:bg-[#FF6565] hover:brightness-95 font-cordia-new text-lg py-0">
                                        ยกเลิก
                                    </Button>
                                </div>
                                : <Button
                                    onClick={editData}
                                    variant="contained"
                                    className="bg-[#43AD9E] hover:bg-[#43AD9E] hover:brightness-95 font-cordia-new text-lg py-0">
                                    แก้ไข
                                </Button>
                        }
                    />
                    <div className="h-2" />
                    <div className="px-[20px] py-[15px]">
                        <InputHorizontal
                            type="select"
                            label="สรุปผลกลุ่มเสี่ยงของลูกค้า"
                            labelWidth={labelWidth}
                            defaultValue="ความเสี่ยงสูง"
                            isEditable={isEditable}
                            register={register}
                            name="riskGroupSummary"
                            list={[
                                { value: "ความเสี่ยงสูง", label: "ความเสี่ยงสูง" },
                                { value: "ความเสี่ยงปานกลาง", label: "ความเสี่ยงปานกลาง" },
                                { value: "ความเสี่ยงต่ำ", label: "ความเสี่ยงต่ำ" },
                            ]}
                        />
                        <InputHorizontal
                            type="number"
                            label="กลุ่ม"
                            labelWidth={labelWidth}
                            defaultValue="3"
                            isEditable={isEditable}
                            register={register}
                            name="riskGroup"
                        />
                        <InputHorizontal
                            type="number"
                            label="คะแนน"
                            labelWidth={labelWidth}
                            defaultValue="7"
                            isEditable={isEditable}
                            register={register}
                            name="score"
                        />
                        <InputHorizontal
                            type="date"
                            label="วันที่เริ่มต้น"
                            labelWidth={labelWidth}
                            defaultValue="2024-04-06"
                            isEditable={isEditable}
                            register={register}
                            name="startDate"
                            onChange={(val) => setValue("startDate", val)}
                        />
                        <InputHorizontal
                            type="date"
                            label="วันหมดอายุ"
                            labelWidth={labelWidth}
                            defaultValue="2026-04-06"
                            isEditable={isEditable}
                            register={register}
                            name="endDate"
                            onChange={(val) => setValue("endDate", val)}
                        />
                    </div>
                </div>
                <div className="my-5 flex justify-center">
                    <Button
                        onClick={() => console.log('click button ทบทวนกลุ่มความเสี่ยง')}
                        variant="contained"
                        className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 font-cordia-new text-lg py-1.5">
                        ทบทวนกลุ่มความเสี่ยง
                    </Button>
                </div>

            </form >
        </>
    );
}

type SubmitInput = {
    riskGroupSummary: string;
    riskGroup: number;
    score: number;
    startDate: string;
    endDate: string;
}