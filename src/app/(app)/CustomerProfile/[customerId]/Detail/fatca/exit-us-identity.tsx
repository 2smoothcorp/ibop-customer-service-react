"use client"

import ContentLoading from "@/components/content/content-loading";
import InputSwitch from "@/components/custom/input-switch";
import HeaderTitle from "@/components/navbar/header-title";
import { AnswerFACTA, GetTinOutput } from "@/services/rest-api/customer-service";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function ExitUSIndentity() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm<SubmitInput>()
    const [isEditable, setIsEditable] = React.useState<boolean>(false);
    const isFATCA = watch('isFatcaIndividualSelfCert');

    const { data, isLoading, error } = useQuery({
        queryKey: ['exitUSIdentity', params.customerId],
        queryFn: () => getData(),
    })

    const getData = async () => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/fatca/tins/${customerId}`, { method: 'GET' });
                const response: GetTinOutput[] = await request.json();
                const requestAnswers = await fetch(`/api/customer-profile/fatca/answers/${customerId}`, { method: 'GET' });
                const responseAnswers: AnswerFACTA = await requestAnswers.json();
                console.log(response)
                const { isFatcaIndividualSelfCert } = responseAnswers;
                setValue('isFatcaIndividualSelfCert', isFatcaIndividualSelfCert || false)
                if (response) {
                    return response

                }
            } catch (error) {
                throw error
            }
        }
        return null
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ส่วนที่ 1 สถานะความเป็นบุคคลอเมริกัน"
            />
            <ContentLoading
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={300}
            >
                <div className="block px-10">
                    <div className="flex justify-around items-center pb-4">
                        {
                            isFATCA !== undefined && (
                                <InputSwitch
                                    label="สถานะ FATCA"
                                    name="isFatcaIndividualSelfCert"
                                    defaultValue={isFATCA}
                                    onChange={(e) => setValue('isFatcaIndividualSelfCert', e)}
                                />
                            )
                        }
                        {
                            isFATCA && (
                                <Button
                                    onClick={() => { console.log('open modal add new tin') }}
                                    variant="contained"
                                    className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 text-lg py-0 h-8"
                                >เพิ่ม</Button>
                            )
                        }
                    </div>
                    {
                        isFATCA && (
                            <DataGrid
                                loading={isLoading}
                                showCellVerticalBorder
                                rows={data || undefined}
                                columns={columns}
                                autoHeight
                                pageSizeOptions={[]}
                            />
                        )
                    }
                </div>
            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    isFatcaIndividualSelfCert: boolean;
}

const columns: GridColDef[] = [
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'bank',
        headerName: 'ประเทศถิ่นที่อยู่ทางภาษี',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'accountNo',
        headerName: 'หมายเลขประจำตัวผู้เสียภาษี',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'isDefault',
        headerName: 'เหตุผล',
        headerAlign: 'center',
        align: 'center',
        width: 200,
    },
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'howToRegister',
        headerName: 'เหตุผล B',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
];