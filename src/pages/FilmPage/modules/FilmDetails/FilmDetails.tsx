import { Paragraph } from '../../../../components/Paragraph';
import { FilmHeader } from './components/FilmHeader';
import { FilmInfo } from './components/FilmInfo';
import { ButtonSection } from './components/ButtonSection';
import { DescriptionField } from './components/DescriptionField';
import { Film } from '../../../../types/film.interface';
import styles from './FilmDetails.module.css';


export function FilmDetails({ name, rating, imageSrc }: Film) {
  return (
    <div className={styles.filmDetails}>
      <FilmHeader>
        { name }
      </FilmHeader>
      <FilmInfo>
        <div className={styles.imageColumn}>
          <img src={imageSrc} alt='Постер фильма' loading='lazy' />
        </div>
        <div className={styles.infoColumn}>
          <Paragraph>
            After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.
          </Paragraph>
          <ButtonSection rating={rating} />
          <DescriptionField label='Тип' text='Movie' />
          <DescriptionField label='Дата выхода' text='2019-04-24' />
          <DescriptionField label='Длительность' text='181 мин' />
          <DescriptionField label='Жанр' text='Adventure,  Science Fiction, Action' />
        </div>
      </FilmInfo>
    </div>
  );
}