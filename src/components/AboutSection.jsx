'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center text-sm font-medium leading-7 text-leafyGreen">
        <TinyWaveFormIcon
          colors={['fill-kitchensKelly-600', 'fill-kitchensKelly-800']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About Design in Good Company</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-leafyGreen',
          // !isExpanded && 'lg:line-clamp-4',
        )}
      >
        Your go-to podcast for where creativity, community, and values converge. Here at Four Kitchens, we&lsquo;re not just about making great designs, we&lsquo;re about making designs that do great things. 
      </p>
      {/* {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )} */}
    </section>
  )
}
