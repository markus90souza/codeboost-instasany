'use client'
import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  card01,
  card02,
  card03,
  card04,
  card05,
  card06,
  phone,
} from '@/assets/instasany'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export const HomeFeatures: FC = () => {
  const mockupPhoneRef = useRef(null)
  const titleRef = useRef(null)
  const featuresRef = useRef(null)
  const card01Ref = useRef(null)
  const card02Ref = useRef(null)
  const card03Ref = useRef(null)
  const card04Ref = useRef(null)
  const card05Ref = useRef(null)
  const card06Ref = useRef(null)

  const animateCards = (images: null[], position: number) => {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'center center',
        },
      },
    )
  }
  useEffect(() => {
    const cardsLeft = [card01Ref.current, card02Ref.current, card03Ref.current]
    const cardsRight = [card04Ref.current, card05Ref.current, card06Ref.current]

    gsap.fromTo(
      mockupPhoneRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power5.out',
      },
    )

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: '65% center',
        },
      },
    )

    animateCards(cardsLeft, 50)
    animateCards(cardsRight, -50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="w-full pb-20" ref={featuresRef}>
      <Image
        ref={mockupPhoneRef}
        className="sticky z-10 mx-auto -mt-[32rem] mb-16 opacity-0 md:top-56"
        src={phone}
        alt=""
      />

      <h2
        ref={titleRef}
        className="mb-56 text-center text-5xl font-medium text-black opacity-0 md:text-7xl"
      >
        Faça <span className="text-instasany-brand-light">você</span> mesmo de
        casa
      </h2>

      <div className="relative mx-auto h-[35.125rem] w-full max-w-[82.5rem]">
        <Image
          ref={card01Ref}
          src={card01}
          alt=""
          className="absolute left-44 top-8"
        />
        <Image
          ref={card02Ref}
          src={card02}
          alt=""
          className="absolute bottom-32 left-0"
        />
        <Image
          ref={card03Ref}
          src={card03}
          alt=""
          className="absolute bottom-0 left-80"
        />
        <Image
          ref={card04Ref}
          src={card04}
          alt=""
          className="absolute right-32 top-0"
        />
        <Image
          ref={card05Ref}
          src={card05}
          alt=""
          className="absolute bottom-28 right-0"
        />
        <Image
          ref={card06Ref}
          src={card06}
          alt=""
          className="absolute bottom-0 right-80"
        />
      </div>
    </section>
  )
}
