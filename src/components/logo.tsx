import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/hometownhappenings.png"
        alt="Hometown Happenings Logo"
        width={350}
        height={175}
        className="mt-6 opacity-90"
      />
    </Link>
  );
}
