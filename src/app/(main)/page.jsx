import Link from 'next/link'

import { Container } from '@/components/Container'
import { getAllEpisodes } from '@/lib/episodes'
import { EpisodeEntry } from '@/components/EpisodeEntry'

export default async function Home() {
  let episodes = await getAllEpisodes()

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-leafyGreen">
          Episodes
        </h1>
      </Container>
      <div className="divide-y divide-whippedCream-400 sm:mt-4 lg:mt-8 lg:border-t lg:border-whippedCream-100">
        {episodes.map((episode) => (
          <EpisodeEntry key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  )
}

export const revalidate = 10
