export interface LabelProps {
    isRequired?: boolean
    isEditable?: boolean
    isFullWidth?: boolean
    label: string
}

const LabelText = ({
    isRequired,
    isEditable,
    isFullWidth,
    label,
}: LabelProps) => {

    const getIsRequired = () => {
        if (isRequired && isEditable) {
            return <span className="text-red-500">*</span>
        }
        return <></>
    }

    let className = `text-lg px-4 font-semibold tracking-wide`
    if (!isFullWidth) {
        className += ` w-full text-right`
    }else{
        className += ` we`
    }

    return <div className={className}>{label} {getIsRequired()}</div>
}

export default LabelText