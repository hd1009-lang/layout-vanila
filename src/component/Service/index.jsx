import React from 'react';
import Item from './item';
import { ListService } from './mockup';

const Services = () => {
  return (
    <section className='services-container'>
      <div className='services-container-title'>
        <h4>Services</h4>
      </div>
      <div className='list-service flex-center'>
        {ListService.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Services;
