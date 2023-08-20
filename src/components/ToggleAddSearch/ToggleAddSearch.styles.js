import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-right: 1rem;
  padding-right: 0.5rem;
  border-right: 1px solid #ccc;
`;
export const Button = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  color: ${({$isActive}) => $isActive ? "#000000" : "#5e5555"};
`;