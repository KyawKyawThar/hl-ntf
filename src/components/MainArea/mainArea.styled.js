import styled from 'styled-components';

export const MainAreaStyled = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;

    top: -350px;
    right: -250px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;
