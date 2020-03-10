import React, {useState} from 'react';
import css from './nav.module.css';
import cn from 'classnames';
import logo from '../../assets/icons/logo_line.svg';

function Nav(){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={css.nav}>
      <div className={css.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={css.bottom}>
        <div className={cn(css.menuToggle, {open: isOpen})}
            onClick={()=> setIsOpen(!isOpen)} >
          <div className={css.one}></div>
          <div className={css.two}></div>
          <div className={css.three}></div>
        </div>
        <ul className={css.menu}>
          <li><a href="#">Про проект</a></li>
          <li><a href="#">Поиск</a></li>
          <li><a href="#">Создатели</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;