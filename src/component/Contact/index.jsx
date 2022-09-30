import React from 'react';
import { ListSocial } from './mockup';

const Contact = ({ scrollRef }) => {
  return (
    <section ref={scrollRef} className='contact-container'>
      <div className='contact-container-title'>
        <h4>Contact</h4>
        <div className='info-contact flex-center'>
          <span className='contact-email'>contact@website.com</span>
          <span>+0 0000 0000</span>
        </div>
      </div>
      <div className='list-social flex-center'>
        {ListSocial.map((item) => {
          return (
            <div className='box-item' key={item.id}>
              <a href={item.link}>{item.name}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
