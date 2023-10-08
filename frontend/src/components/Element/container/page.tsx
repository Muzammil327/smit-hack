export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto xl:px-8 lg:px-4 md:px-0 px-3">
      {children}
    </div>
  );
}
