import { parse as parseFeed } from 'rss-to-json'
import { array, number, object, string } from 'valibot'

export async function getAllEpisodes() {
  let FeedSchema = object({
    items: array(
      object({
        id: number(),
        title: string(),
        published: number(),
        description: string(),
        content: string(),
        enclosures: array(
          object({
            url: string(),
            type: string(),
          }),
        ),
      }),
    ),
  })

  var feed = await parseFeed('https://feeds.buzzsprout.com/2355315.rss');
  const items = feed.items;

  let episodes = items.map(
    ({ id, title, description, content, enclosures, published }) => ({
      id,
      title,
      published: new Date(published),
      description,
      content,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }),
  )

  return episodes
}
