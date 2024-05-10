"use client";

import { Checkbox, Tab } from "@/components";
import Radio from "@/components/ui/Radio";
import { useState } from "react";

export default function Home() {
	const [screen, setScreen] = useState<"provider" | "deposit">("provider");

	return (
		<main className="flex w-full max-w-[781px] flex-col gap-2.5">
			<div className="flex">
				<Tab
					label="Crear Solicitud"
					isSelected={screen === "provider"}
					onClick={() => setScreen("provider")}
				/>
				<Tab
					label="Límite de depósito"
					isSelected={screen === "deposit"}
					onClick={() => setScreen("deposit")}
				/>
			</div>
			{screen === "provider" ? (
				<div className="flex w-full flex-col gap-8">
					<div className="flex flex-col gap-3.5">
						<div className="flex flex-col gap-[1.125rem] rounded-lg bg-[#F6F7FA] px-3.5 pb-3 pt-2">
							<h2 className="font-roboto-condensed text-xl font-bold uppercase leading-6 text-neutral-500">
								Autoexlusi&oacute;n proveedores
							</h2>
							<div className="flex w-full flex-col gap-[7px]">
								<div className="border-b-[0.2px] border-neutral-200">
									<Checkbox
										defaultChecked
										id="all"
										name="all"
										label="Todos"
									/>
								</div>
								<div className="flex w-full flex-wrap gap-y-[7px]">
									<Checkbox
										defaultChecked
										id="prov1"
										name="prov1"
										label="Prov. 1"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov2"
										name="prov2"
										label="Prov. 2"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov3"
										name="prov3"
										label="Prov. 3"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov4"
										name="prov4"
										label="Prov. 4"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov5"
										name="prov5"
										label="Prov. 5"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov6"
										name="prov6"
										label="Prov. 6"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov7"
										name="prov7"
										label="Prov. 7"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov8"
										name="prov8"
										label="Prov. 8"
										className="w-[6.625rem]"
									/>
									<Checkbox
										defaultChecked
										id="prov9"
										name="prov9"
										label="Prov. 9"
										className="w-[6.625rem]"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-3.5 rounded-lg bg-[#F6F7FA] px-3.5 py-[20.5px]">
							<div className="flex w-full flex-col gap-[18px]">
								<h2 className="font-roboto-condensed text-xl font-bold uppercase leading-6 text-neutral-500">
									Por un per&iacute;odo de tiempo
								</h2>
								<div className="flex w-full">
									<Radio
										id="temp"
										name="period"
										label="Temporal hasta"
										defaultValue="true"
									/>
									<Radio
										id="undefined"
										name="period"
										label="Indefinido"
									/>
								</div>
							</div>
							<input
								type="date"
								name="date"
								id="date"
								placeholder="DD/MM/AAAA*"
								className="block h-12 w-full max-w-[355px] rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<button
						type="button"
						aria-label="Enviar"
						title="Enviar"
						className="w-[321px] self-center rounded-xl bg-primary-900 px-8 py-3.5 font-roboto-condensed text-xl font-bold uppercase leading-[23px] text-primary-100 hover:bg-primary-600"
					>
						Enviar
					</button>
				</div>
			) : (
				<div className="flex w-full flex-col gap-8">
					<div className="flex flex-col gap-3.5">
						<div className="flex flex-col gap-[1.125rem] rounded-lg">
							<h2 className="h-14 py-4 font-roboto-condensed text-xl font-bold uppercase leading-6 text-black">
								Defina sus l&iacute;mites de dep&oacute;sito
							</h2>
							<div className="flex w-full flex-col items-center gap-3">
								<input
									type="number"
									name="minimum"
									id="minimum"
									placeholder="Monto m&iacute;nimo de dep&oacute;sito"
									className="block h-12 w-full max-w-[376px] rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								/>
								<input
									type="text"
									name="diary"
									id="diary"
									placeholder="Diario (De 00:00 hasta 24:00 hrs)"
									className="block h-12 w-full max-w-[376px] rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								/>
								<input
									type="text"
									name="weekly"
									id="weekly"
									placeholder="Semanal (De lunes a domingo)"
									className="block h-12 w-full max-w-[376px] rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								/>
								<input
									type="text"
									name="monthly"
									id="monthly"
									placeholder="Mensual (Del 1 al 30)"
									className="block h-12 w-full max-w-[376px] rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
					<button
						type="button"
						aria-label="Enviar"
						title="Enviar"
						className="w-[321px] self-center rounded-xl bg-[#E3A70C] px-8 py-2 font-roboto-condensed text-xl font-bold uppercase leading-[23px] text-primary-100 hover:bg-[#f6c119]"
					>
						Enviar
					</button>
				</div>
			)}
		</main>
	);
}
