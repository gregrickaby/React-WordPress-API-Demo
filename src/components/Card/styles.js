import styled from "styled-components";

export const CardLayout = styled.div`
  background-color: #f1f1f1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: transform 0.2s ease-in;

  &:hover,
  &:focus {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
    transform: scale(1.025);
  }
`;
