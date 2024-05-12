import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataNation = () => {
    const masterData = useQuery({
        queryKey: ['nation'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/nation`)
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

export const useMasterDataNationCustom = (labelEmpty: string = "กรุณาเลือกสัญชาติ") => {
    const masterData = useQuery({
        queryKey: ['nationCustom'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/nation`)
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

export default useMasterDataNation;