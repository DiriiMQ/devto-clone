'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DevToPost, { DevToPostProps } from '~/app/_components/devtoPost';
import { sampleDevToData } from '~/app/_components/sampleDevToData';
import SearchBar from '~/app/_components/searchBar';

import "../../style/default.css";
import PostWithProfile from '~/app/_components/posts/postWithProfile';

export default function Page({ params }: { params: { slug: string } }) {
  useEffect(() => {
    if (params.slug) {
      console.log(params.slug);
    }
  }, [params.slug]);

  const onSearch = (query: string) => {
    console.log('Search query:', query);
    // Add your search logic here
  };

  const postData = {
    author: {
      name: "Shrijal Acharya",
      username: "shricodev",
      avatar: "/avatar-1.jpg",
    },
    image: "/bg.png",
    content: {
      title: "Automate your Instagram Posts like a PRO with Cron jobs! 🚀",
      description: "In this easy-to-follow tutorial, you will learn how to build your own Instagram Automation tool from scratch with cron jobs. 😎",
      tags: ["python", "productivity", "programming", "tutorial"],
    },
    reactions: {
      likes: 14,
      comments: 12,
      bookmarks: 12,
    },
    postedOn: "Aug 10",
    comments: [
      {
        author: {
          name: "Rense Bakker",
          avatar: "/avatar-1.jpg"
        },
        date: "Aug 11",
        content: "You don't need a ref either. You can get the values of your inputs directly from the form data in the onChange or onSubmit event of your form.",
        likes: 3
      },
      {
        author: {
          name: "Syakir",
          avatar: "/avatar-1.jpg"
        },
        date: "Aug 11",
        content: "Would you mind sharing the snippet for that",
        likes: 1
      },
    ]
  };

  const profileData = {
    name: "Shrijal Acharya",
    avatar: "/avatar-1.jpg",
    bio: "Full Stack SDE • Open-Source Contributor • Collaborator @Oppia • Open for Collaborations 🤝",
    location: "Kathmandu, Nepal",
    education: "BTech in Computer Science",
    pronouns: "he/him",
    work: "Software Engineer",
    joined: "Jul 26, 2023",
    recentPosts: [
      {
        title: "Do this first if you are using an Auth Provider",
        tags: ["webdev", "javascript", "opensource", "programming"],
      },
      {
        title: "4 core developer tools I use in my daily life 🚀",
        tags: ["productivity", "devops", "opensource", "programming"],
      },
      {
        title: "Hey Chads, share your Neovim and Tmux Config",
        tags: ["discuss", "programming", "vim", "productivity"],
      },
    ],
  };

  return( 
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>DEV Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SearchBar onSearch={ onSearch } />

        {/* <DevToPost {...sampleDevToData} /> */}
        <PostWithProfile post={postData} profile={profileData} />
      </div>
    </div>
  );
};

