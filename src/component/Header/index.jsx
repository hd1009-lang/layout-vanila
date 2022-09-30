import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BarIcon from '../../assets/bar.svg';
import TimesIcon from '../../assets/mask.png';

const Header = ({ scrollInWork, scrollInServices, scrollInContact }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const toggleMenu = () => {
    setIsShowMenu((isShowMenu) => !isShowMenu);
  };
  const scrollInto = (to) => {
    switch (to) {
      case 'work':
        scrollInWork();
        break;
      case 'services':
        scrollInServices();
        break;
      case 'contact':
        scrollInContact();
        break;
      default:
        break;
    }
    setIsShowMenu(false);
  };
  useEffect(() => {
    const pathname = window.location.pathname;
    scrollInto(pathname.replace('/', ''));
  }, []);
  return (
    <section className='header'>
      <div className='header-top  flex-center'>
        <div className='logo'>
          <Link to={'/'}>
            <h4>Logo</h4>
          </Link>
        </div>
        <div className='icon-menu'>
          <img onClick={() => toggleMenu()} src={isShowMenu ? TimesIcon : BarIcon} alt='bar-icon' />
        </div>
        <div className={`${isShowMenu ? 'active' : ''} menu`}>
          <Link
            to={'work'}
            onClick={() => {
              scrollInto('work');
            }}
            className='flex-center'
          >
            work
          </Link>
          <Link
            to={'services'}
            onClick={(e) => {
              scrollInto('services');
            }}
            className='flex-center'
            href='services'
          >
            services
          </Link>
          <Link
            to={'contact'}
            onClick={() => {
              scrollInto('contact');
            }}
            className='flex-center'
          >
            contact
          </Link>
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
