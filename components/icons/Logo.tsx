import Image from 'next/image';
export default function LogoIcon() {
  return (
    <Image src="/logo.png" alt="Logo" width={168} height={36} />
  );
}
