import styled from 'styled-components';

const CtaBtn = ({ name }) => {
  return <CtaBtnStyled>{name}</CtaBtnStyled>;
};

const CtaBtnStyled = styled.a`
  text-transform: uppercase;
  display: inline-block;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: linear-gradient(130deg, #395ff6, #eb3fa9);
  &:last-child {
    margin-left: 1.5rem;
  }
  &:hover {
    transition: all 0.5s ease-in-out;
    background: linear-gradient(130deg, #eb3fa9, #395ff6);
  }
`;
export default CtaBtn;
