import { CardImage } from '../CardImage';
import { CardBody } from '../CardBody';
import { Heading } from '../../../../components/Heading';
import { FavoriteButton } from '../FavoriteButton';
import { CardRating } from '../CardRating';
import { Film } from '../../../../types/film';
import styles from './Card.module.css';


export function Card({ name, rating, imageSrc }: Film) {
  return (
    <div className={styles.card}>
      <CardRating rating={rating} />
      <CardImage src={imageSrc} />
      <CardBody>
        <Heading level={5}>{ name }</Heading>
        <FavoriteButton />
      </CardBody>
    </div>
  );
}