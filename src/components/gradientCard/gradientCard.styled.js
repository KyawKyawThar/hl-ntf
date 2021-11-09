import styled from 'styled-components';

export const GradientCardStyled = styled.div`
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.4s ease-in-out;
  background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
  animation: colors 3s infinite ease-in-out;
  @keyframes colors {
    0% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
    50% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
    70% {
      background: linear-gradient(130deg, #022894 0%, #7f41db 100%);
    }
    100% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
  }

  .g-card {
    margin: 0.2rem;

    .inner-content {
      padding: 0.8rem;
      background-color: #091026;

      border-radius: 20px;

      .image {
        width: 100%;
        position: relative;
        img:first-child {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 10px;
        }
        .name {
          position: absolute;
          left: 50%;
          bottom: -26px;
          background-color: #03091f;
          display: flex;
          align-items: center;
          transform: translateX(-50%);
          width: 90%;
          padding: 0.5rem 0.5rem;
          border-radius: 60px;
          border: 1px solid rgba(255, 255, 255, 0.8);

          img {
            width: 45px;
            object-fit: cover;
            height: 45px;
            border-radius: 50%;
            margin-right: 2rem;
          }
        }
      }

      .card-content {
        padding-top: 3rem;

        .card-title {
          font-size: 1.3rem;
          font-weight: 500;
          padding-bottom: 0.6rem;
        }
        .price {
          color: #6bbe92;
        }
        .l-text {
          opacity: 0.5;
        }
        .duration {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.2);
          display: flex;
          justify-content: space-between;

          p {
            display: flex;
            align-items: center;
            font-size: 13px;
            img {
              object-fit: cover;
              width: 18px;
              margin-right: 0.6rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
      .cta-btn {
        width: 100%;
        a {
          margin: 0.6rem 0;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;