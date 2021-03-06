import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 50px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700;

  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    background: #6ca9e6;
    color: #fff;
    border-radius: 0 5px 5px 0;
    padding: 0 24px;
    border: 0;
    transition: background-color 0.2s;
    &:hover {
      border-radius: 0 5px 5px 0;
      background: ${shade(0.2, '#6ca9e6')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 70px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    display: block;
    display: flex;
    align-items: center;
    text-decoration: none;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
      transition: transform 0.8s;

      transition: background-color 0.5s;
      background: ${shade(0.1, '#ffffff')};
    }

    img {
      border-radius: 50%;
      width: 50px;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 14px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #3d3d4d;
    }
  }
`;
