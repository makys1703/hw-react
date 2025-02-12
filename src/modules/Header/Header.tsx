import { Wrapper } from '../../components/Wrapper';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { NavigationItem } from './components/NavigationItem';
import { Badge } from '../../components/Badge';
import loginIcon from '../../assets/icons/login.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.headerWrapper}>
        <Logo />
        <Navigation>
          <NavigationItem>
            <a href="/" className={styles.active}>
              Поиск фильмов
            </a>
          </NavigationItem>
          <NavigationItem>
            <a href="/">Мои фильмы</a>
            <Badge>2</Badge>
          </NavigationItem>
          <NavigationItem>
            <a href="/">Войти</a>
            <img src={loginIcon} alt="Иконка входа" />
          </NavigationItem>
        </Navigation>
      </Wrapper>
    </header>
  );
}
