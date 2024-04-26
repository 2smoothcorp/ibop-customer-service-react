import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataProduct = () => {
    const MasterDataProduct = useQuery({
        queryKey: ['products'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/product`)
                const response: ComboBoxListDataResponse = await request.json();
                // console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...MasterDataProduct }
}

export default useMasterDataProduct