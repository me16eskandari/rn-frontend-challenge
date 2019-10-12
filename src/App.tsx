import React, { useState } from "react";

import { FirstStep, ThirdStep } from "./components";
import { SecondStep } from "./components/secondStep";
import { User } from "./models";
import Services from "./services";
import validations from "./validations";


const App: React.FC = () => {

  const [step, setStep] = useState<number>(1);
  const [model, setModel] = useState<User>(new User());
  const [errors, setErrors] = useState<User>(new User());
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validate = (m: any): boolean => {
    let e: any = {};
    let he = false;

    for (let key in m) {
      let [message, hasError] = validations.requied(m[key], `${key} is required`);
      he = hasError || he;
      e[key] = message;

      if (!hasError) {
        if (key === "age") {
          let [message, hasError] = validations.numeric(m[key], `${key} must be a number`);
          he = hasError || he;
          e[key] = message;

        }
        else if (key === "email") {
          let [message, hasError] = validations.email(m[key], `${key} must be an email`);
          he = hasError || he;
          e[key] = message;

        }
      }
    }
    setErrorState(e);
    return !he;
  };

  const setState = (m: any) => {
    setModel({ ...model, ...m });
    validate(m);
  };

  const setErrorState = (m: any) => {
    setErrors({ ...errors, ...m });
  };

  const nextStep = () => {
    let step1Model = { name: model.name, age: model.age };
    if (validate(step1Model)) setStep(step + 1)
  };

  const prevStep = () => setStep(step - 1);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      [event.target.name]: event.target.value
    })
  };

  const submit = async () => {
    if (validate(model)) {
      setSubmitting(true);
      try {
        let resposne = await Services.createUser(model);
        console.log(resposne);
        nextStep();
      }
      catch (ex) {
        alert("Error");
        console.log(ex);
      }
      finally {
        setSubmitting(false)
      }
    }
  }

  return (
    <>
      {
        step === 1 &&
        <FirstStep
          age={model.age} ageError={errors.age}
          name={model.name} nameError={errors.name}
          nextStep={nextStep} onChange={onChange}
        />
      }
      {
        step === 2 &&
        <SecondStep
          email={model.email} emailError={errors.email}
          newsletter={model.newsletter} submitting={submitting}
          prevStep={prevStep} onChange={onChange}
          submit={submit}
        />
      }
      {
        step === 3 &&
        <ThirdStep />
      }
    </>
  );
}

export default App;
