import thailandAddress from "@/assets/thailand-address.min.json";
import { Box, createFilterOptions } from "@mui/material";
import { AutocompleteElementProps } from "react-hook-form-mui";

export const handleEmptyStringFormApi = (value: string | undefined | null): string => {
    if (!value) return "-";
    if (value === '-') return "-";
    return value;
}

export const handlerEmpty = (value: string | undefined | null): string => {
    if (!value) return '';
    if (value === '-') return "";
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

export interface AddressThailandProps {
    id: string;
    value: AddressThailandResultProps;
    text: string;
    label: string;
}

export interface AddressThailandResultProps {
    postCode: string;
    province: string;
    provinceCode: string;
    district: string;
    districtCode: string;
    subDistrict: string;
    subDistrictCode: string;
}

export interface AddressValues {
    postCode: string;
    province: string;
    provinceCode: string;
    district: string;
    districtCode: string;
    subDistrict: string;
    subDistrictCode: string;
    result: AddressThailandResultProps,
    label: string;
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

const getDataAddress = (item: ThailandAddressProps): {
    result: AddressThailandResultProps,
    label: string,
} => {
    return {
        result: {
            postCode: item.po,
            province: item.p.split('|')[0],
            provinceCode: item.p.split('|')[1],
            district: item.d.split('|')[0],
            districtCode: item.d.split('|')[1],
            subDistrict: item.s.split('|')[0],
            subDistrictCode: item.s.split('|')[1],
        },
        label: `${item.s.split('|')[0]} > ${item.d.split('|')[0]} > ${item.p.split('|')[0]} > ${item.po}`,
    }

}

export const getAddressToPostCode = (): AddressThailandProps[] => {
    return thailandAddress.map((item: ThailandAddressProps, index: number) => {
        const { label, result } = getDataAddress(item);
        return {
            id: result.postCode,
            value: result,
            text: result.postCode,
            label: label,
        }
    });

}

export const getAddressToProvince = (): AddressThailandProps[] => {
    return thailandAddress.map((item: ThailandAddressProps) => {
        const { label, result } = getDataAddress(item);
        return {
            id: result.provinceCode,
            value: result,
            text: result.province,
            label: label,
        }
    });
}

export const getAddressToDistrict = (): AddressThailandProps[] => {
    return thailandAddress.map((item: ThailandAddressProps) => {
        const { label, result } = getDataAddress(item);
        return {
            id: result.districtCode,
            value: result,
            text: result.district,
            label: label,
        }
    });
}

export const getAddressToSubDistrict = (): AddressThailandProps[] => {
    return thailandAddress.map((item: ThailandAddressProps) => {
        const { label, result } = getDataAddress(item);
        return {
            id: result.subDistrictCode,
            value: result,
            text: result.subDistrict,
            label: label,
        }
    });
}

export const addressComponentToProps = ({
    name,
    required,
    input,
    options,
    disabled = false
}: {
    name: string,
    required: string,
    input: ((value: any) => any) | undefined,
    options: any[],
    disabled?: boolean,
}): AutocompleteElementProps => {
    return {
        name: name,
        rules: {
            required,
        },

        autocompleteProps: {
            disabled,
            clearIcon: null,
            fullWidth: true,
            filterOptions,
            renderOption,
            isOptionEqualToValue,
        },
        transform: {
            input,
            output: (_, option) => {
                if (!option) return '';
                return option.value;
            }
        },
        options: options,
    }
}


export const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: AddressThailandProps) => option.text,
})

export const renderOption = (props: any, option: AddressThailandProps) => {
    return <Box component="li" {...props}
        key={option.label}
    >
        {option.label}
    </Box>
}

export const isOptionEqualToValue = (option: AddressThailandProps, value: string) => {
    if (
        !option ||
        value === ''
    ) return false

    return option.id === value
}

export const isObjectEmpty = (obj: object) => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}


// Map RHF's dirtyFields over the `data` received by `handleSubmit` and return the changed subset of that data.
export function dirtyValues(dirtyFields: object | boolean, allValues: object): object {
    // If *any* item in an array was modified, the entire array must be submitted, because there's no way to indicate
    // "placeholders" for unchanged elements. `dirtyFields` is `true` for leaves.
    if (dirtyFields === true || Array.isArray(dirtyFields))
        return allValues;
    // Here, we have an object
    return Object.fromEntries(Object.keys(dirtyFields).map(key => [key, dirtyValues(dirtyFields[key], allValues[key])]));
}

interface DataFormHook {
    [key: string]: any;
}

export function normalizationDataFormHook(name: string, value: any, obj: DataFormHook = {}): DataFormHook {
    const keys = name.split('.');
    const lastKey = keys.pop(); // ลบและเก็บ key สุดท้าย
    const lastObj = keys.reduce((acc: DataFormHook, key: string) => {
        if (!acc[key]) acc[key] = {}; // สร้าง object ถ้ายังไม่มี
        return acc[key];
    }, obj); // เริ่มต้นที่ obj ที่ส่งเข้ามา

    lastObj[lastKey!] = value; // กำหนดค่าให้กับ key สุดท้าย
    return obj;
}

// Define a type guard to check if a value is an object
function isObject(item: any): item is Record<string, any> {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

// The mergeDeep function now has type annotations for its parameters and return type
export function mergeDeep(target: Record<string, any>, ...sources: Record<string, any>[]): Record<string, any> {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}

export function objectToArray(obj: any): [string, any[]][] {
    const result: [string, any[]][] = [];

    function traverse(obj: any, currentPath: string): void {
        for (const key in obj) {
            const value = obj[key];
            const path = currentPath ? `${currentPath}.${key}` : key;

            if (typeof value === 'object') {
                traverse(value, path);
            } else {
                result.push([path, value]);
            }
        }
    }

    traverse(obj, '');
    return result;
}