import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonC = styled.button`
  width: 100%;
  max-width: 350px;
  height: 1.7rem;
  background-color: ${(props) => props.theme.button};
  border: 2px solid ${(props) => props.theme.button};
  color: ${(props) => props.theme.main};
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: aqua;
  }
  @media (max-width: 400px) {
    max-width: 250px;
  }
`;

export const InputC = styled.input`
  width: 100%;
  max-width: ${(props) => (props.$other ? "170px" : "350px")};
  height: 2rem;
  background: transparent;
  border: 1px solid
    ${(props) => {
      switch (true) {
        case props.$conditionGoodName ||
          props.$conditionGoodSurname ||
          props.$conditionCorrectEmail ||
          props.$conditionCorrectPassword:
          return "green";
        case props.$conditionBadName ||
          props.$conditionBadSurname ||
          props.$conditionIsNotCorrectEmail ||
          props.$conditionIsNotCorrectPassword:
          return "red";
        default:
          return props.theme.border;
      }
    }};
  &:focus {
    outline: 2px solid
      ${(props) => {
        switch (true) {
          case props.$conditionGoodName ||
            props.$conditionGoodSurname ||
            props.$conditionCorrectEmail ||
            props.$conditionCorrectPassword:
            return "green";
          case props.$conditionBadName ||
            props.$conditionBadSurname ||
            props.$conditionIsNotCorrectEmail ||
            props.$conditionIsNotCorrectPassword:
            return "red";
          default:
            return props.theme.border;
        }
      }};
  }
  color: ${(props) => props.theme.secondary};
  margin-top: 1rem;
  cursor: pointer;
  padding: 0.7rem;
  @media (max-width: 400px) {
    max-width: 250px;
  }
`;

export const Img = styled.img`
  width: 35px;
  margin: 1em;
  margin-bottom: 0.5em;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.button};
  font-size: 0.7rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    color: rgb(255, 0, 132);
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.span};
  font-size: 0.8rem;
  margin-top: 2rem;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 350px;
  @media (max-width: 400px) {
    max-width: 250px;
  }
`;

export const Sign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.secondary};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  @media (max-width: 400px) {
    max-width: 250px;
  }
`;

export const Legend = styled.legend`
  margin: 0 auto;
  font-size: 1.5em;
  text-align: center;
`;

export const DivI = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Checkbox = styled.div`
  margin-top: 1em;
  font-size: 13px;
  display: flex;
  gap: 0.5rem;
  line-height: 150%;
`;

export const InputB = styled.input`
  cursor: pointer;
`;

export const DivD = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: right;
  margin-top: 1rem;
  @media (max-width: 400px) {
    max-width: 250px;
  }
`;
