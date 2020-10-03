import React from 'react';

const List = ( props ) => {
  return(
    <ul>
      { props.data &&
          props.data.map(( item ) => (
            <li>
              <h2>{ item.name || item.rocket_name }</h2>
              <img src={ item.flickr_images[0] } alt={ item.name || item.rocket_name } />
            </li>
        ))
      }
    </ul>
  )
}

export default List;
