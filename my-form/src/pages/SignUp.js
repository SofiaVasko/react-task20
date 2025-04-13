import { useEffect, useState } from "react";
import logo from "./assets/padlock.png";
import {
  ButtonC,
  InputC,
  Img,
  StyledLink,
  Span,
  Fieldset,
  Sign,
  Legend,
  DivI,
  Checkbox,
  InputB,
  DivD,
  Form,
} from "../style/components";
import { theme } from "../style/theme";

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    checkbox: false,
    isGoodName: false,
    isBadName: false,
    isGoodSurname: false,
    isBadSurname: false,
    isCorrectEmail: false,
    isNotCorrectEmail: false,
    isCorrectPassword: false,
    isNotCorrectPassword: false,
  });

  useEffect(() => {
    if (localStorage.getItem("RememberingSignUp")) {
      setState((prevState) => {
        return {
          ...prevState,
          ...JSON.parse(localStorage.getItem("RememberingSignUp")),
        };
      });
    }
  }, []);

  const regexp = /^[A-Za-z]+$/;

  const nameHandle = (e) => {
    const value = e.target.value;
    const conditionGoodName = value.length >= 3 && regexp.test(value);
    const conditionBadName =
      value !== "" && (value.length < 3 || !regexp.test(value));
    setState((prevState) => {
      return {
        ...prevState,
        name: value,
        isGoodName: conditionGoodName,
        isBadName: conditionBadName,
      };
    });
  };
  const surnameHandle = (e) => {
    const value = e.target.value;
    const conditionGoodSurname = value.length >= 3 && regexp.test(value);
    const conditionBadSurname =
      value !== "" && (value.length < 3 || !regexp.test(value));
    setState((prevState) => {
      return {
        ...prevState,
        surname: value,
        isGoodSurname: conditionGoodSurname,
        isBadSurname: conditionBadSurname,
      };
    });
  };

  const emailHandle = (e) => {
    const value = e.target.value;
    const regexpEmail = /^[A-Za-z0-9]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
    const conditionEmail = regexpEmail.test(value);
    const conditionEmailOpposite = value !== "" && !regexpEmail.test(value);
    setState((prevState) => {
      return {
        ...prevState,
        email: value,
        isCorrectEmail: conditionEmail,
        isNotCorrectEmail: conditionEmailOpposite,
      };
    });
  };
  const passwordHandle = (e) => {
    const value = e.target.value;
    const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{8,}$/;
    const isCorrect = regexpPassword.test(value);
    const isNotCorrect = value !== "" && !regexpPassword.test(value);
    setState((prevState) => {
      return {
        ...prevState,
        password: value,
        isCorrectPassword: isCorrect,
        isNotCorrectPassword: isNotCorrect,
      };
    });
  };

  const checboxHandle = (e) => {
    const isChecked = e.target.checked;
    setState((prevState) => {
      return {
        ...prevState,
        checkbox: isChecked,
      };
    });
  };

  useEffect(() => {
    if (state.checkbox) {
      localStorage.setItem("RememberingSignUp", JSON.stringify(state));
    } else {
      localStorage.removeItem("RememberingSignUp");
    }
  }, [state]);

  return (
    <Sign theme={theme}>
      <Img src={logo} alt="padlock" />
      <Form action="#" method="post" id="signUp" name="signUp">
        <Fieldset>
          <Legend>Sign up</Legend>
          <DivI>
            <InputC
              type="text"
              placeholder="First Name *"
              required
              name="fname"
              autoComplete="off"
              theme={theme}
              $other="true"
              onChange={nameHandle}
              value={state.name}
              $conditionGoodName={state.isGoodName}
              $conditionBadName={state.isBadName}
            />
            <InputC
              type="text"
              placeholder="Last Name *"
              required
              name="lname"
              autoComplete="off"
              theme={theme}
              $other="true"
              onChange={surnameHandle}
              value={state.surname}
              $conditionGoodSurname={state.isGoodSurname}
              $conditionBadSurname={state.isBadSurname}
            />
          </DivI>
          <InputC
            type="email"
            placeholder="Email Address *"
            required
            name="email"
            autoComplete="off"
            theme={theme}
            onChange={emailHandle}
            value={state.email}
            $conditionCorrectEmail={state.isCorrectEmail}
            $conditionIsNotCorrectEmail={state.isNotCorrectEmail}
          />
          <InputC
            type="password"
            placeholder="Password *"
            required
            name="password"
            autoComplete="off"
            theme={theme}
            onChange={passwordHandle}
            value={state.password}
            $conditionCorrectPassword={state.isCorrectPassword}
            $conditionIsNotCorrectPassword={state.isNotCorrectPassword}
          />
          <Checkbox>
            <InputB
              type="checkbox"
              id="following"
              name="following"
              onChange={checboxHandle}
              checked={state.checkbox}
            />
            <label htmlFor="following">
              I want to receive inspiration, marketing <br /> promotions and
              updates via email.
            </label>
          </Checkbox>
        </Fieldset>
        <ButtonC type="submit" theme={theme}>
          SIGN UP
        </ButtonC>
      </Form>
      <DivD>
        <StyledLink to="/signin" theme={theme} left="true">
          Already have an account? Sign in
        </StyledLink>
      </DivD>
      <Span theme={theme}>Copyright © Your Website 2025</Span>
    </Sign>
  );
};

export default SignUp;
