import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 28px;
  color: #fff;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 150px;
    border-radius: 50%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
    color: #0d2636;
    text-transform: capitalize;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const BackButton = styled(Link)`
  background: #0d2636;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: fit-content;
  padding: 4px;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.9;
  }
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #0d2636;
    }

    div {
      flex: 1;
      margin-left: 12px;
      p {
        font-size: 12px;
        color: #000;
      }
    }
    strong {
      font-size: 15px;

      a {
        text-decoration: none;
        display: block;
        color: #0d2636;
        transition: color 0.4s;
        &:hover {
          color: #0071db;
        }
      }
      span {
        background: #222;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        padding: 4px 7px;
        display: inline-block;
        margin: 10px 10px 10px 0;
        }
      }
    }
  }
`;

export const Actions = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    outline: 0;
    border: 0;
    background: #0d2636;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    margin: 0 5px;
    transition: opacity 0.3s;
    :hover {
      opacity: 0.9;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  span {
    color: #0d2636;
    font-weight: bold;
    font-size: 16px;
  }
`;
