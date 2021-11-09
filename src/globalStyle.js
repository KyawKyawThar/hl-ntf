import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #03091f;
    font-size: 1rem;
    font-weight: 400;
    color: white;
    ::-webkit-scrollbar{
            width: 8px;
        }
        ::-webkit-scrollbar-track{
            background: #ccc;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(180deg, #7F41DB 0%, #022894 100%);
            border-radius: 24px;
        }
  }

  a {
    color: inherit;
    font-family: inherit;
  text-decoration: none;
  }

  p{
    line-height: 2rem;
  }

  .Before {
    position: relative;
    padding-left: 3rem;

       &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 35px;
            height: 2px;
            background-color: #395FF6 ;
        }
  }

  .GradientText {
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;}


    .blog-text{
      margin: 0 auto;
      text-align: center;
      width: 50%;
    }


    .gradient-card{
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
      grid-gap: 2rem;
    }
`;
