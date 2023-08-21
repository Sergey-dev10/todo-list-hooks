import styled from "styled-components";
import {device} from "../../common/devices.js";

export const ActionPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #ddd;
  background-color: #e8e2ca;
  @media ${device.tablet} {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

