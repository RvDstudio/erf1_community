"use client";

import Image from "next/image";

export default function UserAvatar({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  return (
    <div className="flex items-center justify-center w-8 h-8">
      {image ? (
        <Image
          src={image}
          alt={name || "?"}
          className="object-cover w-full h-full rounded-md"
          width={32}
          height={32}
        />
      ) : (
        <span className="text-white font-bold">{name ? name[0] : "?"}</span>
      )}
    </div>
  );
}
