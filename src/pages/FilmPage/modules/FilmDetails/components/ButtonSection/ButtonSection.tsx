import { RatingBadge } from '../../../../../../components/RatingBadge';
import { FavoriteButton } from '../../../../../../components/FavoriteButton';
import styles from './ButtonSection.module.css';


interface Props {
  rating: number
}

export function ButtonSection({ rating }: Props) {
  return (
    <div className={styles.buttonSection}>
      <RatingBadge rating={rating}/>
      <FavoriteButton status={false} toggleStatus={() => {}}/>
    </div>
  );
}