import React from 'react';
import ArrowIcon from '../../assets/arrow.svg';
const Item = ({ item }) => {
  return (
    <div className='box-item-service'>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className='item-link '>
        <a href={item.link} className='flex-center'>
          <span>See Details</span> <img src={ArrowIcon} alt='see-details-service' />
        </a>
      </div>
      <div className='box-fee flex-center'>
        <span>Starting at ${item.fee}</span>
      </div>
    </div>
  );
};

export default Item;
