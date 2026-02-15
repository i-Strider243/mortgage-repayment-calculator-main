import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [formData, setFormData] = useState({
    "mortgageAmount": 0,
    "mortgageTerm": 0,
    "interestRate": 0,
    "mortgateType": ""
  })
  const [isResult, setIsResult] = useState(false);

  const calculateMonthlyPayment = (principal, annualRate, years) => {
    // Convert annual interest rate to monthly
    const monthlyRate = annualRate / 12;

    // Total number of monthly payments
    const totalPayments = years * 12;

    // Amortization formula:
    // M = P * [ r(1+r)^n ] / [ (1+r)^n - 1 ]
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
    const denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;

    const monthlyPayment = principal * (numerator / denominator);

    // Total payment over the loan term
    const totalPayment = monthlyPayment * totalPayments; 
    // Total interest paid
    const totalInterest = totalPayment - principal;

    if (monthlyPayment &&
      totalPayment &&
      totalInterest) {
        setIsResult(true)
      }

    return {
      monthlyPayment,
      totalPayment,
      totalInterest
    }
  }

  const calcMortgage = (principal, annualRate, years) => {
    const result = calculateMonthlyPayment(principal, annualRate, years);
    setFormData(prev => ({
      ...prev,
      monthlyPayment: result.monthlyPayment,
      totalPayment: result.totalPayment,
      totalInterest: result.totalInterest
    }));
    setIsResult(true);
  }

  const resetFormData = () => {
    setFormData({
      mortgageAmount: 0,
      mortgageTerm: 0,
      interestRate: 0,
      mortgageType: "",
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0
    });
    setIsResult(false);
  }

  return (
    <AppContext.Provider value={{formData, setFormData, calcMortgage, resetFormData, isResult, setIsResult}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}