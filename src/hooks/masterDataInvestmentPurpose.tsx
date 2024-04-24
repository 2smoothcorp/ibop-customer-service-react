import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataInvestmentPurpose = () => {
    const MasterDataInvestmentPurpose = useQuery({
        queryKey: ['investmentPurpose'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/investment-purpose`)
                const response: ComboBoxListDataResponse = await request.json();
                console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...MasterDataInvestmentPurpose }
}

export default useMasterDataInvestmentPurpose