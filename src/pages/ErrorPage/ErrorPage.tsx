import { PageHeading } from '../../modules/PageHeading';
import { Paragraph } from '../../components/Paragraph';


interface Props {
  text: string
}

export function ErrorPage({ text }: Props) {
  return (
    <>
      <PageHeading title='Ошибка'>
        <Paragraph variant='small'>
          { text }
        </Paragraph>
      </PageHeading>
    </>
  );
}

export default ErrorPage;
