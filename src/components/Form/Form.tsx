import classNames from 'classnames';
import { PropsWithChildren, DetailedHTMLProps, FormHTMLAttributes} from 'react';
import styles from './Form.module.css';


interface Props extends 
  PropsWithChildren, 
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  direction?: 'column' | 'row',
  className?: string
}

export function Form({ children, direction = 'column', className: classFromProps = '', ...props }: Props) {
  const formClasses = classNames(classFromProps, styles.form, {
    [styles.rowDirection]: direction === 'row'
  });

  return (
    <form {...props} className={formClasses}>
      { children }
    </form>
  );
}