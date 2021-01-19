import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/git-background.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: 0;
}
body {
  background-color: #d3d3d4;
  background-image: url(${githubBackground});
  background-repeat:no-repeat;
  background-position-y: 0;
  background-position-x:70%;

}

body, imput,button{
  font: 16px Roboto, sans-serif;
}

#root{
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
}

button{
  cursor: pointer;
}



`;
