import { PropsWithChildren, DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Paragraph.module.css';

interface Props extends PropsWithChildren, DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	variant?: 'normal' | 'small'
}

export function Paragraph({ children, variant = 'normal', ...props}: Props) {
  return (
    <p className={styles[variant]} {...props}>
      { children }
    </p>
  );
}