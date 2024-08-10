'use client'

import Head from 'next/head';
import Image from 'next/image';

import SearchBar from "./_components/searchBar";
import "./style/default.css";
import RightBar from "./_components/home/rightBar";
import BlogCard from './_components/home/blogCard';
import WeeklyChallenges from './_components/home/weeklyChallenges';
import { sampleChallenges } from './_components/home/sampleChallenges';

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
      id: '1',
      author: 'Arindam Majumder',
      authorAvatar: '/avatar-1.jpg',
      date: 'Aug 5',
      title: '8 Developer Tools You Should Try in 2024',
      tags: ['webdev', 'react', 'beginners', 'programming'],
      reactions: 101,
      comments: 22,
      readTime: '9 min read'
    },
    {
      id: '2',
      author: 'Arindam Majumder',
      authorAvatar: '/avatar-1.jpg',
      date: 'Aug 5',
      title: '8 Developer Tools You Should Try in 2024',
      tags: ['webdev', 'react', 'beginners', 'programming'],
      reactions: 101,
      comments: 22,
      readTime: '9 min read'
    }
  ] // for sample

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>DEV Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SearchBar />

        <div className="container flex flex-1 mt-6">
          <RightBar />

          <main className="flex-1">
            <div className="flex">
            <div className="w-3/4 pr-8">
              <nav className="mb-4 ml-2">
                <ul className="flex space-x-4 text-gl">
                  <li><a href="#" className="text-black font-bold">Relevant</a></li>
                  <li><a href="#" className="text-gray-600">Latest</a></li>
                  <li><a href="#" className="text-gray-600">Top</a></li>
                </ul>
              </nav>

              {posts.map((post, index) => (
                <BlogCard post={post} />
              ))}
            </div>

            <div className="w-1/3">
              <div className="container mx-auto mb-4">
                <WeeklyChallenges challenges={sampleChallenges} />
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
