import { FC } from 'react'
import { HomeFeatures } from './components/home-features'
import { HomeHero } from './components/home-hero'

const HomePage: FC = () => {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
    </>
  )
}

export default HomePage
