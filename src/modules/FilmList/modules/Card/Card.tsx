import { useAppDispatch } from '../../../../hooks/useAppDispatch.hook';
import { useAppSelector } from '../../../../hooks/useAppSelector.hook';
import { userActions, userSelectors } from '../../../../store/user';
import { FavoriteButton } from '../../../../components/FavoriteButton';
import { CardImage } from './components/CardImage';
import { CardBody } from './components/CardBody';
import { Heading } from '../../../../components/Heading';
import { RatingBadge } from '../../../../components/RatingBadge';
import { FilmCard } from '../../../../types/filmCard.interface';
import styles from './Card.module.css';


interface Props extends FilmCard {
  openCard: () => void
};

export function Card({ id, title, rating, image, openCard }: Props) {
  const dispatch = useAppDispatch();
  
  const favoriteStatus = useAppSelector(
    (state) => userSelectors.selectFavoriteStatus(state, id)
  );
  
  const toggleStatus = () => {
    dispatch(userActions.toggleFavorite(id));
  };

  return (
    <div className={styles.card} onClick={openCard}>
      <RatingBadge className={styles.cardBadge} rating={rating}/>
      <CardImage src={image} />
      <CardBody>
        <Heading level={5}>{ title }</Heading>
        <FavoriteButton status={favoriteStatus} toggleStatus={toggleStatus}/>
      </CardBody>
    </div>
  );
}