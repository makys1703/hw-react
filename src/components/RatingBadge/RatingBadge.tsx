import { Badge } from '../Badge';
import starIcon from '../../assets/icons/star.svg';


interface Props {
  rating: number,
  className?: string
}

export function RatingBadge({ rating, className }: Props) {
  return (
    <Badge className={className}>
      <img src={starIcon} alt='Звезда' />
      { rating }
    </Badge>
  );
}