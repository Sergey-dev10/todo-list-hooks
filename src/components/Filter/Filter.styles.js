import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.button`
  margin: 3px;
  padding: 4px 8px;
  background: none;
  border: ${({$isSelected}) =>  $isSelected ? "1px solid rgb(175 47 39 / 10%)": "none"};
  border-radius: ${({$isSelected}) => $isSelected ? "3px": "none"};
`;