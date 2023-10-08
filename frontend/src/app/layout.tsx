import Provider from "@/src/components/Provider/page";
import Header from "@/src/components/layouts/header/page";
import Footer from "@/src/components/layouts/footer/page";
import '../styles/main.scss'
import { Component } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isBlogPage = Component.defaultProps?.router.pathname.startsWith('/blog');

  // Use the layout if it's not a blog page
  if (!isBlogPage) {
    return (
      <Provider>
           {children}
      </Provider>
    );
  }

  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
