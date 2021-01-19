import styled from 'styled-components';
import { shade } from 'polished';
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width:450px;
  line-height:50px;
  margin-top:80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width:700;
display:flex;
input{
  flex:1;
  height: 70px;
  padding: 0 24px;
  border:0;
  border-radius: 5px 0 0 5px;
 &::placeholder{
   color: #a8a8b3;
 }
}
button{
  height: 70px;
  width:210px;
  background:#6ca9e6;
  color:#fff;
  border-radius: 0 5px 5px 0;
  padding: 0 24px;
  border:0;
  transition: background-color 0.2s;
  &:hover{
  border-radius: 0 5px 5px 0;
  background: ${shade(0.2, '#6ca9e6')};
}
}


`;
