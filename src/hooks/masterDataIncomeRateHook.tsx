import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataIncomeRate = () => {
    const MasterDataIncomeRate = useQuery({
        queryKey: ['incomeRate'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/income-rate`)
                const response: ComboBoxListDataResponse = await request.json();
                console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...MasterDataIncomeRate }
}

export default useMasterDataIncomeRate