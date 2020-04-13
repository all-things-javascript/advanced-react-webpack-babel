import React from 'react';

const Image = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      height={props.height}
      wdth={props.wdth}
    />
  );
};

export default Image;
