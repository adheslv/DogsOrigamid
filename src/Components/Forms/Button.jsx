import React from 'react';
import style from './Button.module.css';

const Button = ({children, ...props}) => {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
};

export default Button;