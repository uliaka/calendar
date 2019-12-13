import React from 'react';
import './MenuButton.scss'

const MenuButton = (props) => {
  const onClick = () => props.onClick()
  return (
    <div className='button-container'
      onClick={onClick}>
      <div className='line' />
      <div className='line' />
      <div className='line' />
    </div>
  )
}

export default MenuButton;
