import styled from 'styled-components/macro';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: end;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 40px 40px 40px 20px;
  color: pink;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 4rem;
    color: pink;
    position: relative;
    z-index: 2;
    width: 100%;
  }
`;

Title.displayName = 'TitleWrapper';

export const Image = styled.img`
  font-size: 4rem;
  text-align: center;
  width: 150px;
  position: absolute;
  top: -100px;
  left: -100px;
  opacity: 0.5;

  @media (min-width: 375px) {
    padding: 40px 0 40px 40px;
  }

  @media (min-width: 768px) {
    width: 250px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;
