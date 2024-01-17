import React from 'react'

import styles from './task.module.scss'
import { CheckBox } from '../checkbox'
import { Button } from '../button'
import { Trash } from '@phosphor-icons/react'


export type TaskProps = {
  isDone: boolean,
  content: string,
  removeTask?: () => void
  toggleUpdateTask: () => void
}

export const Task: React.FC<TaskProps> = ({ isDone = false, content = '', removeTask, toggleUpdateTask }) => {
  const contentStatus = isDone
    ? styles['content-is--done']
    : ''

  return (
    <div className={styles.task}>
      <CheckBox isChecked={isDone} toggleStatus={toggleUpdateTask} />
      <div className={`${styles.content} ${contentStatus}`} >
        {content}
      </div>
      <Button onClick={removeTask} className={styles.action} buttonType='secondary'>
        <Trash size={16} />
      </Button>
    </div>
  )
}
