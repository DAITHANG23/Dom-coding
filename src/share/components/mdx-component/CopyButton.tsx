"use client";
import { CheckIcon } from "@/icons/CheckIcon";
import ClipboardIcon from "@/icons/ClipboardIcon";
import { Button } from "@mui/material";
import React, { useState } from "react";

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onClickCopy = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(text);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };
  const Icon = isCopied ? <CheckIcon /> : <ClipboardIcon />;
  return (
    <Button disabled={isCopied} onClick={onClickCopy}>
      {Icon} <span>{isCopied ? "Copied" : "Copy"}</span>
    </Button>
  );
};

export default CopyButton;
