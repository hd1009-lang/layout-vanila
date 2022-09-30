import React from 'react';
import ArrowIcon from '../../assets/arrow.svg';
const Item = ({ item }) => {
  return (
    <section className='box-item' style={{ backgroundImage: `url(${item.img})` }}>
      <div className='item-info'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className='item-link'>
          <a href={item.link}>See Project</a>
          <img src={ArrowIcon} alt='see-project' />
        </div>
      </div>
    </section>
  );
};

export default Item;
