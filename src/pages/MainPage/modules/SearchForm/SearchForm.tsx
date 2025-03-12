import { useState, useRef, FormEventHandler, ChangeEventHandler } from 'react';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import searchIcon from '../../../../assets/icons/search.svg';


export function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(false);

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
    
    console.log(inputRef.current.value.trim());
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
      <Button type='submit' disabled={touched && !valid}>
        Найти
      </Button>
    </Form>
  );
}
