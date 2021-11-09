import styled from 'styled-components';

export const NavBarStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;

  .logo {
    img {
      width: 60px;
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
  }

  li {
    margin: 0 1rem;
  }

  .primary--btn {
    margin-left: 3rem;
    background-color: rgba(57, 95, 246, 0.6);
    padding: 0.6rem 0.8rem;
    border-radius: 70px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: rgba(57, 95, 246, 1);
    }
  }
`;
