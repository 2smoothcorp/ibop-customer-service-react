"use client";

import IconLoading from "@/components/custom/icon-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderNavbar from "@/components/navbar/header-navbar";
import HeaderTitle from "@/components/navbar/header-title";
import { Button } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function KycCddPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SubmitInput>()

    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);

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
                                        // onClick={() => setIsEditable(!isEditable)}
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
                                    onClick={() => setIsEditable(!isEditable)}
                                    variant="contained"
                                    className="bg-[#43AD9E] hover:bg-[#43AD9E] hover:brightness-95 font-cordia-new text-lg py-0">
                                    แก้ไข
                                </Button>
                        }
                    />
                    <div className="h-2" />
                    <div className="px-[20px] py-[15px]">
                        <InputHorizontal
                            label="สรุปผลกลุ่มเสี่ยงของลูกค้า"
                            labelWidth={"15%"}
                            defaultValue="ความเสี่ยงสูง"
                            isEditable={isEditable}
                            register={register}
                            name="riskGroupSummary"
                        />
                        <InputHorizontal
                            label="กลุ่ม"
                            labelWidth={"15%"}
                            defaultValue="3"
                            isEditable={isEditable}
                            register={register}
                            name="riskGroup"
                        />
                        <InputHorizontal
                            label="คะแนน"
                            labelWidth={"15%"}
                            defaultValue="7"
                            isEditable={isEditable}
                            register={register}
                            name="score"
                        />
                        <InputHorizontal
                            label="วันที่เริ่มต้น"
                            labelWidth={"15%"}
                            defaultValue="04/04/2024"
                            isEditable={isEditable}
                            register={register}
                            name="startDate"
                        />
                        <InputHorizontal
                            label="วันหมดอายุ"
                            labelWidth={"15%"}
                            defaultValue="04/04/2026"
                            isEditable={isEditable}
                            register={register}
                            name="endDate"
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
    riskGroup: string;
    score: string;
    startDate: string;
    endDate: string;
}