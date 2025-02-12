import { useState } from 'react';
import likeIcon from '../../../../assets/icons/like.svg';
import favoriteIcon from '../../../../assets/icons/favorite.svg';
import styles from './FavoriteButton.module.css';

const enum ButtonStatus {
  default = 'В избранное',
  added = 'В избраном'
};

export function FavoriteButton() {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const toggleStatus = () => setIsAdded(status => !status);

  const iconSrc = isAdded ? favoriteIcon : likeIcon;
  const statusText = isAdded ? ButtonStatus.added : ButtonStatus.default;

  return (
    <button className={styles.favoriteButton} onClick={toggleStatus}>
      <img src={iconSrc} />
      { statusText }
    </button>
  );
}