import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

const BlogsListingPage = () => {
  return (
    <section className='container mx-auto'>
      <Button variant='neutral' asChild>
        <Link href='/blogs/something'>Hello there</Link>
      </Button>
    </section>
  )
}

export default BlogsListingPage
