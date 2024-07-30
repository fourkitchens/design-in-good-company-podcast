import { PauseIcon } from '@/components/PauseIcon'
import { PlayIcon } from '@/components/PlayIcon'
import * as Fathom from 'fathom-client';

export function PlayButton({ player }) {
  let Icon = player.playing ? PauseIcon : PlayIcon

  return (
    <button
      type="button"
      className="group relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-kitchensKelly-700 hover:bg-kitchensKelly-900 focus:outline-none focus:ring-2 focus:ring-kitchensKelly-700 focus:ring-offset-2 md:h-14 md:w-14"
      onClick={() => {
        player.toggle();
        if (!player.playing) {
          Fathom.trackEvent(`Playing: ${player.episode.title}`);
        }
      }}
      aria-label={player.playing ? 'Pause' : 'Play'}
    >
      <div className="absolute -inset-3 md:hidden" />
      <Icon className="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7" />
    </button>
  )
}
