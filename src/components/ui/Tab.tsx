import { TabInterface } from "@/interfaces";
import React from "react";

export default function Tab({ label, isSelected, onClick }: TabInterface) {
	return (
		<button
			type="button"
			title={label}
			aria-label={label}
			className="group relative flex px-4 outline-none"
			onClick={onClick}
		>
			<span
				className={`max-h-12 py-3.5 text-center duration-300 ease-out text-sm group-hover:text-primary-700 ${
					isSelected ? "text-primary-900" : "text-primary-500"
				}`}
			>
				{label}
			</span>
			<span
				className={`absolute bottom-0 left-0 duration-300 ease-out h-[2px] w-full group-focus:bg-primary-500 group-hover:bg-primary-400 ${
					isSelected ? "bg-primary-900" : "bg-primary-100"
				}`}
			/>
		</button>
	);
}
