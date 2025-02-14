import { useState } from 'react';
import { FavoriteButton } from '../../../../components/FavoriteButton';
import { CardImage } from '../../components/CardImage';
import { CardBody } from '../../components/CardBody';
import { Heading } from '../../../../components/Heading';
import { Badge } from '../../../../components/Badge';
import { Film } from '../../../../types/film';
import starIcon from '../../../../assets/icons/star.svg';
import styles from './Card.module.css';


export function Card({ name, rating, imageSrc }: Film) {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const toggleStatus = () => setIsAdded(status => !status);

  return (
    <div className={styles.card}>
      <Badge className={styles.cardBadge}>
        <img src={starIcon} alt='Звезда' />
        { rating }
      </Badge>
      <CardImage src={imageSrc} />
      <CardBody>
        <Heading level={5}>{ name }</Heading>
        <FavoriteButton status={isAdded} toggleStatus={toggleStatus}/>
      </CardBody>
    </div>
  );
}