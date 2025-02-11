import { MainLayout } from './layouts/MainLayout';
import { Paragraph } from './components/Paragraph';
import { InputGroup } from './components/InputGroup';
import { Input } from './components/Input';
import { PageHeading } from './modules/PageHeading';
import { Form } from './components/Form';
import { Button } from './components/Button';
import searchIcon from './assets/icons/search.svg';
import { FormEventHandler, useRef } from 'react';


const searchIconSize = 24;

export function App() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    if (!searchInputRef.current?.value.trim()) return;

    console.log('Submit!');
    console.log('Search input value:', searchInputRef.current.value.trim());

    searchInputRef.current.value = '';
  };

  return (
    <MainLayout>
      <PageHeading title='Поиск'>
        <Paragraph variant="small">
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </PageHeading>
      <Form direction='row' onSubmit={submitHandler}>
        <InputGroup>
          <img src={searchIcon} width={searchIconSize} height={searchIconSize} />
          <Input name='name' placeholder='Введите название' ref={searchInputRef} />
        </InputGroup>
        <Button type='submit' text="Найти" />
      </Form>
    </MainLayout>
  );
}
