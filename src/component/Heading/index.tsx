import { ComponentProps } from "react";

import { ScopedStyle, createScopedStyleId } from "../../hooks/ScopedStyle.tsx";

type Props = ComponentProps<"h1"> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const HeadingId = createScopedStyleId();

export function Heading({ level, children, ...rest }: Props) {
  const Tag = `h${level}` as const;

  return (
    <>
      <ScopedStyle id={HeadingId}>
        {`
          h1:scope { color: green; }
          h2:scope { color: orange; }
          h3:scope { color: purple; }
          h4:scope { color: pink; }
          h5:scope { color: brown; }
          h6:scope { color: gray; }
        `}
      </ScopedStyle>
      <Tag className={`${HeadingId} heading`} {...rest}>
        {children}
      </Tag>
    </>
  );
}
