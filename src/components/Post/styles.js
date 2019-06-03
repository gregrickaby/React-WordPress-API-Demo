import styled from "styled-components";

export const PostLayout = styled.article`
  margin: 0 auto;
  max-width: 750px;
  padding: 48px;

  .post {
    &-title {
      font-family: serif;
      font-size: 48px;
      line-height: 52px;
      margin-bottom: 30px;
    }

    &-content {
      p:first-of-type {
        font-size: 28px;
        line-height: 36px;
        margin: 30px 0;
      }

      p {
        margin: 25px 0;
        font-size: 18px;
      }
    }
  }
`;
