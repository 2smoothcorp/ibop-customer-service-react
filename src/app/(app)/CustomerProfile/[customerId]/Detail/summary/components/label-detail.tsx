import InputHorizontal from "@/components/custom/input-horizontal";
import { Property } from "csstype";
import { ReactElement } from "react";

// Utility function to get a value from a field name
export const getValueFromFieldName = <T extends {}>(
    attributeName: string,
    data: T | undefined | null,
    normalizeName?: string,
    filterData?: Function,
    normalizationData?: Function
): string | boolean | null => {
    if (!data) return null;
    if (data[attributeName as keyof T] === null) {
        return null;
    }
    let value = data[attributeName as keyof T] || '';
    value = filterData ? filterData(value) : value;
    return normalizeName && normalizationData ? normalizationData(normalizeName, data as T, value) : value
}

export interface LabelDetailProps<T> {
    data?: T | undefined;
    name?: keyof T;
    label: string;
    defaultValue?: string;
    isRequired?: boolean;
    isEditable?: boolean;
    normalize?: string;
    type?: string;
    onChange?: (value: string) => void;
    CustomComponent?: ReactElement;
    condition?: (data?: T) => boolean
    filterData?: (value: any) => string | undefined;
    isFullRow?: boolean;
    labelAlign?: Property.TextAlign | undefined;
    normalizationData?: (data: T) => string
}

// Component definition
const LabelDetail = <T,>(props: LabelDetailProps<T>) => {
    const { data, name = '', label, defaultValue, isRequired, isEditable, normalize, filterData, condition, isFullRow } = props;

    if (!name) return null;

    if (condition && typeof condition === 'function' && !condition(data)) return null;

    const _textShow = (getValueFromFieldName(name.toString(), data, normalize, filterData) || '');
    if (!_textShow) return null;

    return (
        <div className={isFullRow ? `col-span-3` : ``}>
            <InputHorizontal
                label={label || ''}
                defaultValue={defaultValue}
                isEditable={isEditable}
                textShow={_textShow.toString()}
                name={name.toString()}
                isRequired={isRequired}
            />
        </div>
    );
}

export default LabelDetail;