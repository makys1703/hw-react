import { useState, useRef, FormEventHandler, ChangeEventHandler } from 'react';
import { useAppSelector } from '../../../../hooks/useAppSelector.hook';
import { useAppDispatch } from '../../../../hooks/useAppDispatch.hook';
import { filmsActions, filmsSelectors } from '../../../../store/films';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import searchIcon from '../../../../assets/icons/search.svg';


export function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const dispatch = useAppDispatch();
  const loading = useAppSelector(filmsSelectors.selectFilmsLoading);

  const onFocus = () => {
    if (!touched) {
      setTouched(true);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.trim().length < 2) {
      setValid(() => false);
    } else {
      setValid(true);
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!inputRef.current?.value?.trim()) return;

    dispatch(filmsActions.loadFilmByQuery(inputRef.current?.value?.trim()));
    
    inputRef.current.value = '';
  };

  return (
    <Form direction='row' onSubmit={onSubmit}>
      <Input
        name='name'
        placeholder='Введите название'
        ref={inputRef}
        iconSrc={searchIcon}
        onFocus={onFocus}
        onChange={onChange}
      />
      <Button type='submit' disabled={touched && !valid || loading}>
        Найти
      </Button>
    </Form>
  );
}
