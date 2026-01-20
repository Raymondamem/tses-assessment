import { TrendingUp } from "lucide-react";
import TotalCoursesIcon from "@/components/icons/TotalCoursesIcon";
import TotalEnrollIcon from "@/components/icons/TotalEnrollIcon";
import AvgCompIcon from "@/components/icons/AvgCompIcon";
import TradingIcon from "@/components/icons/TradingIcon";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Courses Card */}
      <div className="bg-[#F6F7F6] border-3 border-white rounded-md p-4">
        <div className="flex items-start gap-4">
          <TotalCoursesIcon />
          <div>
            <p className="text-[#636363] text-sm font-medium">Total courses</p>
            <p className="text-2xl text-[#202020] font-medium">123</p>
          </div>
        </div>
      </div>

      {/* Total Enrollments Card */}
      <div className="bg-[#F6F7F6] border-3 border-white rounded-md p-4">
        <div className="flex items-start gap-4">
          <TotalEnrollIcon />
          <div>
            <p className="text-[#636363] text-sm font-medium">
              Total Enrollments
            </p>
            <p className="text-2xl text-[#202020] font-medium">11</p>
          </div>
        </div>
      </div>

      {/* Avg Completion Card */}
      <div className="bg-[#F6F7F6] border-3 border-white rounded-md p-4">
        <div className="flex items-start gap-4">
          <AvgCompIcon />
          <div className="flex-1">
            <p className="text-[#636363] text-sm font-medium">Avg Completion</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl text-[#202020] font-medium">99%</p>
              <p className="text-green-600 text-xs font-medium flex items-center gap-0.5">
                <TradingIcon />
                <span>12% up from last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
