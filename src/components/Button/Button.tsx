import { PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends
  PropsWithChildren,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'solid' | 'transparent'
}

export function Button({ children, variant = 'solid', ...props }: Props) {
  return (
    <button {...props} className={styles[variant]}>
      { children }
    </button>
  );
}