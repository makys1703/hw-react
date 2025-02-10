import { MainLayout } from './layouts/MainLayout';
import { Paragraph } from './components/Paragraph';
import { InputGroup } from './components/InputGroup';
import { Input } from './components/Input';
import { PageHeading } from './modules/PageHeading';
import { Form } from './components/Form';
import { Button } from './components/Button';
import searchIcon from './assets/icons/search.svg';

const searchIconSize = 24;

export function App() {
  return (
    <MainLayout>
      <PageHeading title='Поиск'>
        <Paragraph variant="small">
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </PageHeading>
      <Form direction='row'>
        <InputGroup>
          <img src={searchIcon} width={searchIconSize} height={searchIconSize} />
          <Input placeholder='Введите название' />
        </InputGroup>
        <Button text="Найти" onClick={() => console.log('clicked!')} />
      </Form>
    </MainLayout>
  );
}
