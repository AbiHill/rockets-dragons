import React from 'react';

const Panel = (props) => (
  <div>
    {props.data && (
      <div>
        <h2>{props.data.name || props.data.rocket_name}</h2>
        <p>{props.data.description}</p>
        <img src={props.data.flickr_images} alt='alt text' />
      </div>
    )}
  </div>
);

export default Panel;
