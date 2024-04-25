import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataPersonType = () => {
    const masterData = useQuery({
        queryKey: ['personType'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/person-type`)
                const response: ComboBoxListDataResponse = await request.json();
                if (response && response.data && response.data.length > 0) {
                    return response.data
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

export const useMasterDataPersonTypeCustom = () => {
    const masterData = useQuery({
        queryKey: ['personTypeCustom'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/person-type`)
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

export default useMasterDataPersonType;