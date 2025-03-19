import { Paragraph } from '../../../../components/Paragraph';
import { FilmHeader } from './components/FilmHeader';
import { FilmInfo } from './components/FilmInfo';
import { ButtonSection } from './components/ButtonSection';
import { DescriptionField } from './components/DescriptionField';
import { IFilmDetails } from '../../../../types/filmDetails.interface';
import styles from './FilmDetails.module.css';


interface Props {
  data: Omit<IFilmDetails, 'review'>
}

export function FilmDetails({ data }: Props) {
  const genre = data.genre.join(', ');
  const duration = `${data.duration} мин`;

  return (
    <div className={styles.filmDetails}>
      <FilmHeader>
        { data.title }
      </FilmHeader>
      <FilmInfo>
        <div className={styles.imageColumn}>
          <img src={data.image} alt='Постер фильма' loading='lazy' />
        </div>
        <div className={styles.infoColumn}>
          <Paragraph>
            { data.description }
          </Paragraph>
          <ButtonSection rating={data.rating} />
          <DescriptionField label='Тип' text={data.type} />
          <DescriptionField label='Дата выхода' text={data.date} />
          <DescriptionField label='Длительность' text={duration} />
          <DescriptionField label='Жанр' text={genre} />
        </div>
      </FilmInfo>
    </div>
  );
}