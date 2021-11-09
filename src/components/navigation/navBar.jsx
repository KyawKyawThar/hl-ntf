import logo from '../../img/logo2.png';
import { NavBarStyled } from './navBar.styled';

const NavBar = () => {
  return (
    <NavBarStyled>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <ul className='nav-items'>
        <li>
          <a href>Home</a>
        </li>

        <li>
          <a href>About</a>
        </li>

        <li>
          <a href>FAQs</a>
        </li>

        <li>
          <a href>Activity</a>
        </li>

        <li>
          <a href>Contact</a>
        </li>

        <div className='primary--btn'>GET CONNECTED</div>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
