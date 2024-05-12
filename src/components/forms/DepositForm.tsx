"use client";

import { todayStartOfDay } from "@/constants";
import { depositSchema } from "@/schemas";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import CurrencyInput from "../ui/CurrencyInput";
import { postDeposit } from "@/services";
import Input from "../ui/Input";
import Button from "../ui/Button";

export interface FormValuesInterface {
	dailyAmount: string | number;
	weeklyAmount: string | number;
	monthlyAmount: string | number;
	minimumAmount: string | number;
}

export default function DepositForm() {
	const onSubmit = async (values: FormValuesInterface) => {
		if (
			!isNaN(Number(values.dailyAmount)) &&
			!isNaN(Number(values.weeklyAmount)) &&
			!isNaN(Number(values.monthlyAmount)) &&
			!isNaN(Number(values.minimumAmount))
		) {
			const response = await postDeposit({
				dailyAmount: Number(values.dailyAmount),
				weeklyAmount: Number(values.weeklyAmount),
				monthlyAmount: Number(values.monthlyAmount),
				minimumAmount: Number(values.minimumAmount),
			});

			if (typeof response === "object") {
				toast.success(
					`Se ha creado el límite de depósito con el id ${response.id}`
				);

				resetForm();
			} else {
				toast.error("Ocurrió un error al crear el límite de depósito");
			}
		} else {
			toast.error("Los valores ingresados no son correctos");
		}
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
	} = useFormik({
		initialValues: {
			minimumAmount: "",
			monthlyAmount: "",
			weeklyAmount: "",
			dailyAmount: "",
			startDate: "",
			reason: "",
		},
		initialErrors: {
			minimumAmount: "",
			monthlyAmount: "",
			weeklyAmount: "",
			dailyAmount: "",
			startDate: "",
			reason: "",
		},
		validationSchema: depositSchema,
		onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
			<div className="flex flex-col gap-3.5">
				<div className="flex flex-col gap-[1.125rem] rounded-lg">
					<h2 className="h-14 py-4 font-roboto-condensed text-xl font-bold uppercase leading-6 text-black">
						Defina sus l&iacute;mites de dep&oacute;sito
					</h2>
					<div className="flex w-full max-w-[376px] flex-col gap-3 self-center">
						<div className="flex w-full flex-col gap-1.5">
							<CurrencyInput
								onChange={(value) => {
									const input = {
										target: {
											id: "minimumAmount",
											name: "minimumAmount",
											value: value,
										},
									};

									handleChange(input);
								}}
								name="minimumAmount"
								id="minimumAmount"
								placeholder="Monto m&iacute;nimo de dep&oacute;sito"
								className="block h-12 w-full rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								value={Number(values.minimumAmount) ?? null}
								onBlur={() => {
									handleBlur({
										target: {
											id: "minimumAmount",
											name: "minimumAmount",
										},
									});
								}}
							/>
							{errors.minimumAmount && touched.minimumAmount && (
								<p className="text-sm text-red-500">
									{errors.minimumAmount}
								</p>
							)}
						</div>
						<div className="flex w-full flex-col gap-1.5">
							<Input
								type="number"
								name="dailyAmount"
								id="dailyAmount"
								placeholder="Diario (De 00:00 hasta 24:00 hrs)"
								className="block h-12 w-full rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								value={values.dailyAmount}
								onChange={handleChange}
								onBlur={handleBlur}
								onScroll={handleBlur}
							/>
							{errors.dailyAmount && touched.dailyAmount && (
								<p className="text-sm text-red-500">
									{errors.dailyAmount}
								</p>
							)}
						</div>
						<div className="flex w-full flex-col gap-1.5">
							<Input
								type="number"
								name="weeklyAmount"
								id="weeklyAmount"
								placeholder="Semanal (De lunes a domingo)"
								className="block h-12 w-full rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								value={values.weeklyAmount}
								onChange={handleChange}
								onBlur={handleBlur}
								onScroll={handleBlur}
							/>
							{errors.weeklyAmount && touched.weeklyAmount && (
								<p className="text-sm text-red-500">
									{errors.weeklyAmount}
								</p>
							)}
						</div>
						<div className="flex w-full flex-col gap-1.5">
							<Input
								type="number"
								name="monthlyAmount"
								id="monthlyAmount"
								placeholder="Mensual (Del 1 al 30)"
								className="block h-12 w-full rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								value={values.monthlyAmount}
								onChange={handleChange}
								onBlur={handleBlur}
								onScroll={handleBlur}
							/>
							{errors.monthlyAmount && touched.monthlyAmount && (
								<p className="text-sm text-red-500">
									{errors.monthlyAmount}
								</p>
							)}
						</div>
						<div className="flex w-full flex-col gap-1.5">
							<Input
								type="date"
								name="startDate"
								id="startDate"
								placeholder="DD/MM/AAAA*"
								className="block h-12 w-full rounded-xl border border-secondary-500 px-3 py-3.5 text-xs text-gray-900 shadow-sm outline-none placeholder:text-neutral-200 focus:border-accent-900 sm:text-sm sm:leading-6"
								value={values.startDate}
								onChange={handleChange}
								onBlur={handleBlur}
								min={
									todayStartOfDay.toISOString().split("T")[0]
								}
							/>
							{errors.startDate && touched.startDate && (
								<p className="text-sm text-red-500">
									{errors.startDate}
								</p>
							)}
						</div>
						<div className="flex w-full flex-col gap-1.5">
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
			</div>
			<Button
				type="button"
				aria-label="Guardar"
				title="Guardar"
				className="w-[321px] self-center rounded-xl bg-[#E3A70C] px-8 py-2 font-roboto-condensed text-xl font-bold uppercase leading-[23px] text-primary-100 hover:bg-[#f6c119] disabled:bg-neutral-200"
				onClick={() => submitForm()}
				disabled={!isValid}
				label="Guardar"
				color="accent"
			/>
		</form>
	);
}
