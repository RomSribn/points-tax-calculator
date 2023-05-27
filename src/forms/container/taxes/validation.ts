import * as yup from 'yup';

export const formSchema = yup.object().shape({
  income: yup.number().typeError('You must specify a number').required('Income is required'),
  year: yup
    .number()
    .typeError('You must specify a number')
    .oneOf([2019, 2020, 2021, 2022], 'Only 2019, 2020, 2021, 2022 years are accessable')
    .required('Year is required')
});
