import React from 'react';
import { MessageCircle, Bookmark, Heart } from 'lucide-react';
import { trpc } from '../../../utils/trpc'; // Adjust the import path as necessary

interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: User;
}

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  draft: boolean;
  comments: Comment[];
  authorAvatar?: string;
  date: string;
  tags: string[];
  reactions: number;
  readTime: string;
}

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  const { data: author, isLoading: authorLoading, error: authorError } = trpc.user.getById.useQuery({ id: post.createdById });
  const { data: commentCountData, isLoading: commentCountLoading, error: commentCountError } = trpc.post.getCommentCount.useQuery({ postId: post.id });
  const { data: reactionCountData, isLoading: reactionCountLoading, error: reactionCountError } = trpc.post.getReactionCount.useQuery({ postId: post.id });

  if (authorLoading || commentCountLoading || reactionCountLoading) {
    return <div>Loading...</div>;
  }

  if (authorError || commentCountError || reactionCountError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="max-w mx-auto bg-white border rounded-lg overflow-hidden mb-4">
      <div className="p-3">
        <div className="flex items-center mb-0">
          <img 
            src={post.authorAvatar ?? "/avatar-1.jpg"}
            alt={`${author?.name} Avatar`}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-sm text-gray-700">{author?.name}</h3>
            <p className="text-xs text-gray-600">{post.date}</p>
          </div>
        </div>

        <div className="ml-12">
            <h2 className="text-xl font-bold mb-2">
                <a href={`/posts/${post.id}`} className="text-black hover:text-blue-700">
                {post.title}
                </a>
            </h2>

            <div className="flex flex-wrap gap-2 mb-3">
              {/* {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-gray-600">#{tag}</span> */}
              {/* ))} */}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center space-x-2">
                    <Heart size={16} className="text-red-500 fill-current" />
                    <span>{reactionCountData?.count ?? 0} reactions</span>

                    <MessageCircle size={16} className="ml-1" />
                    <span>{commentCountData?.count ?? 0} comments</span>
                </div>

                <div className="flex items-center space-x-4">
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