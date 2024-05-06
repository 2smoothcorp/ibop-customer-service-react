export interface DropDownListProps {
    name: string
    label?: string
    textShow?: string
    placeHolder?: string
    isRequired?: boolean
    setValue?: (value: string) => void
}