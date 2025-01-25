import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import Community from '@/sections/community'
import Faq from '@/sections/faq'
import Pricing from '@/sections/pricing'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Community />
      <Faq />
      <Pricing />
    </>
  )
}
