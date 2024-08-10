import React from 'react';
import { MessageCircle, Bookmark, Heart } from 'lucide-react';

interface Post {
    id: string;
    author: string;
    authorAvatar?: string;
    date: string;
    title: string;
    tags: string[];
    reactions: number;
    comments: number;
    readTime: string;
  }
  
  const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="max-w mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img 
            src={post.authorAvatar || "/api/placeholder/40/40"}
            alt={`${post.author} Avatar`}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{post.author}</h3>
            <p className="text-sm text-gray-600">{post.date}</p>
          </div>
        </div>
        <div className="ml-12">
            <h2 className="text-xl font-bold mb-2">
                <a href={`/posts/${post.id}`} className="text-black hover:text-blue-700">
                {post.title}
                </a>
            </h2>
            <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-600">#{tag}</span>
            ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                    <Heart size={16} className="text-red-500 fill-current" />
                    <span>{post.reactions} reactions</span>

                    <MessageCircle size={16} className="ml-1" />
                    <span>{post.comments} comments</span>
                </div>
                <div className="flex items-center space-x-4">
                    {/* <div className="flex items-center">
                    </div> */}
                    <span>{post.readTime} read</span>
                    <Bookmark size={16} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;