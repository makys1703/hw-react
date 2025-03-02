import { useReducer, useContext, ChangeEventHandler, FormEventHandler, useEffect, useCallback } from 'react';
import { useLocalStorage } from '../../../../hooks/useLocalStorage.hook';
import { UserContext, UserContextData } from './../../../../context/User/user.context';
import { 
  loginFormReducer, 
  setValueActionCreator, 
  submitActionCreator,
  resetActionCreator,
  INITIAL_STATE,
  Control } from './LoginForm.reducer';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { User } from '../../../../types/user.interface';


export function LoginForm() {
  const [formState, dispatch] = useReducer(loginFormReducer, INITIAL_STATE);
  const { controls, isReadyToSubmit } = formState;

  const { logInUser } = useContext(UserContext) as UserContextData;
  const [localStorageUserData, setLocalStorageUserData] = useLocalStorage<User[]>('users', []);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(
      setValueActionCreator(event.target.name as Control, event.target.value)
    );
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(submitActionCreator());
  };

  const submitUserLogin = useCallback(() => {
    const foundUser = localStorageUserData.find(({ name }) => name === controls.name.value);

    if (foundUser) {
      logInUser(foundUser);
      return;
    }
    
    const newUser: User = { name: controls.name.value };
    setLocalStorageUserData([...localStorageUserData, newUser]);
    logInUser(newUser);
  }, [localStorageUserData, setLocalStorageUserData, logInUser, controls.name.value]);

  useEffect(() => {
    if (!isReadyToSubmit) {
      return;
    }

    submitUserLogin();
    dispatch(resetActionCreator());
  }, [isReadyToSubmit, submitUserLogin]);

  return (
    <Form direction='column' onSubmit={onSubmit}>
      <Input placeholder='Ваше имя' name='name' value={controls.name.value} onChange={onChange} />
      <div>
        <Button type='submit'>
          Войти в профиль
        </Button>
      </div>
    </Form>
  );
}