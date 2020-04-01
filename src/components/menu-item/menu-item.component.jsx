import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title,subtitle,imageURL,size}) =>(

    <div className={`${size} menu-item`}>
    <div className = 'background-image' style={{backgroundImage: `url(${imageURL})`}} />
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
)

export default MenuItem;
