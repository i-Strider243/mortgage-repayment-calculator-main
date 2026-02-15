import React from 'react'

const InputRadio = ({label, register}) => {
  return (
    <>
      <label className="form__label">{label}</label>

      <label htmlFor="repayment" className="label__container radio">
        <input
          type="radio"
          id="repayment"
          value="Repay"
          className="label__input"
          {...register}
        />
        Repayment
      </label>

      <label htmlFor="interest-only" className="label__container radio">
        <input
          type="radio"
          id="interest-only"
          value="Interest"
          className="label__input"
          {...register}
        />
        Interest Only
      </label>
    </>
  );
}

export default InputRadio
