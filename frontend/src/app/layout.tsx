'use client'
import "../styles/main.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from "next/navigation";
import Provider from "@/src/components/Provider/page";
import Header from "@/src/components/layouts/header/page";
import Footer from "@/src/components/layouts/footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   
  const pathname = usePathname();

  if (pathname === "/admin") {
      return <>
          {children}
      </>
  }


if (pathname === "/admin/attendance") {
  return <>
      {children}
  </>
}
if (pathname === "/admin/attendance/add") {
  return <>
      {children}
  </>
}
if (pathname === "/admin/course") {
  return <>
      {children}
  </>
}
if (pathname === "/admin/course/add") {
  return <>
      {children}
  </>
}
if (pathname === "/admin/student") {
  return <>
      {children}
  </>
}
if (pathname === "/admin/student/add") {
  return <>
      {children}
  </>
}
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
