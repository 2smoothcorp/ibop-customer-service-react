"use client"

import ContentLoading from "@/components/content/content-loading";
import InputSwitch from "@/components/custom/input-switch";
import HeaderTitle from "@/components/navbar/header-title";
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice";
import { TinInfoOutput } from "@/services/rest-api/customer-service";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function ExitUSIndentity({ useForm }: { useForm: UseFormReturn<CustomerFatcaState, any, undefined> }) {
  const { watch, setValue } = useForm;
  const searchParams = useSearchParams()
  const isEditable = searchParams.get('edit') === 'true';
  const params = useParams()

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
        const response: TinInfoOutput = await request.json();
        // console.log('response', response)
        const { isFatcaIndividualSelfCert } = response;
        if (response) {
          setValue('isFatcaIndividualSelfCert', isFatcaIndividualSelfCert || false)
          return response;
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
        title="ส่วนที่ 2 ท่านเป็นผู้มีถิ่นที่อยู่ทางภาษีในประเทศอื่นๆนอกจากสหรัฐอเมริกา"
      />
      <ContentLoading
        isLoading={isLoading}
        error={error && error.message || undefined}
        hight={300}
      >
        <div className="block px-10">
          <div className="flex justify-around items-center pb-4">
            {
              data && (
                <InputSwitch
                  label="สถานะ FATCA"
                  name="isFatcaIndividualSelfCert"
                  defaultValue={isFATCA}
                  onChange={(e) => setValue('isFatcaIndividualSelfCert', e)}
                  disabled
                />
              )
            }
            {
              data?.isFatcaIndividualSelfCert && (
                <Button
                  onClick={() => { console.log('open modal add new tin') }}
                  variant="contained"
                  className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 text-lg py-0 h-8"
                >เพิ่ม</Button>
              )
            }
          </div>
          {
            data?.isFatcaIndividualSelfCert && (
              <DataGrid
                loading={isLoading}
                showCellVerticalBorder
                rows={data.tins || undefined}
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
    field: 'TaxCountryCode',
    headerName: 'ประเทศถิ่นที่อยู่ทางภาษี',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'TinNo',
    headerName: 'หมายเลขประจำตัวผู้เสียภาษี',
    headerAlign: 'center',
    align: 'center',
    flex: 2,
  },
  {
    field: 'NoTinResonCode',
    headerName: 'หากไม่มีหมายเลขประจำตัวผู้เสียภาษี ระบุเหตุผล A, B, หรือ C',
    headerAlign: 'center',
    align: 'center',
    flex: 3,
  },
  {
    field: 'NoTinReasonRemark',
    headerName: 'หากท่านเลือกเหตุผล B โปรดอธิบายเหตุ...',
    headerAlign: 'center',
    align: 'center',
    flex: 2,
  },
];