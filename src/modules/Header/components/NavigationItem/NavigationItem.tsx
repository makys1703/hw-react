import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './NavigationItem.module.css';


interface Props extends PropsWithChildren {
  active?: boolean
}

export function NavigationItem({ children, active = false }: Props) {

  const listItemClasses = classNames(styles.listItem, {
    [styles.active]: active
  });

  return (
    <li className={listItemClasses}>
      { children }
    </li>
  );
}