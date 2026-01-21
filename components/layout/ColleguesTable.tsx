import Image from "next/image";
import Pagination from "@/components/layout/Pagination";
import MessageIcon from "@/components/icons/MessageIcon";

export default function ColleguesTable({mockLearners}: {mockLearners: Array<{
  id: string;
  name: string;
  city: string;
  email: string;
  img: string;
}>}) {
  return (
    <div className="bg-white pb-6 border-none rounded-md">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#F0F0F0]">
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202020]">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202020]">
                City
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202020]">
                Email Address
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#202020]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockLearners.map((learner, index) => (
              <tr
                key={learner.id}
                className={`${mockLearners.length - 1 !== index ? "border-b border-[#F0F0F0]" : ""} hover:bg-gray-50 transition-colors`}
              >
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-fit h-fit rounded-fullshrink-0">
                      <Image
                        src={`${learner.img}`}
                        alt={learner.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full text-xs"
                      />
                    </div>
                    <span className="text-sm font-medium text-[#636363]">
                      {learner.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm text-[#636363]">
                  {learner.city}
                </td>
                <td className="px-6 py-3 text-sm text-[#636363]">
                  {learner.email}
                </td>
                <td className="px-6 py-3">
                  <button className="hover:bg-gray-100 rounded-lg transition-colors">
                    <MessageIcon setShade={false} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination className="px-6" />
    </div>
  );
}
