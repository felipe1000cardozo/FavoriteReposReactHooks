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
  box-shadow: 0 0 3px rgba(254, 254, 254, 0.6);
  padding: 30px;
  margin: 80px auto;
  }
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
