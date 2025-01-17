// src/share/components/mdx-component/MdxProvider.tsx
"use client";

import React, { createContext, useContext } from "react";
import { MDXProvider as MDXProviderOriginal } from "@mdx-js/react";

interface MdxContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: any; // Thay thế bằng kiểu dữ liệu chính xác nếu có
}

const MdxContext = createContext<MdxContextProps | null>(null);

interface MdxProviderProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: any; // Thay thế bằng kiểu dữ liệu chính xác nếu có
}

const MdxProvider: React.FC<MdxProviderProps> = ({ children, components }) => {
  return (
    <MdxContext.Provider value={{ components }}>
      <MDXProviderOriginal components={components}>
        {children}
      </MDXProviderOriginal>
    </MdxContext.Provider>
  );
};

export default MdxProvider;

export const useMdxContext = () => useContext(MdxContext);
