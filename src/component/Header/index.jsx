import React, { useState } from 'react';
import BarIcon from '../../assets/bar.svg';
import TimesIcon from '../../assets/mask.png';
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const toggleMenu = () => {
    setIsShowMenu((isShowMenu) => !isShowMenu);
  };
  return (
    <section className='header'>
      <div className='header-top  flex-center'>
        <div className='logo'>
          <h4>Logo</h4>
        </div>
        <div className='icon-menu'>
          <img onClick={() => toggleMenu()} src={isShowMenu ? TimesIcon : BarIcon} alt='bar-icon' />
        </div>
        <div className={`${isShowMenu ? 'active' : ''} menu`}>
          <a className='flex-center' href=''>
            work
          </a>
          <a className='flex-center' href=''>
            services
          </a>
          <a className='flex-center' href=''>
            contact
          </a>
        </div>
      </div>
      <div className='header-main'>
        <h1>Creative Innovative Design Agency</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </span>
      </div>
    </section>
  );
};

export default Header;
