'use client'

import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { useState } from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import clsx from 'clsx'

function PauseIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
      />
    </svg>
  )
}

function PlayIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
    </svg>
  )
}

export function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)
  let [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2 text-2xl font-bold text-kitchensKelly-700 hover:text-kitchensKelly-800 hover:underline"
          >
            <Link href={`/${episode.id}`}>{episode.title}</Link>
          </h2>
          <FormattedDate
            date={date}
            className="order-first text-xs font-semibold uppercase leading-7 text-leafyGreen"
          />
          <div 
          className={clsx("mt-1 text-base leading-7 text-leafyGreen prose prose-slate ", !isExpanded && 'line-clamp-3',)}
          dangerouslySetInnerHTML={{ __html: episode.description }}></div>
          
          <div className="mt-4 flex items-center gap-4">
            <EpisodePlayButton
              episode={episode}
              className="flex items-center gap-x-3 text-base font-bold leading-6 text-kitchensKelly-600 hover:text-kitchensKelly-700 active:text-kitchensKelly-900"
              playing={
                <>
                  <PauseIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Listen</span>
                </>
              }
              paused={
                <>
                  <PlayIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Listen</span>
                </>
              }
            />
            <span
              aria-hidden="true"
              className="text-sm font-bold text-leafyGreen/40"
            >
              /
            </span>
            <Link
              href={`/${episode.id}`}
              className="flex items-center text-sm font-semibold leading-6 text-leafyGreen"
              aria-label={`Show notes for episode ${episode.title}`}
            >
              Show notes
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}