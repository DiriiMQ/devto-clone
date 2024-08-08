import React from 'react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

interface Author {
  name: string;
  avatarUrl: string;
  bio: string;
  joinDate: string;
}

interface Comment {
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
  content: string;
  likes: number;
}

interface RelatedPost {
  title: string;
  url: string;
  tags: string[];
}

interface Post {
  title: string;
  date: string;
  tags: string[];
  content: string[];
  heartCount: number;
  unicornCount: number;
  explodingCount: number;
  clapCount: number;
  fireCount: number;
  totalReactions: number;
  commentCount: number;
  saveCount: number;
}

interface DevToPostProps {
  post: Post;
  author: Author;
  comments: Comment[];
  relatedPosts: RelatedPost[];
}

const DevToPost: React.FC<DevToPostProps> = ({ post, author, comments, relatedPosts }) => {
  const reactions = [
    { emoji: '❤️', label: 'Heart', count: post.heartCount },
    { emoji: '🦄', label: 'Unicorn', count: post.unicornCount },
    { emoji: '🤯', label: 'Exploding', count: post.explodingCount },
    { emoji: '👏', label: 'Clap', count: post.clapCount },
    { emoji: '🔥', label: 'Fire', count: post.fireCount },
  ];

  return (
    <div className="w-full mx-auto p-4 font-sans">
      <div className="flex">
        {/* Left sidebar */}
        <div className="flex flex-col items-center mr-5 space-y-1">
          <button className="pt-2 hover:bg-gray-100 rounded">
            <Heart size={24} />
          </button>
          <span className="text-gray-500">{post.totalReactions}</span>
          <button className="pt-2 hover:bg-gray-100 rounded">
            <MessageCircle size={24} />
          </button>
          <span className="text-gray-500">{post.commentCount}</span>
          <button className="pt-2 hover:bg-gray-100 rounded">
            <Bookmark size={24} />
          </button>
          <span className="text-gray-500">{post.saveCount}</span>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <img src={author.avatarUrl} alt={author.name} className="w-10 h-10 rounded-full mr-2" />
            <div>
              <h2 className="font-bold">{author.name}</h2>
              <p className="text-sm text-gray-500">Posted on {post.date}</p>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex space-x-2 mb-4">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-sm">#{tag}</span>
            ))}
          </div>

          <div className="space-y-4 mb-4">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex space-x-2 mb-4">
            {reactions.map(({ emoji, label, count }, index) => (
              <span key={index} className="flex items-center">
                <span className="mr-1" role="img" aria-label={label}>{emoji}</span> {count}
              </span>
            ))}
          </div>

          <div className="border-t pt-4">
            <h3 className="font-bold mb-2">Top comments ({comments.length})</h3>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Subscribe</button>
            
            <div className="mt-4">
              <textarea className="w-full p-2 border rounded" placeholder="Add to the discussion" rows={3}></textarea>
            </div>

            {comments.map((comment, index) => (
              <div key={index} className="mt-4 border-t pt-4">
                <div className="flex items-start">
                  <img src={comment.author.avatarUrl} alt={comment.author.name} className="w-10 h-10 rounded-full mr-2" />
                  <div>
                    <h4 className="font-bold">{comment.author.name}</h4>
                    <p className="text-sm text-gray-500">{comment.date}</p>
                    <p className="mt-2">{comment.content}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <span className="flex items-center">
                        <span className="mr-1" role="img" aria-label="Heart">❤️</span> {comment.likes} likes
                      </span>
                      <button className="text-blue-500">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="ml-4 w-64">
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <img src={author.avatarUrl} alt={author.name} className="w-10 h-10 rounded-full mr-2" />
              <h3 className="font-bold">{author.name}</h3>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded">Follow</button>
            <p className="mt-2 text-sm">{author.bio}</p>
            <p className="mt-2 text-sm text-gray-500">JOINED<br />{author.joinDate}</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">More from {author.name}</h3>
            <ul className="space-y-2">
              {relatedPosts.map((post, index) => (
                <li key={index}>
                  <a href={post.url} className="text-blue-600 hover:underline">{post.title}</a>
                  <div className="flex space-x-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-gray-500">#{tag}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevToPost;
export type { DevToPostProps };