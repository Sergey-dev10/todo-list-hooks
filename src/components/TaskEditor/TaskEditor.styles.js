import styled from "styled-components";

export const TaskEditorWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 95%;
`;
export const Button = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  width: 60%;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  height: 1.8rem;
  border: 1px solid #cccccc;
  word-wrap: break-word;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
`;

export const ButtonsWrapper = styled.div`
    margin-left: auto;
`;