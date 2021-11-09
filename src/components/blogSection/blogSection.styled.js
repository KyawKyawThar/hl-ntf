import styled from 'styled-components';

export const BlogSectionStyled = styled.div`
  .blogs-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;

    .blogs {
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.03);
      .image {
        height: 300px;
        width: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-top-right-radius: 20px;
          border-top-left-radius: 20px;
          transition: all 0.4s ease-in-out;
          filter: grayscale(50%);

          &:hover {
            filter: grayscale(0%);
            transform: scale(1.2) rotate(5deg);
          }
        }
      }

      h6 {
        font-weight: 500;
        font-size: 1.3rem;
        padding: 1rem 1rem 0 1rem;
      }

      .users {
        display: flex;
        padding: 0.2rem 1rem 1.5rem 1rem;

        p:first-child {
          padding-right: 0.5rem;
          opacity: 0.5;
        }
      }
    }
  }
`;
