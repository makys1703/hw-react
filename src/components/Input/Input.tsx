import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input(props: Props) {
  return (
    <label>
      <input type='text' {...props} />
    </label>
  );
}