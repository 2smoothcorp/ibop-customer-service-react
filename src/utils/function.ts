export const handleEmptyStringFormApi = (value: string | undefined | null): string => {
    if (!value) return "-";
    if (value === '-') return "-";
    return value;
}

export const isEmptyStringFormApi = (value: string | undefined | null): boolean => {
    if (!value) return true;
    if (value === '-') return true;
    return false;
}