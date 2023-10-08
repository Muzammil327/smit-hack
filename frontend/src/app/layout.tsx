import "../styles/main.scss";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <>
      {children}
     </>
  );
}
