"use client";

import { ReactNode } from "react";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const ScrollWrapper = ({ children }: { children: ReactNode }) => {
  useScrollToHash();

  return <>{children}</>;
};

export default ScrollWrapper;
