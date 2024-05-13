import LabelText from "@/components/custom/label"
import CountriesDDL from "@/components/dropdownlist/counrties-ddl"
import useMasterDataCountries from "@/hooks/masterDataCountries"
import { FinancialInfoModel } from "@/services/rest-api/customer-service"
import { UseFormReturn } from "react-hook-form"

export interface InvestmentSectionProps {
    isEditable?: boolean
    data: FinancialInfoModel | undefined | null
    form: UseFormReturn<FinancialInfoModel>
}

const InvestmentSection = (props: InvestmentSectionProps) => {
    const { isEditable = true, data, form } = props

    const masterDataCountries = useMasterDataCountries();

    const getCountryText = (countryCode: string) => {
        let _text = '-'
        const foundCountry = masterDataCountries?.data?.filter((d) => d.rValue === countryCode);
        if (foundCountry && foundCountry.length > 0) {
            _text = `${countryCode} - ${foundCountry[0]?.rText}`
        }
        return _text
    }

    return (<div className={isEditable ? "flex flex-nowrap" : ""}>
        <LabelText
            label="ประเทศของแหล่งที่มาของรายได้/เงินลงทุน Country's Source of income / Investment Fund"
            isEditable={isEditable}
            isRequired={true}
            isFullWidth={true}
        />
        {
            isEditable ?
                <div className="w-60">
                    <CountriesDDL
                        label={''}
                        name={`investmentFundCode`}
                        defaultValue={form.watch('investmentFundCode') || ''}
                        onChange={(v) => {
                            form.setValue('investmentFundCode', v, { shouldDirty: true })
                        }}
                    />
                </div>
                :
                <div className="text-lg px-10 tracking-wide" >{getCountryText(data?.investmentFundCode || '-')}</div>
        }
    </div>)
}

export default InvestmentSection