import ExitUSIndentity from "./fatca/exit-us-identity";
import USIndentity from "./fatca/us-identity";

export default function FATCA() {
    return <>
        <USIndentity />
        <ExitUSIndentity />
    </>
}