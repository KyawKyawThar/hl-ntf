import styled from 'styled-components';
import SmallHeading from './smallHeading';

const SectionMainTitle = ({ name, subtitle, para }) => {
  return (
    <SectionMainStyled>
      <SmallHeading title={name} />

      <h2>{subtitle}</h2>
      <p>{para}</p>
    </SectionMainStyled>
  );
};

const SectionMainStyled = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 500;
  }
  p {
    padding: 1.2rem 0;
    opacity: 0.5;
  }
`;

export default SectionMainTitle;
