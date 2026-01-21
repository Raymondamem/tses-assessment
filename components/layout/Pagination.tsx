import ArrowDown from "@/components/icons/ArrowDown";

export default function Pagination({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between pt-6 ${className}`}>
      <button className="flex items-center gap-2 px-4 py-2.5 bg-[#FDFDFD] border border-[F0F0F0] rounded-full text-[#636363] font-medium text-sm hover:bg-[#F6F7F6] transition-colors">
        <span>Show 10/page</span>
        <ArrowDown />
      </button>
      <div className="flex items-center gap-2">
        <button className="px-2 py-1.5 text-[#636363] text-sm hover:text-gray-900 font-medium">
          Prev
        </button>
        <button className="w-8 h-8 bg-[#0A60E1] text-white text-sm font-semibold rounded-full flex items-center justify-center">
          01
        </button>
        {[2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="w-8 h-8 text-[#0A60E1] text-sm border border-[#0A60E1] rounded-full hover:border-blue-500 hover:text-[#0A60E1] transition-colors font-medium"
          >
            {String(page).padStart(2, "0")}
          </button>
        ))}
        <button className="w-8 h-8 text-[#0A60E1] text-sm border border-[#0A60E1] rounded-full hover:border-blue-500 hover:text-[#0A60E1] transition-colors font-medium">
          ...
        </button>
        <button className="w-8 h-8 text-[#0A60E1] text-sm border border-[#0A60E1] rounded-full hover:border-blue-500 hover:text-[#0A60E1] transition-colors font-medium">
          24
        </button>
        <button className="px-2 py-1.5 text-[#0A60E1] text-sm hover:text-gray-900 font-medium">
          Next
        </button>
      </div>
    </div>
  );
}
