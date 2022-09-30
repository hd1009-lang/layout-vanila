import React, { useState } from 'react';
import Item from './item';
import { ListWork } from './mockup';
const Works = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const toggleShowAll = () => {
    setIsShowAll((isShowAll) => !isShowAll);
  };
  return (
    <div className='work-container'>
      <section className='work-container-title'>
        <h4>Work</h4>
      </section>
      <section className={`list-item flex-center ${isShowAll && 'show-all'}`}>
        {ListWork.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </section>
      <section className='box-btn flex-center'>
        <button onClick={() => toggleShowAll()}>{isShowAll ? 'Hide' : 'Show All'}</button>
      </section>
    </div>
  );
};

export default Works;
