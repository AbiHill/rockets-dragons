import React from 'react';
import { PropTypes } from 'prop-types';

import { CloseButton, PanelWrapper, MoreInfoImage, InfoTitle, InfoDesc, ContentWrapper } from './styles';

const Panel = ({ data, onClick, onKeyPress }) => (
  <div>
    {data && (
      <PanelWrapper>
        <CloseButton onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0">
          X
        </CloseButton>
        <InfoTitle>{data.name || data.rocket_name}</InfoTitle>
        <ContentWrapper>
          <InfoDesc>{data.description}</InfoDesc>
          <MoreInfoImage src={data.flickr_images} alt="alt text" />
        </ContentWrapper>
      </PanelWrapper>
    )}
  </div>
);

Panel.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default Panel;
