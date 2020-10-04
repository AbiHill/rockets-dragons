import React from 'react';
import { PropTypes } from 'prop-types';

import { ListWrapper, ListItem, ListTitle, ListImg, ListButton } from './styles';

const List = ({ data, onClick, onKeyPress, type }) => (
  <ListWrapper>
    {data &&
      data.map((item) => (
        <ListItem
          onClick={onClick}
          onKeyPress={onKeyPress}
          key={item.id}
          id={item.rocket_id || item.id}
          type={type}
          role="button"
          tabIndex="0"
        >
          <ListTitle>{item.name || item.rocket_name}</ListTitle>
          <ListImg src={item.flickr_images[0]} alt={item.name || item.rocket_name} />
          <ListButton>Read More</ListButton>
        </ListItem>
      ))}
  </ListWrapper>
);

List.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  type: PropTypes.string,
};

export default List;
