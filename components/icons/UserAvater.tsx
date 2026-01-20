import Image from "next/image";

export default function UserAvatar() {
  return (
    <Image src="/user-avater.webp" className="block object-cover w-12 h-12 rounded-full " alt="User Avatar" width={48} height={48} />
  );
}
