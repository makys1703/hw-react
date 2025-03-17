import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
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

const addActiveClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : '';

export function Header() {
  const { userData, logOutUser } = useContext(UserContext) as UserContextData;
  const loginText = userData ? LoginText.loggedIn : LoginText.loggedOut;
  const navigate = useNavigate();

  const logout = () => {
    logOutUser();
    navigate('/');
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
            <Badge variant='circle'>2</Badge>
          </NavigationItem>
          { userData && (
            <NavigationItem>
              { userData.name }
              <img src={userIcon} alt='Иконка пользователя' />
            </NavigationItem>)
          }
          <NavigationItem active={true}>
            { userData 
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
