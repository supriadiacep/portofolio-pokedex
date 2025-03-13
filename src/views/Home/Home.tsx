import { FC } from 'react'
import { HeroSection } from '@/components/Hero/HeroSection'
import { ListSection } from '@/components/List/ListSection'
import { Footer } from '@/components/Footer'

export const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <ListSection />
      <Footer />
    </>
  )
}
