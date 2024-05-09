export interface DropDownListProps {
    name: string
    label?: string
    textShow?: string
    placeHolder?: string
    isRequired?: boolean
    defaultValue?: string
    value?: string
    setValue?: (value: string) => void
}