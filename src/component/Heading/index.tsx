import { ComponentProps } from "react";

type Props = ComponentProps<"h1"> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const HeadingId = crypto.randomUUID();

export function Heading({ level, children, ...rest }: Props) {
  const Tag = `h${level}` as const;

  return (
    <>
      <style
        href={HeadingId}
        precedence="medium"
      >{`h1 { color: green; } h2 { color: orange; } h3 { color: purple; } h4 { color: pink; } h5 { color: brown; } h6 { color: gray; }`}</style>
      <Tag className="heading" {...rest}>
        {children}
      </Tag>
    </>
  );
}
