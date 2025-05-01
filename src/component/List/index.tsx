import type { ComponentProps } from "react";

type ItemProps = ComponentProps<"li">;

export function ListItem({ children, ...rest }: ItemProps) {
  return <li {...rest}>{children}</li>;
}

type GroupProps = ComponentProps<"ul">;

export function ListGroup({ children, ...rest }: GroupProps) {
  return <ul {...rest}>{children}</ul>;
}
