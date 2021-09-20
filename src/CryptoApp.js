import React from "react"
import Styles from './Styles/CryptoApp.css';
import LoanCalculator from './components/CryptoComponents/LoanCalculator';

function CryptoApp() {
  return (
      <div className="cryptoApp">
        <LoanCalculator />
      </div>
  );
}

export default CryptoApp;