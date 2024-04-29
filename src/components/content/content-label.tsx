export default function ContentLabel({
    label,
    required = false,
    children = <></>,
}: ContentLabelProps) {
    if (required) {
        return <div className="flex flex-col gap-2">
            <span className="mx-4 font-bold">{label} <span className="text-red-500">*</span></span>
            <span className="mx-8">{children}</span>
        </div>
    }
    return <div className="flex flex-col gap-2">
        <span className="mx-4 font-bold">{label}</span>
        <span className="mx-8">{children}</span>
    </div>
}

interface ContentLabelProps {
    label: string;
    required?: boolean;
    children?: React.ReactNode;
}