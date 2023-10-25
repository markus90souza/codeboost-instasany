import { FC } from 'react'
import {
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
} from '@/assets/lightbox'

import { Thumbnail } from './components/thumbnail'

const LightboxPage: FC = () => {
  const images = [image01, image02, image03, image04, image05, image06]
  return (
    <section className="flex min-h-screen w-full items-start justify-center bg-zinc-950 px-3 py-10">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {images.map((image, index) => (
          <Thumbnail image={image} key={index} />
        ))}
      </div>
    </section>
  )
}

export default LightboxPage
