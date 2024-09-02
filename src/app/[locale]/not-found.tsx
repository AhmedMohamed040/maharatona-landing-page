import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Not Found",
};

export default function NotFound() {
  return <div>404 | This page could not be found.</div>;
}
