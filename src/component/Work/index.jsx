import React, { useState } from 'react';
import Item from './item';
import { ListWork } from './mockup';
const Works = ({ scrollRef }) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const toggleShowAll = () => {
    setIsShowAll((isShowAll) => !isShowAll);
  };
  return (
    <section ref={scrollRef} className='work-container'>
      <div className='work-container-title'>
        <h4>Work</h4>
      </div>
      <div className={`list-item flex-center ${isShowAll && 'show-all'}`}>
        {ListWork.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div className='box-btn flex-center'>
        <button onClick={() => toggleShowAll()}>{isShowAll ? 'Hide' : 'Show All'}</button>
      </div>
    </section>
  );
};

export default Works;
