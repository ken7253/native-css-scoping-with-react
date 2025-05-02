import { ReactNode } from "react";

import { ScopedStyle, createScopedStyleId } from "../../hooks/ScopedStyle.tsx";

const CardId = createScopedStyleId();

type Props = {
  title: string;
  children?: ReactNode;
};

export function Card({ title, children }: Props) {
  return (
    <>
      <ScopedStyle id={CardId}>{`* { color: black !important; }`}</ScopedStyle>
      <div className={`${CardId} card`}>
        <h3>{title}</h3>
        <hr />
        <div className={`${CardId}`}>{children}</div>
        <button>Click me</button>
      </div>
    </>
  );
}
