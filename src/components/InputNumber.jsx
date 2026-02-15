import React from 'react'

const InputNumber = ({label,marker,id,align,register,step}) => {
  return (
    <div>
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <div className={`label__container ${align ? align : ""}`}>
        <span className="label__marker">{marker}</span>
        <input type="number" className="label__input" id={id} step={step} {...register} />
      </div>
    </div>
  );
}

export default InputNumber
