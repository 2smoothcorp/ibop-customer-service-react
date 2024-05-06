import React from "react";
import { Path, UseFormReturn } from "react-hook-form";
import InputHorizontal from "../custom/input-horizontal";

interface DetailSection<T extends {}> {
    name: keyof T;
    label: string;
    defaultValue?: string;
    isRequired?: boolean;
    isEditable?: boolean;
    normalize?: string;
    type?: string;
    onChange?: (value: string) => void;
}

export interface FieldListProps<T extends {}> {
    form: UseFormReturn<T>;
    fieldList: ({ form }: { form: UseFormReturn<T> }) => Array<DetailSection<T>>;
    getValueFromFieldName: (dataInfo: T, fieldName: string, normalize: any) => string | any;
    dataInfo: T;
}

const FieldList = <T extends {}>(props: FieldListProps<T>) => {
    const { fieldList, form, getValueFromFieldName, dataInfo } = props;
    const { watch } = form;

    return (
        <>
            {fieldList({ form }).map((detail: DetailSection<T>, idx: number) => {
                const { name, label, defaultValue, isRequired, normalize } = detail;
                const _value = getValueFromFieldName(dataInfo, name as string, normalize);
                const textShow = watch(name as Path<T>)?.toString();
                return (
                    <React.Fragment key={`field-item-${idx}`}>
                        <InputHorizontal
                            label={label}
                            defaultValue={_value.toString()}
                            isEditable={detail.isEditable}
                            textShow={textShow}
                            name={name as string}
                            isRequired={isRequired}
                            onChange={(value) => form.setValue(name as Path<T>, value as any, { shouldDirty: true })}
                        />
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default FieldList;