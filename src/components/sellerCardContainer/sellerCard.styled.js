import styled from 'styled-components';

export const SellerCardStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-15px);
  }

  .sellerCard {
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;

    .number {
      padding-right: 1rem;
      font-size: 1.6rem;
      opacity: 0.6;

      p {
        font-weight: 700;
      }
    }

    .profile {
      display: flex;
      align-items: center;
      img {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        margin-right: 1.2rem;
        object-fit: cover;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
