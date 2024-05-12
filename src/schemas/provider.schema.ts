import { todayStartOfDay } from "@/constants";
import * as yup from "yup";

// This schema defines the validation rules for self-exclusion form fields.
export const providerSchema = yup.object({
    providers: yup.mixed()
        .required('La selección de al menos un proveedor es obligatoria')
        // Ensures the value is an array and contains at least one item
        .test('at-least-one-provider', 'La selección de al menos un proveedor es obligatoria', (value) =>
            Array.isArray(value) && value.length > 0
        ),
    timePeriod: yup.string()
        .required('La selección de un período de tiempo es obligatoria')
        // Validates against allowed values ('temporary' or 'indefinite')
        .oneOf(['temporary', 'indefinite'], 'Seleccionar una opción válida'),
    endDate: yup.date()
        .when('timePeriod', {
            is: 'temporary',
            then: (schema) => schema.required('La fecha de fin es obligatoria'),
            otherwise: (schema) => schema.nullable(),
        })
        // Validates minimum date to be today or later
        .min(todayStartOfDay, 'La fecha fin debe ser igual o posterior a la fecha actual'),
    reason: yup.string()
        .required('El motivo de la autoexclusión es obligatorio')
        // Enforces minimum length of 8 characters
        .min(8, 'El motivo debe tener al menos 8 caracteres')
        // Enforces maximum length of 255 characters
        .max(255, 'El motivo debe tener un máximo de 255 caracteres')
        // Validates against allowed characters (letters, numbers, punctuation, spaces, accents)
        .matches(/^[a-zA-ZñÑ0-9\,.\:\s\áéíóúÁÉÍÓÚ]+$/, 'Solo se permiten caracteres especiales: ", ."'),
});
