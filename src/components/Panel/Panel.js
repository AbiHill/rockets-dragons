import React from 'react';
import { PropTypes } from 'prop-types';

const Panel = ({ data, onClick, onKeyPress }) => (
  <div>
    {data && (
      <div>
        <div onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0">
          close
        </div>
        <h2>{data.name || data.rocket_name}</h2>
        <p>{data.description}</p>
        <img src={data.flickr_images} alt="alt text" />
      </div>
    )}
  </div>
);

Panel.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default Panel;
