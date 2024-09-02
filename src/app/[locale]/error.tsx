"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "500 | Server Error",
};

export default function Error({ error }: { error: Error }) {
  console.error(error);

  return <div>500 | Server Error</div>;
}
