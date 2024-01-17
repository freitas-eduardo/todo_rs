import React from 'react';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="logo da aplicação" />
    </header>
  )
}


