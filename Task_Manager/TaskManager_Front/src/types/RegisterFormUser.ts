import * as yup from 'yup';
import { schemaRegister } from '@/validations/Register/schemaRegister';

export type RegisterFormUser = yup.InferType<typeof schemaRegister>;
