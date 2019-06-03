import styled from "styled-components";

export const MenuLayout = styled.nav`
  text-align: center;

  .menu {
    margin: 0 0 16px;
    padding: 0;

    &-item {
      display: inline-block;
      margin-left: 16px;

      &-home {
        margin-left: 0;
      }
    }
  }
`;
