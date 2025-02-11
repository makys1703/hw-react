import classNames from 'classnames';
import { FormEventHandler, PropsWithChildren } from 'react';
import styles from './Form.module.css';


interface Props extends PropsWithChildren {
  onSubmit: FormEventHandler<HTMLFormElement>
  direction?: 'column' | 'row'
}

export function Form({ children, onSubmit, direction = 'column' }: Props) {
  const formClasses = classNames({
    [styles.form]: true,
    [styles.rowDirection]: direction === 'row'
  });

  return (
    <form className={formClasses} onSubmit={onSubmit}>
      { children }
    </form>
  );
}