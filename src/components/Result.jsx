import empty from "../assets/images/illustration-empty.svg";
import { useGlobalContext } from '../context';

const Result = () => {
  const {formData, isResult} = useGlobalContext();

  if (isResult && formData.monthlyPayment > 0) {
    return (
      <div className='results completed'>
        <div className='results__info'>
          <h3>Your results</h3>
          <p>
            Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
          </p>
        </div>
        <div className='results__summary'>
          <p>Your monthly repayments</p>
          <span>£{formData.monthlyPayment.toFixed(2)}</span>
          <hr />
          <p>Total you'll repay over the term</p>
          <span>£{formData.totalPayment.toFixed(2)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className='results empty'>
      <div>
        <img src={empty} alt="" />  
      </div>
      <div className='results__info'>
        <h3>Results shown here</h3>
        <p>
          Complete the form and click “calculate repayments” to see what your monthly repayments would be.
        </p>
      </div>
    </div>
  );
}

export default Result
