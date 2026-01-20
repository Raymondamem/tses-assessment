import SearchBar from "@/components/SearchBar";
import ArrowDown from "@/components/icons/ArrowDown";
import CalenderIcon from "@/components/icons/CalenderIcon";

export default function SearchAndFilter() {
  return (
    <div className="flex items-center justify-between gap-4 mb-8">
      <SearchBar placeholder="Search Course" className="max-w-3/5!" />

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#FDFDFD] border border-[F0F0F0] rounded-full text-[#636363] font-medium text-sm hover:bg-[#F6F7F6] transition-colors">
          <span>Date</span>
          <CalenderIcon />
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#FDFDFD] border border-[F0F0F0] rounded-full text-[#636363] font-medium text-sm hover:bg-[#F6F7F6] transition-colors">
          <span>Category</span>
          <ArrowDown />
        </button>
      </div>
    </div>
  );
}
