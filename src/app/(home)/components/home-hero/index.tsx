'use client'

import { FC, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { Container } from '@/components/container'
import { fileIcon, hand2Icon, handIcon, mockup } from '@/assets/instasany'
import gsap from 'gsap'

export const HomeHero: FC = () => {
  const heroTextRef = useRef(null)
  const mockupleftRef = useRef(null)
  const mockupRightRef = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
    )

    gsap.fromTo(
      mockupleftRef.current,
      { rotate: 0 },
      {
        rotate: -12,
        duration: 1,
      },
    )

    gsap.fromTo(
      mockupRightRef.current,
      { rotate: 0 },
      {
        rotate: 12,
        duration: 1,
      },
    )
  }, [])

  return (
    <section className="relative h-hero w-full overflow-hidden border-t border-t-instasany-brand-light bg-instasany-brand-dark bg-hero bg-center bg-no-repeat pt-16">
      <Container className="flex flex-col items-center ">
        <div
          ref={heroTextRef}
          className="w-full max-w-hero text-center opacity-0"
        >
          <h3 className="mb-4 text-xl font-medium text-instasany-brand-light">
            Novo curso focado no Instragram
          </h3>
          <h1 className="mb-8 text-5xl/normal font-semibold text-white md:text-7xl/normal">
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

        <div className="relative mt-4 hidden h-28 w-full md:max-w-grid-icons">
          <Image src={handIcon} alt="" className="absolute bottom-0 left-0" />
          <Image src={hand2Icon} alt="" className="absolute right-0 top-0" />
        </div>

        <div className="absolute -bottom-48 hidden w-full max-w-grid-mockups justify-between md:flex">
          <Image
            ref={mockupleftRef}
            src={mockup}
            alt=""
            className="relative left-[3.3rem] top-[1.1rem]"
          />
          <Image
            ref={mockupRightRef}
            src={mockup}
            alt=""
            className="relative right-[3.3rem] top-[1.1rem]"
          />
        </div>
      </Container>
    </section>
  )
}
