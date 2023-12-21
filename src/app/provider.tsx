"use client";

import { NextUIProvider } from "@nextui-org/react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
