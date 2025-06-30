"use client";

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
        <img
          src={image}
          alt={name || "?"}
          className="object-cover w-full h-full rounded-md"
        />
      ) : (
        <span className="text-white font-bold">{name ? name[0] : "?"}</span>
      )}
    </div>
  );
}
