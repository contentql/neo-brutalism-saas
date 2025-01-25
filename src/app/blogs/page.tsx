import Link from 'next/link'
import React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import blogs from '@/data/blogs.json'

const BlogsListingPage = () => {
  return (
    <section className='container mx-auto grid grid-cols-3 gap-6'>
      {blogs.map(({ title, description, slug, tags }) => (
        <Link href={`/blogs/${slug}`} key={title}>
          <Card className='h-full'>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tags.map(tag => (
                <Badge variant='neutral' key={tag}>{`# ${tag}`}</Badge>
              ))}
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  )
}

export default BlogsListingPage
