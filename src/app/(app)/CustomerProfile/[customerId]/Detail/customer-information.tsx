import AddressByCurrent from "./customer-information/address-by-current";
import AddressByType from "./customer-information/address-by-type";
import OccupationInfo from "./customer-information/occupation-info";
import PersonalInfo from "./customer-information/personal-info";
import PoliticRelationInfo from "./customer-information/politic-relation-info";
import SpouseInfo from "./customer-information/spouse-info";

export default function CustomerInformation() {

    return (
        <>
            <PersonalInfo />
            <SpouseInfo />
            <AddressByType />
            <AddressByCurrent />
            <OccupationInfo />
            <PoliticRelationInfo />
        </>
    )
}