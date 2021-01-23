import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;
    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  padding: 24px;
  display: block;

  header {
    display: flex;
    align-items: center;

    div {
      margin-left: 20px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 70px;
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
