import { ComboBox, ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";

const useMasterDataTitles = () => {
    const masterData = useQuery({
        queryKey: ['Titles'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/titles`)
                const response: ComboBoxListDataResponse = await request.json();
                return response.data
            } catch (e) {
            } finally {
            }
        }
    })

    return { ...masterData }
}

export const useMasterDataTitlesCustom = (labelEmpty: string = "กรุณาเลือก") => {
    const masterData = useQuery({
        queryKey: ['TitlesCustom'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/titles`)
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
                    }].concat(customData) as Array<ComboBox>
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

export default useMasterDataTitles