import React from 'react';

import styles from './button.module.scss'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode,
  buttonType: string,
  className?: string,
}

export const Button: React.FC<ButtonProps> = ({ children, buttonType = 'primary', className = '', ...rest }) => {
  const currentType = buttonType === 'secondary' ? 'secondary' : 'primary'

  return <button className={`button ${styles.button} ${styles[currentType]} ${className}`} {...rest}  > {children}</button>;
}


