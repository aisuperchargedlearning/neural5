import React from 'react';
import { OrderForm } from './components/OrderForm';

function App() {
  return (
    <div className="min-h-screen bg-blue-900 py-12 px-4 sm:px-6 lg:px-8 safe-padding">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Contractor Logistics Fast Delivery
        </h1>
        <div className="bg-white shadow rounded-lg p-6">
          <OrderForm />
        </div>
      </div>
    </div>
  );
}

export default App;