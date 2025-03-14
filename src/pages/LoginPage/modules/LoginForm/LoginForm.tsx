import { useRef, useState, useContext, ChangeEventHandler, FormEventHandler } from 'react';
import { useNavigate } from 'react-router';
import { useLocalStorage } from '../../../../hooks/useLocalStorage.hook';
import { UserContext, UserContextData } from './../../../../context/User/user.context';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { User } from '../../../../types/user.interface';
import styles from './LoginForm.module.css';


export function LoginForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const { logInUser } = useContext(UserContext) as UserContextData;
  const [localStorageUserData, setLocalStorageUserData] = useLocalStorage<User[]>('users', []);

  const navigate = useNavigate();

  const onFocus = () => {
    if (!touched) {
      setTouched(() => true);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.trim().length < 2) {
      setValid(() => false);
    } else {
      setValid(() => true);
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!inputRef.current?.value) return;

    const value = inputRef.current.value.trim();
    let user: User | undefined = localStorageUserData.find(({ name }) => name === value);

    if (!user) {
      user = { name: value };
    }

    setLocalStorageUserData([...localStorageUserData, user]);
    logInUser(user);
    navigate('/');
  };

  return (
    <Form className={styles.loginForm} direction='column' onSubmit={onSubmit}>
      <Input placeholder='Ваше имя' ref={inputRef} onFocus={onFocus} onChange={onChange} />
      <div>
        <Button type='submit' disabled={touched && !valid}>
          Войти в профиль
        </Button>
      </div>
    </Form>
  );
}