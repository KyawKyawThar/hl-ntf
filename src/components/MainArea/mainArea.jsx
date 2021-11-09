import { MainAreaStyled } from './mainArea.styled';

import marketing from '../../img/marketing.mp4';
import circles from '../../img/circles.svg';

import { InnerLayout } from '../reuseComponent/layout';
import MainContent from '../mainContent/mainContent';

const MainArea = () => {
  return (
    <MainAreaStyled>
      <video src={marketing} autoPlay muted playsInline loop />
      <img src={circles} alt='circle' className='overlay' />

      <InnerLayout>
        <MainContent />
      </InnerLayout>
    </MainAreaStyled>
  );
};

export default MainArea;
