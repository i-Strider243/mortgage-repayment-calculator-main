import React from 'react'
import CalcIcon from '../assets/images/icon-calculator.svg'

const Button = ({text = "Calculate Repayments", className, onClick}) => {  
  return (
    <button className={className} onClick={onClick}>
      {className !== "linky" ? <img src={CalcIcon} alt="" /> : "" }
      <p>{text}</p>
    </button>
  )
}

export default Button
