'use client'

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { trpc } from '~/utils/trpc';
import { useSession, SessionProvider } from 'next-auth/react';

import SearchBar from "./_components/searchBar";
import "./style/default.css";
import RightBar from "./_components/home/rightBar";
import BlogCard from './_components/home/blogCard';
import WeeklyChallenges from './_components/home/weeklyChallenges';
import { sampleChallenges } from './_components/home/sampleChallenges';

const HomeContent = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<any[]>([]);

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
  ];

  const { data: postsData, error } = session
    ? trpc.post.getAllPosts.useQuery()
    : trpc.post.getAllPostsPublic.useQuery();

  useEffect(() => {
    if (postsData) {
      setPosts(postsData);
    }
    if (error) {
      console.error('Error fetching posts:', error);
    }
  }, [postsData, error]);

  const onSearch = (query: string) => {
    console.log('Search query:', query);
    // Add your search logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>DEV Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SearchBar onSearch={onSearch} />

        <div className="container mainContent flex flex-1 mt-2">
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
                  <div key={index}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              <div className="w-1/3">
                <div className="container mx-auto mb-4">
                  <WeeklyChallenges challenges={sampleChallenges} />
                </div>

                <div className="bg-white p-4 border rounded">
                  <h3 className="font-bold">#discuss</h3>
                  <p className="font-light text-xs mb-2">Discussion threads targeting the whole community</p>
                  <div className="border-b mb-4"></div>
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
  );
};

export default function Home() {
  return (
    <SessionProvider>
      <HomeContent />
    </SessionProvider>
  );
}