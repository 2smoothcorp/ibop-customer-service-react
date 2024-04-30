import thailandAddress from "@/assets/thailand-address.min.json";

export const handleEmptyStringFormApi = (value: string | undefined | null): string => {
    if (!value) return "-";
    if (value === '-') return "-";
    return value;
}

export const isEmptyStringFormApi = (value: string | undefined | null): boolean => {
    if (!value) return true;
    if (value === '-') return true;
    return false;
}

export interface AddressBySearchProps {
    value: {
        postCode: string;
        province: string;
        provinceCode: string;
        district: string;
        districtCode: string;
        subDistrict: string;
        subDistrictCode: string;
    };
    label: string;
}

export const getAddressBySearch = (search: string, mode: 'postCode' | 'province' | 'district' | 'subDistrict'): AddressBySearchProps[] => {
    let result = [];
    switch (mode) {
        case 'postCode':
            result = thailandAddress.filter((item: any) => item.po.localeCompare(search));
            break;
        case 'province':
            result = thailandAddress.filter((item: any) => item.p.localeCompare(search));
            break;
        case 'district':
            result = thailandAddress.filter((item: any) => item.d.localeCompare(search));
            break;
        case 'subDistrict':
            result = thailandAddress.filter((item: any) => item.s.localeCompare(search));
            break;
        default:
            result = thailandAddress
            break;
    }
    console.log(result)
    result = result.slice(0, 10).map((item: any) => {
        const subDistrict = item.s.split('|')[0];
        const district = item.d.split('|')[0];
        const province = item.p.split('|')[0];
        const label = `${subDistrict} > ${district} > ${province} > ${item.po}`;
        return {
            value: {
                postCode: item.po,
                province: item.p.split('|')[1],
                provinceCode: item.p.split('|')[0],
                district: item.d.split('|')[1],
                districtCode: item.d.split('|')[0],
                subDistrict: item.s.split('|')[1],
                subDistrictCode: item.s.split('|')[0],
            },
            label: label,
        }
    })
    return result;
}