import React from 'react';
import { TaxesForm } from '@forms/container/taxes';
import { ResultCard, Spinner } from '@components/index';
import { useTypedSelector } from '@utils/useTypedSelector';
import { taxesService } from '@services/taxesService';

const Home: React.FC = () => {
  const { income, currentBracket, year, result } = useTypedSelector((state) => state.app);
  const { isFetching, isLoading } = taxesService.useGetTaxesBracketsQuery(year);

  const renderResultCard = result && currentBracket && !isFetching && (
    <div className="col-md-6">
      <ResultCard income={income} year={year} result={result} tax={currentBracket.rate * 100} />
    </div>
  );

  const renderTaxesForm = isLoading ? (
    <div data-testid="taxes-form-spinner">
      <Spinner />
    </div>
  ) : (
    <div className="mb-5">
      <TaxesForm />
    </div>
  );

  const renderResultSpinner = isFetching && !isLoading && (
    <div data-testid="result-spinner" className="col-md-6 d-flex align-items-center justify-content-center">
      <Spinner />
    </div>
  );

  return (
    <div className="vh-100 d-flex align-items-center" data-testid="home-page">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">{renderTaxesForm}</div>

          {renderResultCard}
          {renderResultSpinner}
        </div>
      </div>
    </div>
  );
};

export default Home;
