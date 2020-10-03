import React from 'react';

const List = ( props ) => {
  return(
    <ul>
      { props.data &&
          props.data.map(( item ) => (
            <li>
              <h2>{ item.name }</h2>
              <img src={ item.flickr_images[0] } alt={ item.name } />
            </li>
        ))
      }
    </ul>
  )
}

export default List;
