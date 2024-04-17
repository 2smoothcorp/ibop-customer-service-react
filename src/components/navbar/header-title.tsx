export default function HeaderTitle({
    className,
    title,
    rightComponent,
}: HeaderTitleProps) {
    return (
        <div className={`flex flex-col gap-[10px] py-[20px] ${className}`}>
            <div className="flex justify-between">
                <span className="font-db-helvethaica text-[24px] font-semibold p-0 m-0 tracking-wide text-[#43AD9E]">{title}</span>
                {rightComponent}
            </div>
            <div className="border border-b-[1px] h-[1px]" />
        </div>
    )
}

interface HeaderTitleProps {
    className? : string;
    title: string;
    rightComponent?: React.ReactNode;
}

