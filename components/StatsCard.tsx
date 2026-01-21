export default function StatsCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="bg-[#F6F7F6] border-3 border-white rounded-md p-4">
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <p className="text-[#636363] text-sm font-medium">{title}</p>
          <div className="text-2xl text-[#202020] font-medium">{value}</div>
        </div>
      </div>
    </div>
  );
}
