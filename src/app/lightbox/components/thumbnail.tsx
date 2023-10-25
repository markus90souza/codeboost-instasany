'use client'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

type ThumbnailProps = {
  image: StaticImageData
  onClick?: () => void
}
export const Thumbnail: FC<ThumbnailProps> = ({ image, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-full w-full overflow-hidden rounded-md"
    >
      <Image
        src={image}
        alt=""
        sizes="100%"
        className="h-auto max-w-sm cursor-pointer transition-all ease-linear hover:scale-110"
      />
    </button>
  )
}
