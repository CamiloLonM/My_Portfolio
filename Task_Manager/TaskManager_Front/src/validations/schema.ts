import * as yup from 'yup';
import { messages } from '@/validations/validationMessages';

export const schemaLogin = yup.object({
  email: yup.string().email(messages.invalidEmail).required(messages.required),
  password: yup.string().required(messages.required),
});

export const schemaRegister = yup.object({
  firstName: yup.string().required(messages.required).trim(),
  surname: yup.string().required(messages.required).trim(),
  email: yup.string().email(messages.invalidEmail).required(messages.required),
  password: yup
    .string()
    .min(6, messages.passwordMinLength)
    .max(12, messages.passwordMaxLength)
    .required(messages.required),
  birthDate: yup
    .date()
    .nullable()
    .defined()
    .required(messages.required)
    .min(new Date(1900, 0, 1)),
  gender: yup
    .mixed<'male' | 'female' | 'other'>()
    .oneOf(['male', 'female', 'other'])
    .required(messages.required),
});
