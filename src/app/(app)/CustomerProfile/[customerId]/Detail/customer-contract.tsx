import ContractEmergency from "./customer-contract/contract-emergency";
import ContractInformation from "./customer-contract/contract-information";

export default function CustomerContract() {

    return (
        <>
            <ContractInformation />
            <ContractEmergency />
        </>
    )
}