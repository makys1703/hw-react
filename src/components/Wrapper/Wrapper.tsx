import { PropsWithChildren, CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './Wrapper.module.css';

interface Props extends PropsWithChildren {
  main?: boolean,
  style?: CSSProperties,
  className?: string
}

export function Wrapper({ children, main = false, className: classFromProps, style }: Props) {

  const wrapperClasses = classNames(classFromProps, {
    [styles.mainWrapper]: main
  });

  return (
    <div className={wrapperClasses} style={style}>
      { children }
    </div>
  );
}