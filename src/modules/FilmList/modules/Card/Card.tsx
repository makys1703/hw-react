import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FavoriteButton } from '../../../../components/FavoriteButton';
import { CardImage } from './components/CardImage';
import { CardBody } from './components/CardBody';
import { Heading } from '../../../../components/Heading';
import { RatingBadge } from '../../../../components/RatingBadge';
import { Film } from '../../../../types/film.interface';
import styles from './Card.module.css';


export function Card({ id, name, rating, imageSrc }: Film) {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const toggleStatus = () => setIsAdded(status => !status);

  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/movie/${id}`)}>
      <RatingBadge className={styles.cardBadge} rating={rating}/>
      <CardImage src={imageSrc} />
      <CardBody>
        <Heading level={5}>{ name }</Heading>
        <FavoriteButton status={isAdded} toggleStatus={toggleStatus}/>
      </CardBody>
    </div>
  );
}