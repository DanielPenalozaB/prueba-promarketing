import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface CheckboxInterface extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    label: string;
}