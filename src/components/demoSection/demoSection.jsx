import GradientCard from '../gradientCard/gradientCard';

import { SectionStyled } from '../reuseComponent/layout';
import SectionMainTitle from '../reuseComponent/sectionMainTitle';
import { DemoSectionStyled } from './demonSection.styled';
import person2 from '../../img/bitcoin3.jpg';

import bitcoin from '../../img/bitcoin.jpg';
import person3 from '../../img/person3.jpg';
import computer from '../../img/computer.jpg';
import avatar from '../../img/avata.jpg';
import CtaBtn from '../reuseComponent/ctaBtn';

const DemoSection = () => {
  const CtaButton = <CtaBtn name={'Place bid'} />;

  return (
    <DemoSectionStyled>
      <SectionStyled>
        <div className='blog-text'>
          <SectionMainTitle
            name={'Live Demonstration'}
            subtitle={'Live Demonstration'}
            para={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            }
          />
        </div>

        <div className='gradient-card'>
          <GradientCard
            image={computer}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
            CtaBtn={CtaButton}
          />

          <GradientCard
            image={person3}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
            CtaBtn={CtaButton}
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
            CtaBtn={CtaButton}
          />
          <GradientCard
            image={person2}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
            CtaBtn={CtaButton}
          />
        </div>
      </SectionStyled>
    </DemoSectionStyled>
  );
};

export default DemoSection;
