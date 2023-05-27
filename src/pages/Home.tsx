import React from 'react';
import { TaxesForm } from '@forms/container/taxes';

const Home: React.FC = () => {
  return (
    <div className="vh-100 d-flex justify-content-center">
      <TaxesForm />
    </div>
  );
};

export default Home;
