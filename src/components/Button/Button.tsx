import { DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function Button({ text, onClick, ...props }: Props) {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      { text }
    </button>
  );
}