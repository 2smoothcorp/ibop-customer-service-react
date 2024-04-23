import AddressByCurrent from "./CustomerInformation/AddressByCurrent";
import AddressByType from "./CustomerInformation/AddressByType";
import OccupationInfo from "./CustomerInformation/OccupationInfo";
import PersonalInfo from "./CustomerInformation/PersonalInfo";
import PoliticRelationInfo from "./CustomerInformation/PoliticRelationInfo";
import SpouseInfo from "./CustomerInformation/SpouseInfo";

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