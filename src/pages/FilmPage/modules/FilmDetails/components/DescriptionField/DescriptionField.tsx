import styles from './DescriptionField.module.css';


interface Props {
  label: string,
  text: string
};

export function DescriptionField({ label, text }: Props) {
  return (
    <div className={styles.field}>
      <div className={styles.label}>{ label }</div>
      <div className={styles.text}>{ text }</div>
    </div>
  );
}