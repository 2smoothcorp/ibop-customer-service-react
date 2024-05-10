import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataCountries = () => {
    const MasterDataCountries = useQuery({
        queryKey: ['countries'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/countries`)
                const response: ComboBoxListDataResponse = await request.json();
                // console.log(`response`, response)
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...MasterDataCountries }
}

export const useMasterDataCountriesCustom = () => {
    const MasterDataCountries = useQuery({
        queryKey: ['countries-custom'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/countries`)
                const response: ComboBoxListDataResponse = await request.json();
                if (response && response.data && response.data.length > 0) {
                    const customData = response.data.map((item) => {
                        return {
                            ...item,
                            id: item.rValue || '',
                            value: item.rValue || '',
                            label: `${item.rValue} - ${item.rText}`
                        }
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

    return { ...MasterDataCountries }
}

export default useMasterDataCountries