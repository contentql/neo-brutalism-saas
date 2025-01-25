import TeamImage from '../../public/group.jpg'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className='inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center'>
      <div className='max-w-full px-5 py-20'>
        <figure className='relative mb-8 h-80 w-full max-w-lg rounded-md border-2 border-border'>
          <Image
            src={TeamImage}
            alt='team image'
            fill
            className='object-cover'
          />
        </figure>

        <h1 className='text-balance text-3xl font-heading md:text-4xl lg:text-5xl'>
          Hey 👋 we’re Contra.
        </h1>
        <p className='my-12 mt-4 text-balance text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed'>
          Join the Club and explore what’s making waves in our community.
        </p>

        <Button
          size='lg'
          className='h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl'>
          Get started
        </Button>
      </div>
    </section>
  )
}
