import styled from 'styled-components/macro';

export const PanelWrapper = styled.div`
  background-color: pink;
  padding: 20px 16px 16px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 3000;
`;

export const ContentWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 40px;
  }
`;

export const MoreInfoImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 20px;
  margin: 0 auto;
  display: block;
`;

export const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-top: 40px;
  padding: 16px 0;
`;

export const InfoDesc = styled.p`
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 20px;
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

export const CloseButton = styled.div`
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
`;
