'use client';

import Image from 'next/image';

export default function UserAvatar({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  return (
    <div className="flex h-8 w-8 items-center justify-center">
      {image ? (
        <Image
          alt={name || '?'}
          className="h-full w-full rounded-md object-cover"
          height={32}
          src={image}
          width={32}
        />
      ) : (
        <span className="font-bold text-white">{name ? name[0] : '?'}</span>
      )}
    </div>
  );
}
