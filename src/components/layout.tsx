export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>共通ヘッダー</h2>
      {children}
    </>
  );
}
