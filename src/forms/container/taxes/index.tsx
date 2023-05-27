import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taxesService } from 'src/services/taxesService';
import { FormInput } from '@forms/controls';
import { setYear } from '@redux/slices';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@utils/useTypedSelector';
import { TYear } from '@utils/interfaces';
import { ErrorMessage } from '@forms/_elements/ErrorMessage';

import { formSchema } from './validation';

type TaxesFormFields = {
  income: number;
  year: TYear;
};

const TaxesForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TaxesFormFields>({ resolver: yupResolver(formSchema) });
  const { year } = useTypedSelector((state) => state.app);
  const { isLoading, isError, refetch } = taxesService.useGetTaxesBracketsQuery(year);
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(async (data) => {
    dispatch(setYear(data.year));

    if (isError) {
      refetch();
    }
  });

  return (
    <div className="form-access my-auto">
      <form onSubmit={onSubmit}>
        <span>Tax calculate</span>

        <FormInput<TaxesFormFields>
          id="income"
          type="text"
          name="income"
          label="income"
          placeholder="Type your income - $"
          register={register}
          errors={errors}
        />
        <FormInput<TaxesFormFields>
          id="year"
          type="text"
          name="year"
          label="year"
          placeholder="Type your tax year"
          register={register}
          errors={errors}
        />

        <button type="submit" className="btn btn-primary">
          {isLoading ? '...' : 'Calculate'}
        </button>
        {isError && (
          <ErrorMessage className="mt-5 text-center text-danger">Something went wrong, please try again</ErrorMessage>
        )}
      </form>
    </div>
  );
};

export { TaxesForm };
