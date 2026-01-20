{
  /* Search Bar */
}
import SearchIcon from "@/components/icons/SearchIcon";

export default function SearchBar({
  placeholder,
  className,
}: {
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`flex-1 max-w-93.25 ${className}`}>
      <div className="relative">
        <SearchIcon />
        <input
          type="text"
          placeholder={placeholder || "Search soludesk"}
          className={`w-full h-11 
                        p-4 
                        bg-white 
                        text-[#636363]!
                        border border-[#F0F0F0] 
                        rounded-4xl 
                        text-md 
                        focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 
                        transition-all
                        placeholder:text-[#636363]!`}
          style={{
            borderColor: "#F0F0F0",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
