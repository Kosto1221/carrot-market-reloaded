import Link from "next/link";
import Image from "next/image";
import { FormatToTimeAgo, formatToWon } from "@/lib/utils";

interface ListProductProps {
  title: string;
  price: number;
  created_at: Date;
  photo: string;
  id: number;
}

export default function ListProduct({
  title,
  price,
  created_at,
  photo,
  id,
}: ListProductProps) {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image
          fill
          src={photo}
          alt={title}
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {FormatToTimeAgo(created_at.toString())}
        </span>
        <span className="text-lg font-semibold">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
}
