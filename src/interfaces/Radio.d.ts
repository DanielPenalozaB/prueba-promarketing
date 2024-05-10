import { ChangeEvent } from "react";

export interface RadioInterface {
    disabled?: boolean;
    checked?: boolean;
    defaultValue?: "true" | "false"; // Use defaultValue instead of defaultChecked
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    id: string;
    label: string;
    className?: string;
}