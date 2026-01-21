import Image from "next/image";
// import PlayIcon from "@/components/icons/PlayIcon";

export default function VideoBanner({
  courseImage,
  course,
}: {
  courseImage: string | null;
  course: any;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative h-100">
      <Image
        src={courseImage || "/placeholder.svg"}
        alt={course.title}
        className="w-full h-full object-cover"
        width={800}
        height={450}
      />
      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit rounded-full">
        {/* <PlayIcon /> */}
        <Image src={"/mice.png"} alt="mice.png" width={48} height={48} />
      </button>
    </div>
  );
}
