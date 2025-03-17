import { Review } from './components/Review';
import { IReview } from '../../../../types/review.interface';
import styles from './FilmReview.module.css';


interface Props {
  review: IReview
};

export function FilmReview({ review }: Props) {
  return (
    <div className={styles.reviewBlock}>
      <div className={styles.reviewLabel}>Отзывы</div>
      <Review {...review} />
    </div>
  );
}