import type { ComponentProps } from "react";

type ItemProps = ComponentProps<"li">;

const ListItemId = crypto.randomUUID();

export function ListItem({ children, ...rest }: ItemProps) {
  return (
    <>
      <style href={ListItemId} precedence="medium">
        {".item {color: red;}"}
      </style>
      <li className="item" {...rest}>
        {children}
      </li>
    </>
  );
}

type GroupProps = ComponentProps<"ul">;

const ListGroupId = crypto.randomUUID();

export function ListGroup({ children, ...rest }: GroupProps) {
  return (
    <>
      <style href={ListGroupId} precedence="medium">
        {"#app .group {color: blue;}"}
      </style>
      <ul className="group" {...rest}>
        {children}
      </ul>
    </>
  );
}
