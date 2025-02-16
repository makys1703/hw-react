import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Badge.module.css';


interface Props extends PropsWithChildren {
  variant?: 'default' | 'circle',
  className?: string
}

export function Badge({ children, className: propsClasses, variant = 'default'}: Props) {
  const badgeClasses = classNames(styles.badge, styles[variant], propsClasses);

  return (
    <div className={badgeClasses}>
      { children }
    </div>
  );
}