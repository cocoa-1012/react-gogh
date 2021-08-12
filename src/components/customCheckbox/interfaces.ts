import { ReactElement } from "react";

export interface CustomCheckboxProps {
    checked: boolean;
    onChange?: (check: boolean) => void;
    label?: string;
    children?: ReactElement;
    color?: string;
}