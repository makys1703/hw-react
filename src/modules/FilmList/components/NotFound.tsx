import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import styles from './NotFound.module.css';


export function NotFound() {
  return (
    <div className={styles.notFound}>
      <Heading level={2}>
        Упс... Ничего не найдено
      </Heading>
      <Paragraph>
        Попробуйте изменить запрос или ввести более точное название фильма
      </Paragraph>
    </div>
  );
}