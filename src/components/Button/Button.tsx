import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
}

export function Button({ text }: Props) {
	return (
		<button className={styles.button}>
			{ text }
		</button>
	);
}