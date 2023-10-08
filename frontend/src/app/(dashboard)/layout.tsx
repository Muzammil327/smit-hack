import Sidebar from '@/src/components/sidebar/page'
import '../../styles/main.scss'

export default function DashboardLayout({
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