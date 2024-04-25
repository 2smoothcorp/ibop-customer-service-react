import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataReference = () => {
    const masterData = useQuery({
        queryKey: ['references'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/reference`)
                const response: ComboBoxListDataResponse = await request.json();
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...masterData }
}

export const useMasterDataReferenceCustom = () => {
    const masterData = useQuery({
        queryKey: ['referencesCustom'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/reference`)
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

    return { ...masterData }
}

export default useMasterDataReference