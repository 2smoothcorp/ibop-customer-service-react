export default function LabelBase({ title, className, width }: LabelBaseProps) {
    return (
        <div className={`text-[20px] tracking-wide font-bold ${className}`} style={{ minWidth: width }} >{title}</div>
    )
}

interface LabelBaseProps {
    title: string;
    className?: string;
    width?: number | string;
}