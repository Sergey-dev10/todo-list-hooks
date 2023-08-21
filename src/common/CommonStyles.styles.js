import styled, { createGlobalStyle } from 'styled-components'

export const CommonStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
      margin: 0;
      padding: 0;
      background-color: #eeeeee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      color: #5e5555;
  }
`;

export const Btn = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
`;