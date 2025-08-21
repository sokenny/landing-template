'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { X } from 'lucide-react'

export default function DelayedModal() {
  const [isVisible, setIsVisible] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(true)
  //   }, 3000)

  //   return () => clearTimeout(timer)
  // }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="relative w-full max-w-lg p-6">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold">Start Speaking Today</h2>
        <p className="mt-2 text-gray-600">
          Join thousands of language learners improving their speaking skills with Convo.
        </p>
        <button 
          onClick={() => {
            const url = new URL(window.location.href);
            url.searchParams.set('conversion', 'true');
            window.history.pushState({}, '', url);
            setIsVisible(false);
          }}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          id="probandou"
        >
          Try For Free
        </button>
      </Card>
    </div>
  )
} 