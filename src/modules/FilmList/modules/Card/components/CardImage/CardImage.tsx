import styles from './CardImage.module.css';

interface Props {
  src: string
}

export function CardImage({ src }: Props) {
  return (
    <div className={styles.cardImage}>
      <img src={src} loading='lazy' />
    </div>
  );
}
