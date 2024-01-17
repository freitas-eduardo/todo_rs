import React from 'react';

import styles from './input.module.scss'

export type InputProps = {
  placeholder: string
}

export const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return (
    <input {...rest} name='task' className={styles.input} placeholder={placeholder} />
  )
}


