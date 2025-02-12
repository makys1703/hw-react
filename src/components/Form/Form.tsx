import classNames from 'classnames';
import { PropsWithChildren, DetailedHTMLProps, FormHTMLAttributes} from 'react';
import styles from './Form.module.css';


interface Props extends 
  PropsWithChildren, 
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  direction?: 'column' | 'row'
}

export function Form({ children, direction = 'column', ...props }: Props) {
  const formClasses = classNames({
    [styles.form]: true,
    [styles.rowDirection]: direction === 'row'
  });

  return (
    <form className={formClasses} {...props}>
      { children }
    </form>
  );
}