import React from "react";
import { Check } from '@phosphor-icons/react'
import styles from './checkbox.module.scss';

export type CheckBoxProps = {
  isChecked: boolean
}

export const CheckBox: React.FC<CheckBoxProps> = ({ isChecked = false }) => {
  const checkboxStatus = isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

  return (
    <div className={styles.container}>
      <input id="checkbox" type="checkbox" />
      <label htmlFor="checkbox" className={`${styles.checkbox} ${checkboxStatus}`}>
        {isChecked && <Check size={12} />}
      </label>
    </div>
  );
};


