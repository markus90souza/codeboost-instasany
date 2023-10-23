import { FC } from 'react'
import Image from 'next/image'
import { Container } from '@/components/container'
import { fileIcon, hand2Icon, handIcon, mockup } from '@/assets'

export const HomeHero: FC = () => {
  return (
    <section className="bg-hero relative h-hero w-full overflow-hidden border-t border-t-instasany-brand-light bg-instasany-brand-dark bg-top bg-no-repeat pt-16">
      <Container className="flex flex-col items-center ">
        <div className="w-full max-w-hero text-center">
          <h3 className="mb-4 text-xl font-medium text-instasany-brand-light">
            Novo curso focado no Instragram
          </h3>
          <h1 className="mb-8 text-7xl/normal font-semibold text-white">
            Destrave as suas habilidades
          </h1>

          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={fileIcon} alt="" />
              <span className="font-medium text-white">
                Assinar lista de espera
              </span>
            </button>

            <button className="rounded-full bg-instasany-brand-default px-5 py-4 font-bold text-instasany-brand-light">
              Começar agora
            </button>
          </div>
        </div>

        <div className="relative mt-4 h-28 w-full max-w-grid-icons">
          <Image src={handIcon} alt="" className="absolute bottom-0 left-0" />
          <Image src={hand2Icon} alt="" className="absolute right-0 top-0" />
        </div>

        <div className="absolute -bottom-48 flex w-full max-w-grid-mockups justify-between">
          <Image
            src={mockup}
            alt=""
            className="relative left-[3.3rem] top-[1.1rem] -rotate-12"
          />
          <Image
            src={mockup}
            alt=""
            className="relative right-[3.3rem] top-[1.1rem] rotate-12"
          />
        </div>
      </Container>
    </section>
  )
}
