import logoIcon from '../../../../assets/icons/logo.svg';

const iconSize = 40;

export function Logo() {
  return (
    <a href="/">
      <img src={logoIcon} width={iconSize} height={iconSize} alt="Логотип" />
    </a>
  );
}