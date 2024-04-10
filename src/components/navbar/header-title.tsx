import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


export default function HeaderTitle({
    title,
    rightComponent,
}: HeaderTitleProps) {
    return (
        <div className="flex flex-col gap-[10px] py-[20px]">
            <div className="flex justify-between">
                <span className="font-db-helvethaica text-[24px] font-semibold p-0 m-0 tracking-wide text-[#43AD9E]">{title}</span>
                {rightComponent}
            </div>
            <div className="border border-b-[1px] h-[1px]" />
        </div>
    )
}

interface HeaderTitleProps {
    title: string;
    rightComponent?: React.ReactNode;
}

