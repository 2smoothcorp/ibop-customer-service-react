import { ComboBox, ComboBoxListDataResponse } from "@/services/rest-api/customer-service";
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

export const useMasterDataPersonTypeCustom = (labelEmpty: string = "กรุณาเลือกประเภทลูกค้า") => {
    const masterData = useQuery({
        queryKey: ['personTypeCustom'],
        queryFn: async function () {
            try {
                const request = await fetch(`/api/master-data/person-type`)
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

export default useMasterDataPersonType;