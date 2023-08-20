import styled from "styled-components";


export const TaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  padding-top: 0.5rem;
`;
export const Title = styled.p`
  width: 15rem;
  margin-left: 0.5rem;
  word-wrap: break-word;
  text-decoration: ${({$isCompleted}) => $isCompleted ? "line-through" : "none"};
`;
export const Button = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
`;
export const ButtonsWrapper = styled.div`
    margin-left: auto;
`;