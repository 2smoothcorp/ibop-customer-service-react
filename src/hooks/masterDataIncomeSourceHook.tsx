import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataIncomeSource = () => {
    const MasterataIncomeSource = useQuery({
        queryKey: ['incomeSource'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/income-source`)
                const response: ComboBoxListDataResponse = await request.json();
                // console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...MasterataIncomeSource }
}

export default useMasterDataIncomeSource