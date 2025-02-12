import starIcon from '../../../../assets/icons/star.svg';
import styles from './CardRating.module.css';


interface Props {
  rating: number
}

export function CardRating({ rating }: Props) {
  return (
    <div className={styles.cardRating}>
      <img src={starIcon} />
      <span>{ rating }</span>
    </div>
  );
}