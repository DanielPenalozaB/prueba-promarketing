import { RadioInterface } from "@/interfaces";

const Radio = (props: RadioInterface) => (
	<div
		className={`flex h-8 items-center justify-start gap-2 p-1.5 ${props.className}`}
	>
		<div className="relative h-5 w-5">
			<input
				id={props.id}
				name={props.name}
				type="radio"
				disabled={props.disabled}
				checked={props.checked}
				className={`unchecked:bg-transparent peer relative h-5 w-5 appearance-none rounded-full border border-neutral-200 outline-none checked:border-accent-900 focus:outline-none focus:ring-2 focus:ring-accent-300 disabled:bg-neutral-200 disabled:outline-neutral-200`}
				onChange={props.onChange}
				value={props.value}
			/>
			<div
				className={`peer absolute left-1/2 top-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-accent-900 peer-checked:block`}
			/>
		</div>
		<label
			htmlFor={props.id}
			className="text-sm leading-7 text-neutral-500"
		>
			{props.label}
		</label>
	</div>
);

export default Radio;
