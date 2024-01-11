import React from 'react';

import styles from './button.module.scss'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode | any,
  buttonType: string
}

export const Button: React.FC<ButtonProps> = ({ children, buttonType = 'primary' }) => {
  const currentType = buttonType === 'secondary' ? 'secondary' : 'primary'

  return <button className={`button ${styles.button} ${styles[currentType]}`} > {children}</button>;
}


