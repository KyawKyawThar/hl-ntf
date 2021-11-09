import { SectionStyled } from '../reuseComponent/layout';
import { ContactSectionStyled } from './contactSection.styled';
import map from '../../img/map.png';

const ContactSection = () => {
  return (
    <ContactSectionStyled>
      <SectionStyled>
        <div className='contact-info'>
          <h3 className='contact-title'>Contact us</h3>
          <p>30 Avenue Street, United Kingdom</p>
          <p>+44 786 997 7162</p>
          <p>maclinzuniversal@gmail.com</p>
        </div>

        <div className='bg-image'>
          <img src={map} alt='' />
        </div>
      </SectionStyled>
    </ContactSectionStyled>
  );
};

export default ContactSection;
