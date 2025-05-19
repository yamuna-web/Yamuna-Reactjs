import React from 'react';


const Image = ({ imageUrl }) => {
  return (
    <div>
      <img 
        src={imageUrl} 
        alt="User Avatar" 
        width="150" 
        height="150" 
        style={{ borderRadius: '50%' }} 
      />
    </div>
  );
};


Image.defaultProps = {
  imageUrl: 'https://via.placeholder.com/150'
};

export default Image;