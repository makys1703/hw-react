import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Wrapper.module.css';

interface Props extends PropsWithChildren {
  className?: string
}

export function Wrapper({ children, className: classFromProps }: Props) {

  const wrapperClasses = classNames(styles.wrapper, classFromProps);

  return (
    <div className={wrapperClasses}>
      { children }
    </div>
  );
}