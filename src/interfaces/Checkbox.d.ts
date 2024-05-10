import { ChangeEvent } from "react";

export interface CheckboxInterface {
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id: string;
    label: string;
    className?: string;
}