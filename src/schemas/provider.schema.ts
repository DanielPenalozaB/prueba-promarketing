import * as yup from "yup";

const todayStartOfDay = new Date();
todayStartOfDay.setHours(0, 0, 0, 0);


export const providerSchema = yup.object({
    providers: yup.mixed()
        .required('La selección de al menos un proveedor es obligatoria')
        .test('at-least-one-provider', 'La selección de al menos un proveedor es obligatoria', (value) =>
            Array.isArray(value) && value.length > 0
        ),
    timePeriod: yup.string()
        .required('La selección de un período de tiempo es obligatoria')
        .oneOf(['temporary', 'indefinite'], 'Seleccionar una opción válida'),
    endDate: yup.date()
        .when('timePeriod', {
            is: 'temporary',
            then: (schema) => schema.required('La fecha de fin es obligatoria'),
            otherwise: (schema) => schema.nullable(),
        })
        .min(todayStartOfDay, 'La fecha fin debe ser igual o posterior a la fecha actual'),
    reason: yup.string()
        .required('El motivo de la autoexclusión es obligatorio')
        .min(8, 'El motivo debe tener al menos 8 caracteres')
        .max(255, 'El motivo debe tener un máximo de 255 caracteres')
        .matches(/^[a-zA-ZñÑ0-9\,.\:\s\áéíóúÁÉÍÓÚ]+$/, 'Solo se permiten caracteres especiales: ", ."'),
});
