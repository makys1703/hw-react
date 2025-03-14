import { PageHeading } from '../../modules/PageHeading';
import { Paragraph } from '../../components/Paragraph';


export function NotFoundPage() {
  return (
    <>
      <PageHeading title='Ошибка'>
        <Paragraph variant='small'>
          Страница не найдена.
        </Paragraph>
      </PageHeading>
    </>
  );
}
