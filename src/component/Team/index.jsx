import React from 'react';
import Item from './item';
import { ListTeam } from './mockup';

const Team = () => {
  return (
    <section className='team-container'>
      <div className='team-container-title'>
        <h4>Our Team</h4>
        <p className='team-container-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='list-team flex-center'>
        {ListTeam.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Team;
