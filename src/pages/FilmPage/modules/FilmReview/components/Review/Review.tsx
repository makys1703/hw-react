import { Paragraph } from '../../../../../../components/Paragraph';
import { IReview } from '../../../../../../types/review.interface';
import styles from './Review.module.css';


export function Review({ title, text, date }: IReview) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.review}>
        <div className={styles.reviewHeader}>
          <div className={styles.headerTitle}>
            { title }
          </div>
          <div className={styles.headerDate}>
            { date }
          </div>
        </div>
        <Paragraph>
          { text }
        </Paragraph>
      </div>
    </div>
  );
};