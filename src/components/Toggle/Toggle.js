import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ onClick, onKeyPress }) => (
  <div>
    <div onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0">
      Rockets
    </div>
    <div onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0">
      Dragons
    </div>
  </div>
);

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default Toggle;
