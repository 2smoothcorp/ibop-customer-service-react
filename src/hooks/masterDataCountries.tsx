import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataCountries = () => {
    const MasterDataCountries = useQuery({
        queryKey: ['countries'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/countries`)
                const response: ComboBoxListDataResponse = await request.json();
                console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...MasterDataCountries }
}

export default useMasterDataCountries