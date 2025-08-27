import * as yup from 'yup';
import { customMessages } from '@/utils/yupCustomMessages';

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email(customMessages.invalidEmail)
    .required(customMessages.required),
  password: yup.string().required(customMessages.required),
});
