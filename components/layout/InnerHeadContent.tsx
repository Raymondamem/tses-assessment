export default function InnerHeadContentLayout({
  children1,
  children2,
}: {
  children1: React.ReactNode;
  children2: React.ReactNode;
}) {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {children1}
      <div className="bg-white p-6 border-none rounded-md">{children2}</div>
    </div>
  );
}
