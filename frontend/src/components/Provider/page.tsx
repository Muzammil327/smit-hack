
import Header from "@/src/components/layouts/header/page";
import Footer from "@/src/components/layouts/footer/page";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Header />
      {children}
    <Footer />
    </>
  );
}
