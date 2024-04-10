"use client";

import HeaderNavbar from "@/components/navbar/header-navbar";
import HeaderTitle from "@/components/navbar/header-title";

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from "react";



function AccountPayment() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1000)

    const columns: GridColDef[] = [
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'order',
            headerName: 'ลำดับ',
            width: 120,
            headerAlign: 'center',
            align: 'center',
        },
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'bank',
            headerName: 'ธนาคาร',
            headerAlign: 'center',
            align: 'center',
            flex: 2,
        },
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'bankNumber',
            headerName: 'เลขที่บัญชี',
            headerAlign: 'center',
            align: 'center',
            resizable: true,
            flex: 2,
        },
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'isBankMain',
            headerName: 'เลือกเป็นบัญชีหลัก',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            width: 200,
            valueGetter: (value, row) => `${row.isBankMain ? '✅' : '❌'}`,
        },
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'howToRegister',
            headerName: 'วิธีสมัคร ATS',
            headerAlign: 'center',
            align: 'center',
            description: 'This column has a value getter and is not sortable.',
            flex: 1,
        },
    ];

    const rows = [
        { id: 1, order: 1, bank: "006 - KTB", bankNumber: "321321315", isBankMain: true, howToRegister: "ผ่านบริษัท" },
        { id: 2, order: 1, bank: "006 - KTB", bankNumber: "321321315", isBankMain: false, howToRegister: "ผ่านบริษัท" }
    ];

    return (
        <div className="mx-[37px]">
            <HeaderTitle
                title="บัญชีธนาคารที่ประสงค์จะใช้ชำระราคาสำหรับธุรกรรมซื้อขายผลิตภัณฑ์ในตลาดทุนต่างๆ"
            />
            <div className="h-2" />
            <DataGrid
                loading={isLoading}
                showCellVerticalBorder
                rows={rows}
                columns={columns}
                pageSizeOptions={[]}
            />
        </div>
    );
}

function AccountDividend() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1000)

    const columns: GridColDef[] = [
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'order',
            headerName: 'ลำดับ',
            width: 120,
            headerAlign: 'center',
            align: 'center',

        },
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'bank',
            headerName: 'ธนาคาร',
            headerAlign: 'center',
            align: 'center',
            flex: 2,
        },
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'bankNumber',
            headerName: 'เลขที่บัญชี',
            headerAlign: 'center',
            align: 'center',
            resizable: true,
            flex: 2,
        },
        {
            headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
            cellClassName: 'font-cordia-new text-[18px]',
            field: 'isBankMain',
            headerName: 'เลือกเป็นบัญชีหลัก',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (value, row) => `${row.isBankMain ? '✅' : '❌'}`,
        },
    ];

    const rows = [
        { id: 1, order: 1, bank: "006 - KTB", bankNumber: "321321315", isBankMain: true, howToRegister: "ผ่านบริษัท" },
        { id: 2, order: 2, bank: "006 - KTB", bankNumber: "321321315", isBankMain: false, howToRegister: "ผ่านบริษัท" }
    ];

    return (
        <div className="mx-[37px]">
            <HeaderTitle
                title="บัญชีธนาคารที่ประสงค์จะใช้ชำระราคาสำหรับธุรกรรมซื้อขายผลิตภัณฑ์ในตลาดทุนต่างๆ"
            />
            <div className="h-2" />
            <DataGrid
                loading={isLoading}
                showCellVerticalBorder
                rows={rows}
                columns={columns}
                pageSizeOptions={[]}
            />
        </div>
    );
}

export default function AtsEDividendPage() {
    return (
        <>
            <HeaderNavbar title="บัญชี ATS - E - Dividend" />
            <AccountPayment />
            <div className="h-5" />
            <AccountDividend />
        </>
    );
}