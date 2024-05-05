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

export type AddressBySearchModeProps = 'postCode' | 'province' | 'district' | 'subDistrict';

interface ThailandAddressProps {
    po: string;
    p: string;
    d: string;
    s: string;
}

export interface AddressBySearchProps {
    value: AddressValues;
    label: string;
}

export interface AddressValues {
    postCode: string;
    province: string;
    provinceCode: string;
    district: string;
    districtCode: string;
    subDistrict: string;
    subDistrictCode: string;
}

export const getAddressBySearch = (search: string, mode: AddressBySearchModeProps): AddressBySearchProps[] => {
    let result = [];
    switch (mode) {
        case 'postCode':
            result = thailandAddress.filter((item: any) => item.po.search(search) != -1);
            break;
        case 'province':
            result = thailandAddress.filter((item: any) => item.p.search(search) != -1);
            break;
        case 'district':
            result = thailandAddress.filter((item: any) => item.d.search(search) != -1);
            break;
        case 'subDistrict':
            result = thailandAddress.filter((item: any) => item.s.search(search) != -1);
            break;
        default:
            result = thailandAddress
            break;
    }
    result = result.slice(0, 10).map((item: ThailandAddressProps) => {
        const subDistrict = item.s.split('|')[0];
        const district = item.d.split('|')[0];
        const province = item.p.split('|')[0];
        const label = `${subDistrict} > ${district} > ${province} > ${item.po}`;
        return {
            value: {
                postCode: item.po,
                province: item.p.split('|')[0],
                provinceCode: item.p.split('|')[1],
                district: item.d.split('|')[0],
                districtCode: item.d.split('|')[1],
                subDistrict: item.s.split('|')[0],
                subDistrictCode: item.s.split('|')[1],
            },
            label: label,
        }
    })
    return result;
}