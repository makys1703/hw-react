import { useAppSelector } from '../../../../../../hooks/useAppSelector.hook';
import { useAppDispatch } from '../../../../../../hooks/useAppDispatch.hook';
import { userActions, userSelectors } from '../../../../../../store/user';
import { RatingBadge } from '../../../../../../components/RatingBadge';
import { FavoriteButton } from '../../../../../../components/FavoriteButton';
import styles from './ButtonSection.module.css';


interface Props {
  filmId: string,
  rating: number
}

export function ButtonSection({ filmId, rating }: Props) {

  const dispatch = useAppDispatch();

  const favoriteStatus = useAppSelector(
    (state) => userSelectors.selectFavoriteStatus(state, filmId)
  );
  
  const toggleStatus = () => {
    dispatch(userActions.toggleFavorite(filmId));
  };
  
  return (
    <div className={styles.buttonSection}>
      <RatingBadge rating={rating}/>
      <FavoriteButton status={favoriteStatus} toggleStatus={toggleStatus}/>
    </div>
  );
}