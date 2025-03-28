import { Paragraph } from '../Paragraph';

interface Props {
  text?: string
};

const DEFAULT_TEXT = 'Загрузка...';

export function Fallback({ text = DEFAULT_TEXT }: Props) {
  return (
    <Paragraph>{ text }</Paragraph>
  );
};