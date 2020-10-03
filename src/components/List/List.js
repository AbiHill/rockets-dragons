import React from 'react';

import {
  ListWrapper,
  ListItem,
  ListTitle,
  ListImg
} from './styles';

const List = ( props ) => {
  return(
    <ListWrapper>
      { props.data &&
          props.data.map(( item ) => (
            <ListItem key={item.id}>
              <ListTitle>{ item.name || item.rocket_name }</ListTitle>
              <ListImg src={ item.flickr_images[0] } alt={ item.name || item.rocket_name } />
            </ListItem>
        ))
      }
    </ListWrapper>
  )
}

export default List;
