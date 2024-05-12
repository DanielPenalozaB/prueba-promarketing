import { todayStartOfDay } from "@/constants";
import * as yup from "yup";

// This schema defines the validation rules for deposit form fields.
export const depositSchema = yup.object({
    minimumAmount: yup.number()
        .required('El monto mínimo de depósito es obligatorio')
        .positive('El monto mínimo debe ser un valor positivo')
        .min(5000, 'El monto mínimo debe ser mayor o igual a $5.000')
        // Enforces minimum digits to be 4 (e.g., 1000)
        .test({
            name: 'minimumAmount',
            message: 'El monto mínimo debe ser de mínimo 4 dígitos',
            test: (value) => value > 999

        })
        // Enforces maximum value to be less than 9 digits (e.g., 999999999)
        .test({
            name: 'maximumAmount',
            message: 'El monto máximo debe ser de mínimo 9 dígitos',
            test: (value) => value < 1000000000
        }),
    // These fields are optional but have conditional validations against each other
    // to ensure a hierarchy (monthly > weekly > daily)
    monthlyAmount: yup.number()
        .optional()
        .test({
            name: 'greaterThanweeklyAmount',
            message: 'El monto mensual debe ser mayor al monto semanal',
            test: (value, ctx) => {
                const monthlyAmount: number = value || 0;
                const weeklyAmount: number = ctx.parent.weeklyAmount || 0;

                if (monthlyAmount > weeklyAmount) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .test({
            name: 'greaterThandailyAmount',
            message: 'El monto mensual debe ser mayor al monto diario',
            test: (value, ctx) => {
                const monthlyAmount: number = value || 0;
                const dailyAmount: number = ctx.parent.dailyAmount || 0;

                if (monthlyAmount > dailyAmount) {
                    return true;
                } else {
                    return false;
                }
            }
        }),
    weeklyAmount: yup.number()
        .optional()
        .test({
            name: 'greaterThandailyAmount',
            message: 'El monto semanal debe ser mayor al monto diario',
            test: (value, ctx) => {
                const weeklyAmount: number = value || 0;
                const dailyAmount: number = ctx.parent.dailyAmount || 0;

                if (weeklyAmount > dailyAmount) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .test({
            name: 'lesserThanmonthlyAmount',
            message: 'El monto semanal debe ser menor al monto mensual',
            test: (value, ctx) => {
                const weeklyAmount: number = value || 0;
                const monthlyAmount: number = ctx.parent.monthlyAmount || 0;

                if (weeklyAmount < monthlyAmount) {
                    return true;
                } else {
                    return false;
                }
            }
        }),
    dailyAmount: yup.number()
        .optional()
        .test({
            name: 'lessThanweeklyAmount',
            message: 'El monto diario debe ser menor al monto semanal',
            test: (value, ctx) => {
                const dailyAmount: number = value || 0;
                const weeklyAmount: number = ctx.parent.weeklyAmount || 0;

                if (dailyAmount < weeklyAmount) {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .test({
            name: 'lessThanmonthlyAmount',
            message: 'El monto diario debe ser menor al monto mensual',
            test: (value, ctx) => {
                const dailyAmount: number = value || 0;
                const monthlyAmount: number = ctx.parent.monthlyAmount || 0;

                if (dailyAmount < monthlyAmount) {
                    return true;
                } else {
                    return false;
                }
            }
        }),
    startDate: yup.date()
        .required('La fecha de inicio es obligatoria')
        .min(todayStartOfDay, 'La fecha de inicio debe ser igual o mayor a la fecha actual')
        // Add validation to exclude weekends (assuming Sunday=0, Saturday=6)
        .test('noWeekends', 'No se permiten sábados o domingos', (value) => {
            const day = new Date(value).getDay();
            // Weekend days are Sunday (0) and Saturday (6)
            return day !== 0 && day !== 6;
        }),
    reason: yup.string()
        .required('El motivo de la autoexclusión es obligatorio')
        .min(8, 'El motivo debe tener al menos 8 caracteres')
        .max(255, 'El motivo debe tener un máximo de 255 caracteres')
        .matches(/^[a-zA-ZñÑ0-9\,.\:\s\áéíóúÁÉÍÓÚ]+$/, 'Solo se permiten caracteres especiales: ", ."'),
});
