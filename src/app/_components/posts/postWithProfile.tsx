import React from 'react';
import Image from 'next/image';
import { Heart, MessageSquare, Bookmark, MoreHorizontal } from 'lucide-react';
import CommentSection, { Comment } from './commentSection';

interface PostWithProfileProps {
  post: {
    author: {
      name: string;
      username: string;
      avatar: string;
    };
    image: string;
    content: {
      title: string;
      description: string;
      tags: string[];
    };
    reactions: {
      likes: number;
      comments: number;
      bookmarks: number;
    };
    postedOn: string;
    comments: Comment[];
  };
  profile: {
    name: string;
    avatar: string;
    bio: string;
    location: string;
    education: string;
    pronouns: string;
    work: string;
    joined: string;
    recentPosts: {
      title: string;
      tags: string[];
    }[];
  };
}

const PostWithProfile: React.FC<PostWithProfileProps> = ({ post, profile }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-4">
      {/* Left Sidebar - Interactions */}
      <div className="lg:w-16 flex lg:flex-col justify-center items-center space-y-6">
        <button className="flex flex-col items-center">
          <Heart size={24} />
          <span>{post.reactions.likes}</span>
        </button>
        <button className="flex flex-col items-center">
          <MessageSquare size={24} />
          <span>{post.reactions.comments}</span>
        </button>
        <button className="flex flex-col items-center">
          <Bookmark size={24} />
          <span>{post.reactions.bookmarks}</span>
        </button>
        <button><MoreHorizontal size={24} /></button>
      </div>

      {/* Main Post Area */}
      <div className="flex-grow">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Post Image */}
          <div className="relative h-80">
            <Image src={post.image} alt="Post cover" layout="fill" objectFit="cover" />
            {/* <div className="absolute top-4 left-4 flex items-center space-x-2">
              <Image src={post.author.avatar} alt={post.author.name} width={40} height={40} className="rounded-full" />
              <div className="text-white">
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm">@{post.author.username}</p>
              </div>
            </div> */}
          </div>

          {/* Post Content */}
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3 space-y-1 mb-3">
              <Image src={post.author.avatar} alt={post.author.name} width={30} height={30} className="rounded-full" />
              <div>
                <span className="font-semibold">{post.author.name}</span>
                <span className="block text-gray-500 text-xs">Posted on {post.postedOn}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">{post.content.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.content.tags.map((tag, index) => (
                <span key={index} className="text-gray-600 text-sm">#{tag}</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{post.content.description}</p>
          </div>

          {/* Comment Section */}
          <CommentSection comments={post.comments} />
        </div>
      </div>

      {/* Right Sidebar - Profile */}
      <div className="w-full lg:w-[450px]">
        <div className="bg-white rounded-lg shadow-md mb-4">
          {/* <div className="flex items-center space-x-4 mb-4">
            <Image src={profile.avatar} alt={profile.name} width={60} height={60} className="rounded-full" />
            <div>
              <h2 className="font-bold text-xl">{profile.name}</h2>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md mt-2">Follow</button>
            </div>
          </div> */}

          {/* Color bar at the top */}
          <div className="h-6 bg-blue-400 rounded-t-lg"></div>
          
          <div className="pl-2 pt-4 pr-2">
            {/* Profile picture overlapping the color bar */}
            <div className="flex items-end -mt-6 mb-3 space-x-1">
              <Image 
                src={profile.avatar} 
                alt={profile.name} 
                width={50} 
                height={50} 
                className="rounded-full border-4 border-white"
              />

                <h2 className="font-bold mb-1">{profile.name}</h2>
            </div>
            
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              Follow
            </button>
          </div>
          
          <div className="p-4">
            <p className="text-gray-700 mb-4">{profile.bio}</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-600">LOCATION</p>
                <p>{profile.location}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">WORK</p>
                <p>{profile.work}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">JOINED</p>
                <p>{profile.joined}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* "More from..." section as a separate block */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="border-b pb-2 font-semibold text-lg mb-3">More from {profile.name}</h3>
          <ul className="space-y-3">
            {profile.recentPosts.map((recentPost, index) => (
              <li key={index} className="border-b pb-2 last:border-b-0 last:pb-0">
                <a href="#" className="text-gray-600 hover:text-blue-400 font-medium">{recentPost.title}</a>
                <div className="flex flex-wrap gap-1 mt-1">
                  {recentPost.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-gray-500">#{tag}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostWithProfile;