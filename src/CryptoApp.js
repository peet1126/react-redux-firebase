import React from "react"
import './Styles/CryptoApp.css';
import LoanCalculator from './components/CryptoComponents/LoanCalculator';

function CryptoApp() {
  return (
    <div className="crypto-app">
      <LoanCalculator />
    </div>
  );
}

export default CryptoApp;