import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  mixed,
  string,
  number,
  boolean,
  bool,
  date,
  object,
  array,
  ref,
  lazy,
} from 'yup';

export const schemaLogin = yup.object({
  email: string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  password: string().required('La contraseña es requerida'),
});

export const schemaRegister = object({
  firstName: string().lowercase().trim(),
  lastName: string().lowercase().trim(),
  password: string().min(6).max(12),
  email: string().email(),
});
