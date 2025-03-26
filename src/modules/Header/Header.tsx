import { NavLink } from 'react-router';
import { useAppDispatch } from '../../hooks/useAppDispatch.hook';
import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { Wrapper } from '../../components/Wrapper';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { NavigationItem } from './components/NavigationItem';
import { Badge } from '../../components/Badge';
import { userActions, userSelectors } from '../../store/user';
import loginIcon from '../../assets/icons/login.svg';
import userIcon from '../../assets/icons/user.svg';
import styles from './Header.module.css';


const enum LoginText {
  loggedOut = 'Войти',
  loggedIn = 'Выйти'
}

const addActiveClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : '';

export function Header() {
  const userName = useAppSelector(userSelectors.selectUserName);
  const userFavorites = useAppSelector(userSelectors.selectFavorites);
  const dispatch = useAppDispatch();

  const loginText = userName ? LoginText.loggedIn : LoginText.loggedOut;

  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <header className={styles.header}>
      <Wrapper className={styles.headerWrapper} main>
        <Logo />
        <Navigation>
          <NavigationItem>
            <NavLink to='/' className={addActiveClass} end>Поиск фильмов</NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/favorites' className={addActiveClass}>Мои фильмы</NavLink>
            { userFavorites && <Badge variant='circle'>{ userFavorites.length }</Badge> }
          </NavigationItem>
          { userName && (
            <NavigationItem>
              { userName }
              <img src={userIcon} alt='Иконка пользователя' />
            </NavigationItem>)
          }
          <NavigationItem active={true}>
            { userName
              ? <span onClick={logout}>{ loginText }</span>
              : <NavLink to='/login' className={addActiveClass} end>{ loginText }</NavLink>
            }
            <img src={loginIcon} alt='Иконка входа' />
          </NavigationItem>
        </Navigation>
      </Wrapper>
    </header>
  );
}
