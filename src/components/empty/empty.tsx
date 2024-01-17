import React from 'react'
import styles from './empty.module.scss'

export const Empty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <img src='/clipboard.png' alt='ícone de prancheta' />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}

