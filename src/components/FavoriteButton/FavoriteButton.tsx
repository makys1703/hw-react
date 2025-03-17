import { Button } from '../../components/Button';
import likeIcon from '../../assets/icons/like.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';
import { MouseEventHandler } from 'react';


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

  const onClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    toggleStatus();
  };

  return (
    <Button variant='transparent' onClick={onClick}>
      <img src={iconSrc} />
      { statusText }
    </Button>
  );
}