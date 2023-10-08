"use client";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Global Error",
  description: "Global Error",
};
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <div className="errorpage">
          <h1 className="error">Global Error</h1>
          <div className="page">Something went wrong!</div>
          <Link href="/" 
          className="py-2 px-6 bg-blue-400 text-white text-base">
            Go to Home page
          </Link>
        </div>
      </body>
    </html>
  );
}
