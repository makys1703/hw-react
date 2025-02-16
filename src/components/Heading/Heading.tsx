import { PropsWithChildren, DetailedHTMLProps, HTMLAttributes} from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface Props extends PropsWithChildren, DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  level?: HeadingLevel
}

export function Heading({ children, level = 1, ...props }: Props) {
  switch (level) {
  case 1:
    return <h1 {...props}>{children}</h1>;
  case 2:
    return <h2 {...props}>{children}</h2>;
  case 3:
    return <h3 {...props}>{children}</h3>;
  case 4:
    return <h4 {...props}>{children}</h4>;
  case 5:
    return <h5 {...props}>{children}</h5>;
  case 6:
    return <h6 {...props}>{children}</h6>;
  default:
    return <h1 {...props}>{children}</h1>;
  }
}