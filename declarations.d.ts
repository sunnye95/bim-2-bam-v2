import * as React from "react";
import type ArcContainer from "@arc-web/components";
import { ArcButton, ArcNavbar } from "@arc-web/components";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "arc-container": CustomElement<ArcContainer>;
      "arc-navbar": CustomElement<ArcNavbar>;
      "arc-button": CustomElement<ArcButton>;
    }
  }
}
