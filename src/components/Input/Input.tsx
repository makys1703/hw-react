import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';


interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  iconSrc?: string
}

export function Input({ iconSrc, ...props }: Props) {

  const inputClasses = classNames(styles.input, {
    [styles.withImage]: !!iconSrc
  });

  return (
    <div className={styles.inputContainer}>
      { iconSrc && <img src={iconSrc} alt='Иконка поля для ввода' /> }
      <input type='text' {...props} className={inputClasses} />
    </div>
  );
}