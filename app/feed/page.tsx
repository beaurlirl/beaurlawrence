import Link from 'next/link'
import { BLOG_POSTS, FEED_ITEMS } from '../data'

export default function FeedPage() {
  return (
    <main className="space-y-10">
      <section className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-retro">
          Feed
        </p>
        <h1 className="text-2xl font-medium text-zinc-900">
          Posts, drops, and media updates
        </h1>
        <p className="text-retro-dark">
          A living stream of studio notes, experiments, and visual studies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-zinc-900">Studio posts</h2>
        <div className="space-y-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              href={post.link}
              className="block rounded-xl border border-zinc-200/50 px-4 py-3 transition-colors hover:border-zinc-400/60 dark:border-zinc-800/60 dark:hover:border-zinc-600/80"
            >
              <h3 className="text-base font-medium text-zinc-900">
                {post.title}
              </h3>
              <p className="text-sm text-retro-dark">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-zinc-900">Media</h2>
        <div className="space-y-3">
          {FEED_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-zinc-200/60 px-4 py-3 text-sm text-retro-dark transition-colors hover:border-zinc-400/60 hover:text-zinc-900 dark:border-zinc-800/80 dark:hover:border-zinc-600/80"
            >
              <div>
                <p className="text-base font-medium text-zinc-900">
                  {item.title}
                </p>
                <p className="text-xs text-retro">{item.description}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-retro">
                {item.platform}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
