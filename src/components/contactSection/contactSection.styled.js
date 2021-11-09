import styled from 'styled-components';

export const ContactSectionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #020c31;
  text-align: center;
  position: relative;
  padding: 4rem 0;
  /* z-index: 1; */

  p {
    opacity: 0.5;
  }
  .bg-image {
    position: absolute;
    left: 50%;
    top: 50%;
    /* z-index: -1; */
    transform: translate(-50%, -50%);

    img {
      width: 80%;
      opacity: 0.08;
    }
  }

  .contact-title {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.5rem;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 4rem;
      height: 2px;
      background-color: #eb3fa9;
    }
  }
`;
