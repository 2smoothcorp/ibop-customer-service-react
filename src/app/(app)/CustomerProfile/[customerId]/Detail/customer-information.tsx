import { useState } from "react";
import AddressByCurrent from "./customer-information/address-by-current";
import AddressByType from "./customer-information/address-by-type";
import OccupationInfo from "./customer-information/occupation-info";
import PersonalInfo from "./customer-information/personal-info";
import PoliticRelationInfo from "./customer-information/politic-relation-info";
import SpouseInfo from "./customer-information/spouse-info";

export default function CustomerInformation() {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    return (
        <>
            <PersonalInfo isEditable={isEditable} />
            <SpouseInfo isEditable={isEditable} />
            <AddressByType isEditable={isEditable} />
            <AddressByCurrent isEditable={isEditable} />
            <OccupationInfo isEditable={isEditable} />
            <PoliticRelationInfo isEditable={isEditable} />
        </>
    )
}