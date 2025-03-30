import { useRef, useState, ChangeEventHandler, FormEventHandler, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../../hooks/useAppDispatch.hook';
import { useAppSelector } from '../../../../hooks/useAppSelector.hook';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { userActions, userSelectors } from '../../../../store/user';
import styles from './LoginForm.module.css';


export function LoginForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(userSelectors.selectAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

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

    const name = inputRef.current?.value?.trim();

    if (!name) return;

    dispatch(userActions.login(name));
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