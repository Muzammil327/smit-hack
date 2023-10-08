import Provider from "@/src/components/Provider/page";
import Header from "@/src/components/layouts/header/page";
import Footer from "@/src/components/layouts/footer/page";
import '../styles/main.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
