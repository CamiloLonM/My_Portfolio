import * as yup from 'yup';
import { USER_GENDER } from '@/constants/userGender';
import { messages } from './messages';
import { customMessages } from '@/utils/yupCustomMessages';

export const schemaRegister = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(3, messages.firstNameMinLength)
    .max(20, messages.firstNameMaxLength)
    .required(customMessages.required)
    .onlyLettersLowerCase('First name'),
  surname: yup
    .string()
    .trim()
    .min(3, messages.surnameMinLength)
    .max(20, messages.surnameMaxLength)
    .required(customMessages.required)
    .onlyLettersLowerCase('Surname'),
  email: yup
    .string()
    .email(customMessages.invalidEmail)
    .required(customMessages.required),
  password: yup
    .string()
    .min(6, messages.passwordMinLength)
    .max(12, messages.passwordMaxLength)
    .required(customMessages.required),
  birthDate: yup.date().required(customMessages.required),
  gender: yup
    .string()
    .oneOf(Object.values(USER_GENDER))
    .required(customMessages.required),
});

export type RegisterFormUser = yup.InferType<typeof schemaRegister>;
