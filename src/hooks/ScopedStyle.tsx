import { type FC } from "react";

export function createScopedStyleId() {
  return `C${crypto.randomUUID()}`;
}

type StyleProps = {
  id: string;
  children: string;
};

export const ScopedStyle: FC<StyleProps> = ({ id, children }) => {
  const scopedRules = `@scope (.${id}) to (:scope .${id}) {${children}};`;

  return (
    <style href={id} precedence="medium">
      {scopedRules}
    </style>
  );
};
