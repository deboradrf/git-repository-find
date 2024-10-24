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
    flex-direction: column;
    justify-content: center;
  }

  .remover {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px;
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
  }

  hr {
    color: #FAFAFA60;
    margin: 20px 0;
    width: 100%;
  }
`
