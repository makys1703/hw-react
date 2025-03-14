import { ReviewsList } from './components/ReviewsList';
import { ReviewItem } from './components/ReviewItem';
import styles from './FilmReviews.module.css';


export function FilmReviews() {
  return (
    <div className={styles.filmReviews}>
      <div className={styles.reviewLabel}>Отзывы</div>
      <ReviewsList>
        <ReviewItem />
      </ReviewsList>
    </div>
  );
}