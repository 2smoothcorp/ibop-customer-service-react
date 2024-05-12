import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataOccupation = () => {
    const masterData = useQuery({
        queryKey: ['occupation'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/occupation`)
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

export const useMasterDataOccupationCustom = (labelEmpty: string = "กรุณาเลือกอาชีพ") => {
    const masterData = useQuery({
        queryKey: ['occupationCustom'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/occupation`)
                const response: ComboBoxListDataResponse = await request.json();
                if (response && response.data && response.data.length > 0) {
                    const customData = response.data.map((item) => {
                        return {
                            ...item,
                            id: item.rValue || '',
                            value: item.rValue || '',
                            label: `${item.rValue} - ${item.rText}` + (item.rText2 ? ` ( ${item.rText2} )` : '')
                        }
                    });
                    return [{
                        id: "", value: "", label: labelEmpty,
                    }].concat(customData)
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

export default useMasterDataOccupation;