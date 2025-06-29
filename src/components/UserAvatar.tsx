'use client'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function UserAvatar({ name, image }: { name: string, image?: string }) {
  return (
    <Avatar>
      {image ? (
        <img src={image} alt={name || '?'} className="aspect-square size-full rounded-full" />
      ) : null}
      <AvatarFallback>{name ? name[0] : '?'}</AvatarFallback>
    </Avatar>
  )
} 