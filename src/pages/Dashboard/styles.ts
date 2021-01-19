import styled from 'styled-components';
import { shade } from 'polished';
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 50px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    height: 70px;
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

export const Repositories = styled.div`
  margin-top: 70px;
  max-width: 700px;
  a {
    background: #fff;
    width: 100%;
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
