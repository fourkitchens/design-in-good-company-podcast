'use client'

import * as Fathom from 'fathom-client';
import { useAudioPlayer } from '@/components/AudioProvider'

export function EpisodePlayButton({ episode, playing, paused, ...props }) {
  let player = useAudioPlayer(episode)

  return (
    <button
      type="button"
      onClick={() => {
        player.toggle();
        if (!player.playing) {
          Fathom.trackEvent(`Playing: ${episode.title}`);
        }
      }}
      aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
        episode.title
      }`}
      {...props}
    >
      {player.playing ? playing : paused}
    </button>
  )
}
