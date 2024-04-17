export default function HeaderTitleSub({
    className = "",
    title,
    rightComponent,
}: HeaderTitleSubProps) {
    return (
        <div className={`flex flex-col gap-[5px] py-[12px] ${className}`}>
            <div className="flex justify-between">
                <span className="font-db-helvethaica text-[18px] font-semibold p-0 m-0 tracking-wide ">{title}</span>
                {rightComponent}
            </div>
            <div className="border border-b-[1px] h-[1px]" />
        </div>
    )
}

interface HeaderTitleSubProps {
    className?: string;
    title: string;
    rightComponent?: React.ReactNode;
}

