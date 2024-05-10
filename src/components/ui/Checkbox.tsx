import { CheckIcon } from "@/assets/svg";
import { CheckboxInterface } from "@/interfaces";

const Checkbox = (props: CheckboxInterface) => (
	<div
		className={`flex h-9 items-center justify-start gap-2 p-1.5 ${props.className}`}
	>
		<div className="relative h-6 w-6">
			<input
				id={props.id}
				name={props.name}
				type="checkbox"
				disabled={props.disabled}
				defaultChecked={props.defaultChecked}
				checked={props.checked}
				className="peer relative h-6 max-h-6 min-h-6 w-6 min-w-6 max-w-6 shrink-0 appearance-none rounded-md outline outline-1 outline-neutral-300 checked:bg-accent-900 checked:outline-none focus:outline-none focus:ring-2 focus:ring-accent-300 disabled:bg-neutral-200 disabled:outline-neutral-200"
				onChange={props.onChange}
			/>
			<CheckIcon className="pointer-events-none absolute right-1/2 top-1/2 hidden h-4 w-4 -translate-y-1/2 translate-x-1/2 text-accent-100 outline-none peer-checked:block" />
		</div>
		<label
			htmlFor={props.id}
			className="text-sm leading-7 text-neutral-500"
		>
			{props.label}
		</label>
	</div>
);

export default Checkbox;
