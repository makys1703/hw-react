import { useContext } from 'react';
import { UserContext, UserContextData } from '../../context/User/user.context';
import { Wrapper } from '../../components/Wrapper';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { NavigationItem } from './components/NavigationItem';
import { Badge } from '../../components/Badge';
import loginIcon from '../../assets/icons/login.svg';
import userIcon from '../../assets/icons/user.svg';
import styles from './Header.module.css';


const enum LoginText {
  loggedOut = 'Войти',
  loggedIn = 'Выйти'
}

export function Header() {
  const { userData, logOutUser } = useContext(UserContext) as UserContextData;
  const loginText = userData ? LoginText.loggedIn : LoginText.loggedOut;

  return (
    <header className={styles.header}>
      <Wrapper className={styles.headerWrapper}>
        <Logo />
        <Navigation>
          <NavigationItem>
            <a href='/'>Поиск фильмов</a>
          </NavigationItem>
          <NavigationItem>
            <a href='/'>Мои фильмы</a>
            <Badge variant='circle'>2</Badge>
          </NavigationItem>
          { userData && (
            <NavigationItem>
              { userData?.name }
              <img src={userIcon} alt='Иконка пользователя' />
            </NavigationItem>)
          }
          <NavigationItem active={true}>
            <span onClick={logOutUser}>{ loginText }</span>
            <img src={loginIcon} alt='Иконка входа' />
          </NavigationItem>
        </Navigation>
      </Wrapper>
    </header>
  );
}
