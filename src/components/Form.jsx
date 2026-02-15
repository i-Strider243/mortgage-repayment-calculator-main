import InputNumber from './InputNumber';
import InputRadio from './InputRadio';
import Button from './Button';
import { useForm } from "react-hook-form"
import { useGlobalContext } from '../context';

const Form = () => {
  const { setFormData, calcMortgage, resetFormData } = useGlobalContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setFormData(data);
    calcMortgage(data.mortgageAmount, data.interestRate / 100, data.mortgageTerm);
  }


  return (
    <div className="form">
      <div className="form__header">
        <h2>Mortgage Calculator</h2>
        <Button className="linky" text={"Clear All"} onClick={() => {
          reset()
          resetFormData()
        }} />
      </div>
      <form
        action=""
        className="form__container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputNumber
          label={"Mortgage Amount"}
          marker={"£"}
          register={register("mortgageAmount", { required: true })}
        />
        {errors.mortgageAmount && <span className='error'>This field is required</span>}

        <div className="inc">
          <div>
            <InputNumber
              label={"Mortgage Term"}
              marker={"years"}
              align={"align-right"}
              register={register("mortgageTerm", { required: true })}
            />
            {errors.mortgageTerm && <span className='error'>This field is required</span>}
          </div>

          <div>
            <InputNumber
              label={"Interest Rate"}
              marker={"%"}
              align={"align-right"}
              step="0.01"
              register={register("interestRate", { required: true })}
            />
            {errors.interestRate && <span className='error'>This field is required</span>}
          </div>
        </div>

        <InputRadio label={"Mortgage Type"} register={register("mortgageType", { required: true })} />

        <Button type="submit" className={"calc__btn"} />
      </form>
    </div>
  );
}

export default Form
