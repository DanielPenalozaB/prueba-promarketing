import { CurrencyInputInterface } from "@/interfaces";
import { NumericFormat } from "react-number-format";

const CurrencyInput = (props: CurrencyInputInterface) => {
	return (
		<NumericFormat
			id={props.id}
			name={props.name}
			value={props.value}
			thousandSeparator="."
			prefix={"$"}
			decimalScale={0}
			decimalSeparator=","
			onValueChange={(values) =>
				values.floatValue && props.onChange && props.onChange(values.floatValue)
			}
			onBlur={props.onBlur}
			className={props.className}
			placeholder={props.placeholder}
			onKeyDown={props.onKeyDown}
			disabled={props.disabled}
		/>
	);
};

export default CurrencyInput;
