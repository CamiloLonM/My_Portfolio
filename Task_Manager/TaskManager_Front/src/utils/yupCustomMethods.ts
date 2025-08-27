import * as yup from 'yup';

yup.addMethod<yup.StringSchema>(
  yup.string,
  'onlyLettersLowerCase',
  function (fieldName: string) {
    return this.matches(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      `${fieldName} must contain only letters`
    ).transform((value) => value?.toLowerCase().trim());
  }
);

declare module 'yup' {
  interface StringSchema {
    onlyLettersLowerCase(fieldName: string): StringSchema;
  }
}
