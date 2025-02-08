import { PropsWithChildren, DetailedHTMLProps, HTMLAttributes} from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface Props extends PropsWithChildren, DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  level?: HeadingLevel
}

export function Heading({ children, level = 1 }: Props) {
  switch (level) {
  case 1:
    return <h1>{children}</h1>;
  case 2:
    return <h2>{children}</h2>;
  case 3:
    return <h3>{children}</h3>;
  case 4:
    return <h4>{children}</h4>;
  case 5:
    return <h5>{children}</h5>;
  case 6:
    return <h6>{children}</h6>;
  default:
    return <h1>{children}</h1>;
  }
}