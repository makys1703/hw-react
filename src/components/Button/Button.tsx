import { PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface Props extends
  PropsWithChildren,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'solid' | 'transparent',
  className?: string
}

export function Button({ children, className, variant = 'solid', ...props }: Props) {
  const buttonClasses = classNames(styles[variant], className);

  return (
    <button {...props} className={buttonClasses}>
      { children }
    </button>
  );
}