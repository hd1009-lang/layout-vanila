import React from 'react';
import ArrowIcon from '../../assets/arrow.svg';
const Item = ({ item }) => {
  return (
    <div className='box-item' style={{ backgroundImage: `url(${item.img})` }}>
      <section className='item-info'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <section className='item-link'>
          <a href={item.link}>See Project</a>
          <img src={ArrowIcon} alt='see-project' />
        </section>
      </section>
    </div>
  );
};

export default Item;
