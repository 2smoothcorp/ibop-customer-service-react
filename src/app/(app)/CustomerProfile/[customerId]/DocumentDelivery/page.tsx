"use client";

import IconLoading from "@/components/custom/icon-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import LabelBase from "@/components/custom/label-base";
import HeaderCard from "@/components/navbar/header-navbar";
import HeaderTitle from "@/components/navbar/header-title";
import { Button } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const currentAddress: Array<CurrentAddressProps> = [
    {
        label: "เลขที่",
        value: "123/456",
        isRequired: false,
        name: "houseNumber"
    },
    {
        label: "หมู่บ้าน / อาคาร",
        value: "รวยพันล้าน",
        isRequired: false,
        name: "village"
    },
    {
        label: "ชั้น",
        value: "5",
        isRequired: false,
        name: "floor"
    },
    {
        label: "ห้อง",
        value: "515",
        isRequired: false,
        name: "room"
    },
    {
        label: "หมู่ที่",
        value: "1",
        isRequired: false,
        name: "moo"
    },
    {
        label: "ซอย",
        value: "สุขุมวิท 71",
        isRequired: false,
        name: "soi"
    },
    {
        label: "ถนน",
        value: "สุขุมวิท",
        isRequired: false,
        name: "road"
    },
    {
        label: "",
        value: "",
        isRequired: false,
        name: ""
    },
    {
        label: "จังหวัด",
        value: "กรุงเทพมหานคร",
        isRequired: true,
        name: "province"
    },
    {
        label: "เขต / อำเภอ",
        value: "พระโขนง",
        isRequired: true,
        name: "district"
    },
    {
        label: "แขวง / ตำบล",
        value: "พระโขนง",
        isRequired: false,
        name: "subDistrict"
    },
    {
        label: "",
        value: "",
        isRequired: false,
        name: ""
    },
    {
        label: "ประเทศ",
        value: "ไทย",
        isRequired: true,
        name: "country"
    },
    {
        label: "รหัสไปรษณีย์",
        value: "10260",
        isRequired: false,
        name: "postalCode"
    }
]

export default function OfficialDocumentPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SubmitInput>()
    const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
    const [isEditable, setIsEditable] = useState<boolean>(false);

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
            <HeaderCard title="ช่องทางการจัดส่งเอกสาร" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-[37px]">
                    <HeaderTitle
                        title="วิธีรับเอกสาร"
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
                    <div className="px-[20px] py-[15px]">
                        <InputHorizontal
                            label="วิธีรับเอกสาร"
                            labelWidth={120}
                            defaultValue="ไปรษณีย์"
                            isRequired
                            isEditable={isEditable}
                            register={register}
                            name="documentDeliveryMethod"
                        />
                        <div className="font-cordia-new text-lg py-6 font-bold tracking-wide">ที่อยู่ติดต่อทางไปรษณีย์กรณีบริษัทส่งเอกสารอื่นๆ รวมถึงเอกสารจากนายทะเบียนหลักทรัพย์/ศูนย์รับฝากหลักทรัพย์ฯ ที่ต้องติดต่อทางไปรษณีย <span className="text-red-500">*</span></div>
                        <LabelBase title="ที่อยู่ปัจจุบันที่ติดต่อได้" />
                        <div className="grid grid-cols-4 gap-y-2">
                            {currentAddress.map((item, index) => (
                                <InputHorizontal
                                    register={register}
                                    key={index}
                                    label={item.label}
                                    defaultValue={item.value}
                                    isRequired={item.isRequired}
                                    isEditable={isEditable}
                                    name={item.name}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 py-2">
                            <InputHorizontal
                                label="ที่อยู่ 1"
                                isLableCols1
                                defaultValue="xxxxxxxxxxxxxxxxxxx"
                                isEditable={isEditable}
                                name="address1"
                                register={register}
                            />
                            <InputHorizontal
                                label="ที่อยู่ 2"
                                isLableCols1
                                defaultValue="xxxxxxxxxxxxxxxxxxx"
                                isEditable={isEditable}
                                name="address2"
                                register={register}
                            />
                            <InputHorizontal
                                label="ที่อยู่ 3"
                                isLableCols1
                                defaultValue="xxxxxxxxxxxxxxxxxxx"
                                isEditable={isEditable}
                                name="address3"
                                register={register}
                            />
                        </div>
                    </div>
                </div>
            </form>

        </>
    );
}

type SubmitInput = {
    documentDeliveryMethod: string;
    address1: string;
    address2: string;
    address3: string;
    houseNumber: string;
    village: string;
    floor: string;
    room: string;
    moo: string;
    soi: string;
    road: string;
    province: string;
    district: string;
    subDistrict: string;
    country: string;
    postalCode: string;
}

interface CurrentAddressProps {
    label: string;
    value: string;
    isRequired: boolean;
    name: string;
}