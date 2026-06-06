"use client";

import { useEffect } from "react";

export function BodyClass({ value }: { value: string }) {
  useEffect(() => {
    document.body.dataset.page = value;
    return () => {
      delete document.body.dataset.page;
    };
  }, [value]);
  return null;
}
