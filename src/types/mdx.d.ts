// global.d.ts
declare module "*.mdx" {
  import { ReactNode } from "react";

  const MDXComponent: (props: Record<string, unknown>) => ReactNode;
  export default MDXComponent;
}
