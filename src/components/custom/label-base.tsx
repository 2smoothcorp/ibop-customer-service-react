export default function LabelBase({ title, className }: LabelBaseProps) {
    return (
        <label className={`font-cordia-new text-lg tracking-wide ${className}`} >{title}</label>
    )
}

interface LabelBaseProps {
    title: string;
    className?: string;
}