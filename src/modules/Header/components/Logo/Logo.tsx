import { Link } from 'react-router';
import logoIcon from '../../../../assets/icons/logo.svg';

const iconSize = 40;

export function Logo() {
  return (
    <Link to='/'>
      <img src={logoIcon} width={iconSize} height={iconSize} alt='Логотип' />
    </Link>
  );
}