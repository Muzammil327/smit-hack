import Sidebar from '@/src/components/sidebar/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <>
        <Sidebar />
      </>
      <>
        <div>{children}</div>
      </>
    </main>
  );
}
