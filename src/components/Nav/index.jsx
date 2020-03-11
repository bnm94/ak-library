import React, {useState} from 'react';
import css from './nav.module.css';
import {Drawer} from 'antd';
import logo from '../../assets/icons/logo_line.svg';
import burgerBtn from '../../assets/icons/burger_menu.svg';

function Nav({links}){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={css.nav}>
      <div className={css.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={css.bottom}>
        <div className={css.menuToggle}
        onClick={()=> setIsOpen(!isOpen)}>
            <img src={burgerBtn} alt="burger menu"/>
        </div>
        <ul className={css.menu}>
          {Object.entries(links).map(([key, value])=> <li><a href={value}>{key}</a></li>)}
        </ul>
      </div>
      {isOpen && <Drawer
        className={css.drawer}
        placement="right"
        closable={true}
        onClose={()=> setIsOpen(!isOpen)}
        visible={isOpen}
        getContainer={false}
        >
          <ul>
            {Object.entries(links).map(([key, value])=> <li><a href={value}>{key}</a></li>)}
          </ul>
        </Drawer>}
    </nav>
  );
}

export default Nav;