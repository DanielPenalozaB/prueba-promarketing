import React from "react";

export default function Input(
	props: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>
) {
	return (
		<input
			{...props}
			className="block h-12 w-full max-w-[355px] rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
		/>
	);
}
