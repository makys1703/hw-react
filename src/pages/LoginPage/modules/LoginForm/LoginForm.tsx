import { useRef, useState, useContext, ChangeEventHandler, FormEventHandler } from 'react';
import { useLocalStorage } from '../../../../hooks/useLocalStorage.hook';
import { UserContext, UserContextData } from './../../../../context/User/user.context';
import { Form } from '../../../../components/Form';
import { InputGroup } from '../../../../components/InputGroup';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { User } from '../../../../types/user.interface';


export function LoginForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const { logInUser } = useContext(UserContext) as UserContextData;
  const [localStorageUserData, setLocalStorageUserData] = useLocalStorage<User[]>('users', []);

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
    const foundUser = localStorageUserData.find(({ name }) => name === value);

    inputRef.current.value = '';

    if (foundUser) {
      logInUser(foundUser);
      return;
    }

    const newUser: User = { name: value };
    
    setLocalStorageUserData([...localStorageUserData, newUser]);
    logInUser(newUser);
  };

  return (
    <Form direction='column' onSubmit={onSubmit}>
      <InputGroup>
        <Input placeholder='Ваше имя' ref={inputRef} onFocus={onFocus} onChange={onChange} />
      </InputGroup>
      <div>
        <Button type='submit' disabled={touched && !valid}>
          Войти в профиль
        </Button>
      </div>
    </Form>
  );
}