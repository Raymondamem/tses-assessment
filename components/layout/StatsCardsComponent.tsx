import { TrendingUp } from "lucide-react";
import TotalCoursesIcon from "@/components/icons/TotalCoursesIcon";
import TotalEnrollIcon from "@/components/icons/TotalEnrollIcon";
import AvgCompIcon from "@/components/icons/AvgCompIcon";
import TradingIcon from "@/components/icons/TradingIcon";
import StatsCard from "@/components/StatsCard";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Courses Card */}
      <StatsCard
        icon={<TotalCoursesIcon />}
        title="Total Courses"
        value={123}
      />

      {/* Total Enrollments Card */}
      <StatsCard
        icon={<TotalEnrollIcon />}
        title="Total Enrollments"
        value={11}
      />

      {/* Avg Completion Card */}
      <StatsCard
        icon={<AvgCompIcon />}
        title="Avg Completion"
        value={
          <div className="flex items-end justify-between">
            <p className="text-2xl text-[#202020] font-medium">99%</p>
            <p className="text-green-600 text-xs font-medium flex items-center gap-0.5 ml-8">
              <TradingIcon />
              <span>12% up from last month</span>
            </p>
          </div>
        }
      />
    </div>
  );
}
