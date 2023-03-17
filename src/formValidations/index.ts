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
  .matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    'Must contain letters, numbers and specials characters '
  );

const text = yup
  .string()
  .default('')
  .required('Text is required')
  .min(10, 'post should be of minimum 10 words');

const title = yup
  .string()
  .default('')
  .required('Title is required')
  .min(6, 'title should be of minimum 6 words');

const minToRead = yup.number().default(1).required('Minutes to read is required');

const signUp = yup.object({
  name,
  email,
  password
});

const signIn = yup.object({
  email,
  password
});

const createPost = yup.object({
  text,
  title,
  minToRead
});

export const yupSchema = {
  signIn,
  signUp,
  createPost
};
