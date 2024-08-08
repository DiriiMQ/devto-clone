'use client'

import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

import SearchBar from "./_components/searchBar";

export default function Home() {
  const sidebarItems = [
    { icon: '🏠', text: 'Home' },
    { icon: '🎙️', text: 'Podcasts' },
    { icon: '📹', text: 'Videos' },
    { icon: '🏷️', text: 'Tags' },
    { icon: '❓', text: 'DEV Help' },
    { icon: '🛒', text: 'Forem Shop' },
    { icon: '❤️', text: 'Advertise on DEV' },
    { icon: '🏆', text: 'DEV Challenges' },
    { icon: '✨', text: 'DEV Showcase' },
    { icon: 'ℹ️', text: 'About' },
    { icon: '📞', text: 'Contact' },
    { icon: '📚', text: 'Guides' },
    { icon: '🔄', text: 'Software comparisons' },
  ]

  const posts = [
    {
      author: 'Arindam Majumder',
      date: 'Aug 5',
      title: '8 Developer Tools You Should Try in 2024',
      tags: ['webdev', 'react', 'beginners', 'programming'],
      reactions: 101,
      comments: 22,
      readTime: '9 min read'
    }
  ] // for sample

  return (
    <div className="pl-8 pr-8 flex min-h-screen bg-gray-100">
      <Head>
        <title>DEV Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1">
        <SearchBar />

        <div className="flex flex-1">
          <aside className="w-64 p-2 bg-gray-100">
            <nav>
              <ul>
                {sidebarItems.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link href="#" className="flex items-center text-gray-700 hover:text-black">
                      <span className="mr-2">{item.icon}</span>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="flex-1 p-8">
            <div className="flex">
            <div className="w-3/4 pr-8">
              <nav className="mb-4">
                <ul className="flex space-x-4">
                  <li><a href="#" className="text-blue-600 font-bold">Relevant</a></li>
                  <li><a href="#" className="text-gray-600">Latest</a></li>
                  <li><a href="#" className="text-gray-600">Top</a></li>
                </ul>
              </nav>

              {posts.map((post, index) => (
                <article key={index} className="bg-white p-6 mb-4 rounded shadow">
                  <div className="flex items-center mb-2">
                    <Image src={`/avatar-${index + 1}.jpg`} alt={post.author} width={40} height={40} className="rounded-full mr-2" />
                    <div>
                      <h3 className="font-bold">{post.author}</h3>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <div className="mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="mr-2 text-gray-600">#{tag}</span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>❤️ {post.reactions} reactions</span>
                    <span>💬 {post.comments} comments</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="w-1/4">
              <div className="bg-white p-4 rounded shadow mb-4">
                <h3 className="font-bold mb-2">📅 What's happening this week</h3>

                <h4 className="font-bold">Challenges 🤓</h4>
                <div className="border border-gray-200 p-2 rounded mt-2">
                  <p className="text-sm">Running until August 18</p>
                  <a href="#" className="text-blue-600 text-sm">Build Better on Stellar: Smart Contract Challenge</a>
                  <p className="text-sm font-bold">50k in prizes!</p>
                </div>

                <p className="mt-2">Have a great week ❤️</p>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">#discuss</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm">I'm developing a minimalistic note-taking web app with custom widgets. Can you suggest any widgets you would like to see?</a>
                    <p className="text-xs text-gray-500">6 comments</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </main>
        </div>
      </div>
    </div>
  )
}
