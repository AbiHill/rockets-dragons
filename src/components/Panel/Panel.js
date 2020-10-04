import React from 'react';
import { PropTypes } from 'prop-types';

import { CloseButton, PanelWrapper, MoreInfoImage, InfoTitle, InfoDesc, ContentWrapper, MetaData } from './styles';

const Panel = ({ data, onClick, onKeyPress }) => (
  <div>
    {data && (
      <PanelWrapper>
        <CloseButton onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0">
          X
        </CloseButton>
        <InfoTitle id="title">{data.name || data.rocket_name}</InfoTitle>
        <ContentWrapper>
          <InfoDesc id="desc">
            {data.description}
            {data.crew_capacity === 0 ||
              (data.crew_capacity && (
                <MetaData>
                  <span role="img" aria-label="boat">⛴</span> {data.crew_capacity} Crew Capacity
                </MetaData>
              ))}
            {data.cost_per_launch && (
              <MetaData>
                <span role="img" aria-label="cash">💰</span> {data.cost_per_launch} Cost per launch
              </MetaData>
            )}
          </InfoDesc>
          <MoreInfoImage id="img" src={data.flickr_images} alt="alt text" />
        </ContentWrapper>
      </PanelWrapper>
    )}
  </div>
);

Panel.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default Panel;
