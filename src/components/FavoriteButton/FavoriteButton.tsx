import { Button } from '../../components/Button';
import likeIcon from '../../assets/icons/like.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';
import styles from './FavoriteButton.module.css';


interface Props {
  status: boolean
  toggleStatus: () => void
}

const enum ButtonStatus {
  default = 'В избранное',
  added = 'В избраном'
};

export function FavoriteButton({ status, toggleStatus }: Props) {
  const iconSrc = status ? favoriteIcon : likeIcon;
  const statusText = status ? ButtonStatus.added : ButtonStatus.default;

  return (
    <Button variant='transparent' className={styles.favoriteButton} onClick={toggleStatus}>
      <img src={iconSrc} />
      { statusText }
    </Button>
  );
}