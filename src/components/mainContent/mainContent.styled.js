import styled from 'styled-components';

export const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;

    .cta-btn {
      margin-top: 2rem;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        padding: 1.8rem 0;
      }
    }

    .right {
      img {
        position: absolute;
        width: 60%;
        right: -11%;
        bottom: -1%;
      }
    }
  }

  /* .btns-con {
        margin-top: 3rem;
      } */
`;
