"use client";

import { ProviderInterface } from "@/interfaces";
import { getProviders } from "@/services";
import { useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import Checkbox from "../ui/Checkbox";
import Radio from "../ui/Radio";
import { providerSchema } from "@/schemas";
import toast from "react-hot-toast";

const TOAST_ID = "provider-form";

export default function ProviderForm() {
	const [availableProviders, setAvailableProviders] = useState<
		ProviderInterface[]
	>([]);

	useEffect(() => {
		const fetchProviders = async () => {
			const data = await getProviders();

			if (Array.isArray(data)) {
				setAvailableProviders(data);
			} else {
				toast(
					(t) => (
						<div className="flex gap-2">
							<span>
								Hubo un error al cargar los proveedores.
							</span>
							<button
								type="button"
								title="Cerrar"
								className="rounded-lg bg-primary-200 px-2 py-1 text-primary-900"
								onClick={() => toast.dismiss(t.id)}
							>
								Cerrar
							</button>
						</div>
					),
					{ id: TOAST_ID }
				);
			}
		};

		fetchProviders();
	}, []);

	const onSubmit = (values: any) => {
		console.log(values);

		if (isValid) {
			toast.success("Se envió correctamente el formulario");
		} else {
			toast.error("Hubo un error al enviar el formulario");
		}

		resetForm();
	};

	const {
		handleSubmit,
		errors,
		touched,
		values,
		handleBlur,
		handleChange,
		resetForm,
		isValid,
		submitForm,
		setFieldValue,
	} = useFormik({
		initialValues: {
			providers: [],
			timePeriod: "",
			endDate: "",
			reason: "",
		},
		initialErrors: {
			providers: [],
			timePeriod: "",
			endDate: "",
			reason: "",
		},
		validationSchema: providerSchema,
		onSubmit,
	});

	const handleSelectAllChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.currentTarget.blur();

		if (values.providers.length < availableProviders.length) {
			const PROVIDERS = availableProviders.map((p) => p.id.toString());

			setFieldValue("providers", PROVIDERS);
		} else {
			setFieldValue("providers", []);
		}
	};

	const isCheckboxSelected = (id: string) => {
		const PROVIDERS: string[] = values.providers;

		if (PROVIDERS && Array.isArray(PROVIDERS) && PROVIDERS.includes(id)) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
			<div className="flex flex-col gap-3.5">
				<div className="flex flex-col gap-[1.125rem] rounded-lg bg-[#F6F7FA] px-3.5 pb-3 pt-2">
					<h2 className="font-roboto-condensed text-xl font-bold uppercase leading-6 text-neutral-500">
						Autoexlusi&oacute;n proveedores
					</h2>
					<div className="flex w-full flex-col gap-[7px]">
						<div className="border-b-[0.2px] border-neutral-200">
							{availableProviders.length > 0 && (
								<Checkbox
									id="all"
									name="all"
									label="Todos"
									value="all"
									checked={
										values.providers.length ===
										availableProviders.length
									}
									onBlur={() => {
										const input = {
											target: {
												id: "providers",
												name: "providers",
											},
										};

										handleBlur(input);
									}}
									onChange={handleSelectAllChange}
								/>
							)}
						</div>
						<div className="flex w-full flex-wrap gap-y-[7px]">
							{availableProviders.map((provider) => (
								<Checkbox
									key={provider.id}
									id={provider.id.toString()}
									name={"providers"}
									label={provider.name ?? provider.Name ?? ""}
									value={provider.id.toString()}
									checked={isCheckboxSelected(
										provider.id.toString()
									)}
									onChange={(e) => {
										handleChange(e);

										setTimeout(() => {
											e.target.blur();
										}, 10);
									}}
									onBlur={handleBlur}
								/>
							))}
						</div>
						{errors.providers && touched.providers && (
							<p className="text-sm text-red-500">
								{errors.providers}
							</p>
						)}
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
								name="timePeriod"
								label="Temporal hasta"
								value="temporary"
								defaultChecked={false}
								checked={
									values.timePeriod === "temporary"
										? true
										: false
								}
								onChange={(e) => {
									handleChange(e);

									const input = {
										target: {
											id: "endDate",
											name: "endDate",
										},
									};

									setTimeout(() => {
										handleBlur(input);
									}, 10);
								}}
								onBlur={handleBlur}
							/>
							<Radio
								id="undefined"
								name="timePeriod"
								label="Indefinido"
								value="indefinite"
								defaultChecked={false}
								checked={
									values.timePeriod === "indefinite"
										? true
										: false
								}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						{errors.timePeriod && touched.timePeriod && (
							<p className="text-sm text-red-500">
								{errors.timePeriod}
							</p>
						)}
					</div>
					{values.timePeriod === "temporary" && (
						<>
							<input
								type="date"
								name="endDate"
								id="endDate"
								placeholder="DD/MM/AAAA*"
								className="block h-12 w-full max-w-[355px] rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								value={values.endDate}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.endDate && touched.endDate && (
								<p className="text-sm text-red-500">
									{errors.endDate}
								</p>
							)}
						</>
					)}
				</div>
				<div className="flex flex-col gap-3.5 rounded-lg bg-[#F6F7FA] px-3.5 py-[20.5px]">
					<div className="flex w-full flex-col gap-[18px]">
						<h2 className="font-roboto-condensed text-xl font-bold uppercase leading-6 text-neutral-500">
							Motivo
						</h2>
						<textarea
							name="reason"
							id="reason"
							placeholder="Motivo de la autoexclusi&oacute;n*"
							className="block h-12 min-h-24 w-full rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
							value={values.reason}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.reason && touched.reason && (
							<p className="text-sm text-red-500">
								{errors.reason}
							</p>
						)}
					</div>
				</div>
			</div>
			<button
				type="button"
				aria-label="Enviar"
				title="Enviar"
				className="w-[321px] self-center rounded-xl bg-primary-900 px-8 py-3.5 font-roboto-condensed text-xl font-bold uppercase leading-[23px] text-primary-100 hover:bg-primary-600 disabled:bg-neutral-200"
				onClick={() => submitForm()}
				disabled={!isValid}
			>
				Enviar
			</button>
		</form>
	);
}
