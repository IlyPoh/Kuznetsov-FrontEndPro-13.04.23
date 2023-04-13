import * as yup from 'yup';

import { emailRegExp } from '../helpers/data';

export const LoginSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegExp, 'Email is not valid'),
  phone: yup
    .number()
    .positive()
    .required('Phone is required')
    .test(
      'len',
      'Phone must be 12 digits',
      (val) => val.toString().length === 12
    ),
});
