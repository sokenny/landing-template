'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ThankYouPage() {
 
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4'
        )}
      >
        ← Back
      </Link>
      
      <h1 
        className="text-4xl font-bold cursor-pointer hover:opacity-80"
      >
        THANK YOU PAGE!
      </h1>

      
    </div>
  )
}