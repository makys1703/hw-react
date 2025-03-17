import { useState } from 'react';
import { FavoriteButton } from '../../../../components/FavoriteButton';
import { CardImage } from './components/CardImage';
import { CardBody } from './components/CardBody';
import { Heading } from '../../../../components/Heading';
import { RatingBadge } from '../../../../components/RatingBadge';
import { FilmCard } from '../../../../types/film.interface';
import styles from './Card.module.css';


interface Props extends FilmCard{
  openCard: () => void
};

export function Card({ title, rating, image, openCard }: Props) {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  
  const toggleStatus = () => setIsAdded(status => !status);

  return (
    <div className={styles.card} onClick={openCard}>
      <RatingBadge className={styles.cardBadge} rating={rating}/>
      <CardImage src={image} />
      <CardBody>
        <Heading level={5}>{ title }</Heading>
        <FavoriteButton status={isAdded} toggleStatus={toggleStatus}/>
      </CardBody>
    </div>
  );
}