import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`;
export const InputWrapper = styled.input`
  width: 80%;
  padding: 0.2rem 0.7rem;
  height: 1.8rem;
  border: 1px solid #cccc;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }
`;