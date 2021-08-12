import React, { ChangeEvent } from "react";

export interface CustomTextFieldProps {
    label: string;
    value: string | number;
    setValue: (e: ChangeEvent<any>) => void;
    type?: string;
    required?: boolean;
    name?: string;
    onKeyDown?: (e: ChangeEvent<any>) => void;
    defaultValue?: string;
}

export interface StyleProps {
    borderColor?: string;
    labelFloat?: string;
}
