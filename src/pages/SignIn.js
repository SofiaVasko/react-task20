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
  Nav,
  Legend,
  Checkbox,
  InputB,
  Form,
} from "../style/components";
import { theme } from "../style/theme";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    checkbox: false,
    isCorrectEmail: false,
    isNotCorrectEmail: false,
    isCorrectPassword: false,
    isNotCorrectPassword: false,
  });

  useEffect(() => {
    if (localStorage.getItem("Remembering")) {
      setState((prevState) => {
        return {
          ...prevState,
          ...JSON.parse(localStorage.getItem("Remembering")),
        };
      });
    }
  }, []);

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
      localStorage.setItem("Remembering", JSON.stringify(state));
    } else {
      localStorage.removeItem("Remembering");
    }
  }, [state]);

  return (
    <Sign theme={theme}>
      <Img src={logo} alt="padlock" />
      <Form action="#" method="post" id="signIn" name="signIn">
        <Fieldset>
          <Legend>Sign in</Legend>
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
            <label htmlFor="following">Remember me</label>
          </Checkbox>
        </Fieldset>
        <ButtonC type="submit" theme={theme}>
          SIGN IN
        </ButtonC>
      </Form>
      <Nav>
        <StyledLink to="*" theme={theme}>
          Forgot password?
        </StyledLink>
        <StyledLink to="/signup" theme={theme}>
          Don't have an account? Sign Up
        </StyledLink>
      </Nav>
      <Span theme={theme}>Copyright © Your Website 2025</Span>
    </Sign>
  );
};

export default SignIn;
