import Link from "next/link";
import BackIcon from "@/components/icons/BackIcon";

interface PageHeaderProps {
  title: string;
  backHref: string;
}

export default function PageHeader({ title, backHref }: PageHeaderProps) {
  return (
    <div className="px-8 py-6 max-w-7xl mx-auto w-full shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={backHref} className="rounded-lg transition-colors">
            <BackIcon />
          </Link>
          <h1 className="text-[1.5rem] font-medium text-[#202020]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
