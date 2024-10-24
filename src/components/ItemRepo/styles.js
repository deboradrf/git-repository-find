import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 70%;

  .repo-div {
    display: flex;
    justify-content: space-between;
  }

  .repo-name {
    display: flex;
    flex-direction: column;
  }

  .repo-btn {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  h3 {
    font-size: 32px;
    color: #FAFAFA;
  }

  p {
    font-size: 16px;
    color: #FAFAFA60;
  }

  a {
    text-decoration: none;
    color: #00f;
    margin-bottom: 10px;
  }

  a.remover {
    color: #FF0000;
    margin-top: 10px;
    margin-left: 30px;
  }

  hr {
    color: #FAFAFA60;
    margin: 20px 0;
    width: 100%;
  }
`