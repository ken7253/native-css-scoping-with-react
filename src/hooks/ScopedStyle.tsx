import { type FC } from "react";

type StyleProps = {
  id: string;
  children: string;
};

export const ScopedStyle: FC<StyleProps> = ({ id, children }) => {
  const scopedRules = `@scope (.${id}) to (.${id}){${children}};`;

  return (
    <style href={id} precedence="medium">
      {scopedRules}
    </style>
  );
};
