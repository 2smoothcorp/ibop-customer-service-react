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

export const useMasterDataIncomeRateCustom = () => {
    const MasterDataIncomeRate = useQuery({
        queryKey: ['countries'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/income-rate`)
                const response: ComboBoxListDataResponse = await request.json();
                if (response && response.data && response.data.length > 0) {
                    const customData = response.data.map((item) => {
                        return { ...item, value: item.rValue || '', label: `${item.rValue} - ${item.rText}` }
                    });
                    return customData
                }
                return [];
            } catch (e) {
                console.error(e);
                return [];
            } finally {
            }
        }
    })

    return { ...MasterDataIncomeRate }
}

export default useMasterDataIncomeRate