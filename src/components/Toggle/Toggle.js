import React from 'react';
import PropTypes from 'prop-types';

import { ToggleButton, ToggleWrapper } from './styles';

const Toggle = ({ onClick, onKeyPress, select }) => (
  <ToggleWrapper>
    <ToggleButton onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0" disabled={select}>
      Rockets
    </ToggleButton>
    <ToggleButton onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex="0" disabled={!select}>
      Dragons
    </ToggleButton>
  </ToggleWrapper>
);

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default Toggle;
