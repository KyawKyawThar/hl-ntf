import BlogSection from '../blogSection/blogSection';
import CardsSection from '../cardSection/cardSection';
import ContactSection from '../contactSection/contactSection';
import DemoSection from '../demoSection/demoSection';

import { InnerLayout } from '../reuseComponent/layout';
import SectionMainTitle from '../reuseComponent/sectionMainTitle';
import SellerCard from '../sellerCardContainer/sellerCard';
import { SectionContentStyle } from './sectionContent.styled';

const SectionContent = () => {
  return (
    <SectionContentStyle>
      <InnerLayout>
        <SectionMainTitle
          name={'All Entrepreneurs'}
          subtitle={'Top Sellers This Month'}
        />

        <div className='sectionSeller'>
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>

        <BlogSection />
        <CardsSection />
        <DemoSection />
      </InnerLayout>
      <ContactSection />

      <footer>
        <p>Copyright ©YourName. All Rights Reserved</p>
      </footer>
    </SectionContentStyle>
  );
};

export default SectionContent;
