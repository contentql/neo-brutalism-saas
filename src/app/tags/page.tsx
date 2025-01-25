import React from 'react'

import { Badge } from '@/components/ui/badge'
import tags from '@/data/tags.json'

const page = () => {
  return (
    <section className='container mx-auto'>
      <div className='flex gap-6'>
        {tags.map(tag => (
          <Badge key={tag.title}>{`# ${tag.title}`}</Badge>
        ))}
      </div>
    </section>
  )
}

export default page
