import NavBar from '../navigation/navBar';
import SmallHeading from '../reuseComponent/smallHeading';
import { MainContentStyled } from './mainContent.styled';
import blockchain from '../../img/bchain.png';
import CtaBtn from '../reuseComponent/ctaBtn';

const MainContent = () => {
  return (
    <MainContentStyled>
      <NavBar />

      <div className='content'>
        <div className='left'>
          <SmallHeading
            title={'All Digital Currencies in One Place'}
            identifier={'Before'}
          />
          <h1>
            All NFTs You need in One Marketplace The Best Place to Collect , Buy
            and Sell <span className='GradientText'>Awesome NFTs</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id
            unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem.
            Cumque obcaecati sint officiis quis laboriosam vitae, error
            molestiae temporibus voluptatum consectetur, quibusdam magni,
            delectus a autem soluta optio laborum!
          </p>

          <div className='cta-btn'>
            <CtaBtn name={'Discover More'} />
            <CtaBtn name={'Get Help'} />
          </div>
        </div>
        <div className='right'>
          <img src={blockchain} alt='bchain' />
        </div>
      </div>
    </MainContentStyled>
  );
};

export default MainContent;
