interface Props {
  text?: string
};

const DEFAULT_TEXT = 'Загрузка...';

export function Fallback({ text = DEFAULT_TEXT }: Props) {
  return (
    <p>{ text }</p>
  );
};