import React from "react";
import CopyButton from "./CopyButton";

export interface PreProps extends React.HTMLProps<HTMLPreElement> {
  raw: string;
  ["data-language"]?: string;
}

const PreWrapper: React.FC<PreProps> = ({
  children,
  raw,
  ["data-language"]: dataLanguage = "Shell",
  ...props
}) => {
  return (
    <pre {...props}>
      {children}
      <CopyButton text={raw} />
    </pre>
  );
};

// Export the PreWrapper as the default export
export default PreWrapper;
