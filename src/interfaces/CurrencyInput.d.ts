import { NumericFormatProps } from "react-number-format";

export interface CurrencyInputInterface {
    id: string;
    name: string;
    value: number | null;
    onChange?: (value: number) => void;
    // eslint-disable-next-line
    onBlur?: any;
    className?: string;
    placeholder?: string;
    // eslint-disable-next-line
    onKeyDown?: any;
    blurOnEscapeKey?: boolean;
    disabled?: boolean;
}