import React from 'react';

import { ListWrapper, ListItem, ListTitle, ListImg, ListButton } from './styles';

const List = (props) => {
  return (
    <ListWrapper>
      {props.data &&
        props.data.map((item) => (
          <ListItem onClick={props.onClick} key={item.id} id={item.id}>
            <ListTitle>{item.name || item.rocket_name}</ListTitle>
            <ListImg src={item.flickr_images[0]} alt={item.name || item.rocket_name} />
            <ListButton>More info</ListButton>
          </ListItem>
        ))}
    </ListWrapper>
  );
};

export default List;
