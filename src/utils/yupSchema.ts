import * as yup from 'yup';

const email = yup.string().default('').email('Email is invalid').required('Email is required');

const name = yup
  .string()
  .default('')
  .required('Name is required')
  .matches(/^[a-zA-z]{3,20} *[a-zA-z]{3,20}/, 'Full name required');

const password = yup
  .string()
  .default('')
  .required('Password is required')
  .min(8, 'Password is too short')
  .matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Must contain letters, numbers and specials characters ');

const signUp = yup.object({
  name: name,
  email: email,
  password: password,
});

const signIn = yup.object({
  email: email,
  password: password,
});

const yupSchema = {
  signUp,
  signIn,
};

export default yupSchema;
