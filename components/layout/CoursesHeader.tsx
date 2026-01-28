import Link from "next/link";
import BackIcon from "@/components/icons/BackIcon";

interface CoursesHeaderProps {
  title: string;
}

export default function CoursesHeader({ title }: CoursesHeaderProps) {
  return (
    <div className="px-8 py-6 max-w-7xl mx-auto w-full shrink-0 sticky! top-0! bg-[#F6F7F6] z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => window.history.back()} className="rounded-lg transition-colors">
            <BackIcon />
          </button>
          <h1 className="text-[1.5rem] font-medium text-[#202020]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
