import { FC } from 'react'
import Image from 'next/image'
import { card01, card02, card03, card04, card05, card06, phone } from '@/assets'

export const HomeFeatures: FC = () => {
  return (
    <section className="w-full pb-20">
      <Image
        className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16"
        src={phone}
        alt=""
      />

      <h2 className="mb-56 text-center text-5xl font-medium text-black md:text-7xl">
        Faça <span className="text-instasany-brand-light">você</span> mesmo de
        casa
      </h2>

      <div className="relative mx-auto h-[35.125rem] w-full max-w-[82.5rem]">
        <Image src={card01} alt="" className="absolute left-44 top-8" />
        <Image src={card02} alt="" className="absolute bottom-32 left-0" />
        <Image src={card03} alt="" className="absolute bottom-0 left-80" />
        <Image src={card04} alt="" className="absolute right-32 top-0" />
        <Image src={card05} alt="" className="absolute bottom-28 right-0" />
        <Image src={card06} alt="" className="absolute bottom-0 right-80" />
      </div>
    </section>
  )
}
