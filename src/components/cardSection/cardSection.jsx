import GradientCard from '../gradientCard/gradientCard';
import { SectionStyled } from '../reuseComponent/layout';
import SectionMainTitle from '../reuseComponent/sectionMainTitle';
import { CardSectionStyled } from './cardSection.styled';
import CtaButton from '../reuseComponent/ctaBtn';
import person from '../../img/person.jpg';
import person2 from '../../img/bitcoin3.jpg';
import bitcoin2 from '../../img/bitcoin2.jpg';
import bitcoin from '../../img/bitcoin.jpg';
import person3 from '../../img/person3.jpg';
import computer from '../../img/computer.jpg';
import avatar from '../../img/avata.jpg';

const CardsSection = () => {
  return (
    <CardSectionStyled>
      <SectionStyled>
        <div className='blog-text'>
          <SectionMainTitle
            name={'New Upcoming Items'}
            subtitle={'Discover Upcoming Items'}
            para={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            }
          />
        </div>

        <div className='gradient-card'>
          <GradientCard
            image={person}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
          <GradientCard
            image={person2}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
          <GradientCard
            image={person3}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
          <GradientCard
            image={computer}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name={'@Joel Clock'}
            price={'0.067 ETH'}
            title={'Just a dummy title'}
          />
        </div>
        <div className='btn'>
          <CtaButton name={'see more'} />
        </div>
      </SectionStyled>
    </CardSectionStyled>
  );
};

export default CardsSection;
