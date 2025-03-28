import { useState, useRef, useEffect, FormEventHandler, ChangeEventHandler, Dispatch } from 'react';
import { useQuery } from './hooks/useQuery.hook';
import { filterFilms, sortFilms, mapFilms } from './SearchForm.utils';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import searchIcon from '../../../../assets/icons/search.svg';
import { FilmCard } from '../../../../types/filmCard.interface';


interface Props {
  setFilms: Dispatch<React.SetStateAction<FilmCard[]>>
};

export function SearchForm({ setFilms }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

  const { sendRequest, data, loading } = useQuery();

  useEffect(() => {

    if (!data?.description.length) {
      setFilms([]);
      return;
    }

    const films: FilmCard[] = data.description
      .filter(filterFilms)
      .sort(sortFilms)
      .slice(0, 12)
      .map(mapFilms);

    console.log('FILMS: ', films);

    setFilms(films);
  }, [data, setFilms]);

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

    if (!inputRef.current?.value) return;

    sendRequest(inputRef.current.value.trim());
    
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
