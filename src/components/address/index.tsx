"use client"

import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { AddressBySearchModeProps, AddressBySearchProps, AddressValues, getAddressBySearch } from "@/utils/function";
import { ReactElement, useState } from "react";
import InputHorizontal from "../custom/input-horizontal";

export interface AddressComponentProps {
    isEditable?: boolean
    country?: AddressProps
    province: AddressProps
    district: AddressProps
    subDistrict: AddressProps
    zipCode: AddressProps
    addressValues?: AddressValues
    onAddressChange?: (address: AddressBySearchProps) => void
}

export interface AddressProps {
    name: string
    label?: string
    textShow?: string
    placeHolder?: string
    isRequired?: boolean
    setValue?: (value: string) => void
}

export interface AddressComponentReturn {
    Country: ReactElement
    Province: ReactElement
    District: ReactElement
    SubDistrict: ReactElement
    ZipCode: ReactElement
}

const AddressComponent = (props: AddressComponentProps): AddressComponentReturn => {

    const { isEditable, province, district, subDistrict, country, zipCode, onAddressChange, addressValues } = props

    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    const [thailandAddress, setThailandAddress] = useState<AddressBySearchProps[]>([]);
    const [address, setAddress] = useState<AddressBySearchProps | undefined>({
        value: addressValues || {
            postCode: '',
            province: '',
            provinceCode: '',
            district: '',
            districtCode: '',
            subDistrict: '',
            subDistrictCode: '',
        },
        label: ''
    });

    const getAddress = async (search: string, mode: AddressBySearchModeProps) => {
        const list = getAddressBySearch(search, mode);
        setThailandAddress(list);
    }

    const setAddresHook = (address: AddressBySearchProps) => {
        onAddressChange?.(address)
    }

    const Country = (
        <InputHorizontal
            label={country?.label || "ประเทศ"}
            name={country?.name || ""}
            defaultValue={country?.textShow}
            textShow={country?.textShow || "-"}
            isEditable={isEditable}
            isRequired
            type="autocomplete"
            list={countries}
            onChange={(value) => {
                country?.setValue?.(value)
            }}
            placeholder={country?.placeHolder || "โปรดเลือกประเทศ"}
        />
    )

    const Province = (
        <InputHorizontal
            label={province.label || 'จังหวัด'}
            name={province.name}
            defaultValueAddress={address}
            textShow={province.textShow}
            isEditable={isEditable}
            isRequired={province.isRequired}
            type="addressThailand"
            addressOptionType="province"
            addressList={thailandAddress}
            placeholder={province.placeHolder || "โปรดเลือกจังหวัด"}
            onChangeAddress={(item) => {
                setAddress(item)
                setAddresHook(item)
            }}
            onChange={(text) => {
                getAddress(text, 'province')
            }}
        />
    )

    const District = (
        <InputHorizontal
            label={district.label || "อำเภอ / เขต"}
            name={district.name}
            defaultValueAddress={address}
            textShow={district.textShow}
            isEditable={isEditable}
            isRequired={district.isRequired}
            type="addressThailand"
            addressList={thailandAddress}
            placeholder={district.placeHolder || "โปรดเลือกอำเภอ / เขต"}
            addressOptionType="district"
            onChangeAddress={(item) => {
                setAddress(item)
                setAddresHook(item)
            }}
            onChange={(text) => {
                getAddress(text, 'district')
            }}
        />
    )

    const SubDistrict = (
        <InputHorizontal
            label={subDistrict.label || "ตำบล / แขวง"}
            name={subDistrict.name}
            defaultValueAddress={address}
            textShow={subDistrict.textShow}
            isEditable={isEditable}
            isRequired={subDistrict.isRequired}
            type="addressThailand"
            addressList={thailandAddress}
            placeholder={subDistrict.placeHolder || "โปรดเลือกตำบล / แขวง"}
            addressOptionType="subDistrict"
            onChangeAddress={(item) => {
                setAddress(item)
                setAddresHook(item)
            }}
            onChange={(text) => {
                getAddress(text, 'subDistrict')
            }}
        />
    )

    const ZipCode = (
        <InputHorizontal
            label={zipCode.label || "รหัสไปรษณีย์"}
            defaultValueAddress={address}
            textShow={zipCode.textShow}
            isEditable={isEditable}
            name={zipCode.name}
            isRequired
            type="addressThailand"
            addressList={thailandAddress}
            placeholder={zipCode.placeHolder || "โปรดเลือกประเทศ"}
            addressOptionType="postCode"
            onChangeAddress={(item) => {
                setAddress(item)
                setAddresHook(item)
            }}
            onChange={(text) => {
                getAddress(text, 'postCode')
            }}
        />
    )

    return {
        Country,
        Province,
        District,
        SubDistrict,
        ZipCode
    }

}

export default AddressComponent;