import React from 'react';
import css from './header.module.css';
import img from '../../assets/img/banner.png';

function Header(){
  return(
    <div className={css.header}>
      <div>
        <h1>lorem ipsum dolor sit amet</h1>
        <button><a href="#text">Поиск</a></button>
      </div>
      <div>
        <img src={img}/>
      </div>
    </div>
  );
}

export default Header;