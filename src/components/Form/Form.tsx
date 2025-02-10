import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Form.module.css';


interface Props extends PropsWithChildren {
  direction?: 'column' | 'row'
}

export function Form({ children, direction = 'column' }: Props) {
  const formClasses = classNames({
    [styles.form]: true,
    [styles.rowDirection]: direction === 'row'
  });

  return <form className={formClasses}>{ children }</form>;
}