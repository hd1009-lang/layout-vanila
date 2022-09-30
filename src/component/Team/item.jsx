import React from 'react';

const Item = ({ item }) => {
  return (
    <div className='box-item' style={{ backgroundImage: `url(${item.avatar})` }}>
      <div className='item-info'>
        <h3>{item.name}</h3>
        <span>{item.role}</span>
      </div>
    </div>
  );
};

export default Item;
