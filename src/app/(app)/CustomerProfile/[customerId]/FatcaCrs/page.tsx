"use client";

import IconLoading from "@/components/custom/icon-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import InputSwitch from "@/components/custom/input-switch";
import HeaderNavbar from "@/components/navbar/header-navbar";
import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function FatcaCrsPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm<SubmitInput>()
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [isEditableOther, setIsEditableOther] = useState<boolean>(false);
    const [isEditableStep2, setIsEditableStep2] = useState<boolean>(false);
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
        setIsEditable(!isEditable);
    }

    const editDataOther = () => {
        setIsEditableOther(!isEditableOther);
    }

    const editDataStep2 = () => {
        setIsEditableStep2(!isEditableStep2);
    }

    return (
        <>
            <HeaderNavbar title="FATCA" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-[37px]">
                    <HeaderTitle title="ส่วนที่ 1 สถานะความเป็นบุคคลอเมริกัน" className="!pb-2" />
                    {/* <div className="h-2" /> */}
                    <div className="block pl-8">
                        <HeaderTitleSub
                            title="บุคคลอเมริกัน"
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
                        <InputSwitch
                            label="ท่านเป็นพลเมืองอเมริกัน ใช่หรือไม่"
                            name="isAmerican"
                            disabled={!isEditable}
                        />
                        <InputSwitch
                            label="ท่านเป็นผู้ถือบัตรประจำตัวผู้มีถิ่นที่อยู่ถาวรอย่างถูกต้องตามกฎหมายในสหรัฐอเมริกา (เช่น กรีนการ์ด) ใช่หรือไม่"
                            name="isGreenCard"
                            disabled={!isEditable}
                        />
                        <InputSwitch
                            label="ท่านมีสถานะเป็นผู้มีถิ่นที่อยู่ในสหรัฐอเมริกาเพื่อวัตถุประสงค์ในการเก็บภาษีอากรของสหรัฐอเมริกาใช่หรือไม่"
                            name="isUsaAddress"
                            disabled={!isEditable}
                        />
                        <HeaderTitleSub
                            title="คำถามเพิ่มเติม"
                            rightComponent={
                                isEditableOther
                                    ? <div className="flex gap-2">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 font-cordia-new text-lg py-0">
                                            {isLoadingSubmit ? <IconLoading color="#fff" /> : "บันทึก"}
                                        </Button >
                                        <Button
                                            onClick={() => setIsEditableOther(!isEditableOther)}
                                            variant="contained"
                                            className="bg-[#FF6565] hover:bg-[#FF6565] hover:brightness-95 font-cordia-new text-lg py-0">
                                            ยกเลิก
                                        </Button>
                                    </div>
                                    : <Button
                                        onClick={editDataOther}
                                        variant="contained"
                                        className="bg-[#43AD9E] hover:bg-[#43AD9E] hover:brightness-95 font-cordia-new text-lg py-0">
                                        แก้ไข
                                    </Button>
                            }
                        />
                        <InputSwitch
                            label="ท่านเกิดในสหรัฐอเมริกา (หรือดินแดนที่เป็นของสหรัฐอเมริกา) แต่ได้สละความเป็นพลเมืองอเมริกันอย่างสมบูรณ์ตามกฎหมายแล้ว"
                            name="isBornUsa"
                            disabled={!isEditableOther}
                        />
                        <InputSwitch
                            label="ท่านมีคำสั่งทำรายการโอนเงินเป็นประจำโดยอัตโนมัติจากบัญชีที่เปิดไว้หรือมีอยู่กับบริษัทไปยังบัญชีในสหรัฐอเมริกา ใช่หรือไม่"
                            name="isTransferUsa"
                            disabled={!isEditableOther}
                        />
                        <InputSwitch
                            label="ท่านมีการมอบอำนาจหรือให้อำนาจการลงลายมือชื่อแก่บุคคลที่มีที่อยู่ในสหรัฐอเมริการเพื่อการใดๆ ที่เกี่ยวข้องกับบัญชีที่เปิดไว้หรือมีอยู่กับบริษัท ใช่หรือไม่"
                            name="isPowerUsa"
                            disabled={!isEditableOther}
                        />
                        <InputSwitch
                            label="ท่านมีที่อยู่เพื่อการติดต่อหรือดำเนินการเกี่ยวกับบัญชีที่เปิดไว้หรือมีอยู่กับบริษัทแต่เพียงที่อยู่เดียว ซึ่งเป็นที่อยู่ในสหรัฐอเมริกาสำหรับรับไปรษณีย์แทนหรือที่อยู่สำหรับการส่งต่อ ใช่หรือไม่"
                            name="isAccountUsa"
                            disabled={!isEditableOther}
                        />
                        <InputSwitch
                            label="ท่านมีที่อยู่อาศัยในปัจจุบัน หรือที่อยู่เพื่อการติดต่อในสหรัฐอเมริกา สำหรับบัญชีที่เปิดไว้หรือมีอยู่กับบริษัท ใช่หรือไม่"
                            name="isUsaAddress"
                            disabled={!isEditableOther}
                        />
                        <InputSwitch
                            label="ท่านมีหมายเลขโทรศัพท์ในสหรัฐอเมริกา เพื่อการติดต่อท่านหรือบุคคลอื่นที่เกี่ยวข้องกับบัญชีที่เปิดไว้หรือมีอยู่กับบริษัท ใช่หรือไม่"
                            name="isUsaAddress"
                            disabled={!isEditableOther}
                        />
                    </div>
                    <HeaderTitle
                        title="ส่วนที่ 2 ท่านเป็นผู้มีถิ่นที่อยู่ทางภาษีในประเทศอื่นๆนอกจากสหรัฐอเมริกา"
                        className="!pb-2"
                        rightComponent={
                            isEditableStep2
                                ? <div className="flex gap-2">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 font-cordia-new text-lg py-0">
                                        {isLoadingSubmit ? <IconLoading color="#fff" /> : "บันทึก"}
                                    </Button >
                                    <Button
                                        onClick={() => setIsEditableStep2(!isEditableStep2)}
                                        variant="contained"
                                        className="bg-[#FF6565] hover:bg-[#FF6565] hover:brightness-95 font-cordia-new text-lg py-0">
                                        ยกเลิก
                                    </Button>
                                </div>
                                : <Button
                                    onClick={editDataStep2}
                                    variant="contained"
                                    className="bg-[#43AD9E] hover:bg-[#43AD9E] hover:brightness-95 font-cordia-new text-lg py-0">
                                    แก้ไข
                                </Button>
                        }
                    />
                    <InputSwitch
                        label="สถานะ FATCA"
                        name="isFatca"
                        disabled={!isEditableStep2}
                        isLabelRight
                    />
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