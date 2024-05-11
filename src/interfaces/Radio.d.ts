import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface RadioInterface extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    label: string;
}