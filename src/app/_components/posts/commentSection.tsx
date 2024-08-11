import { Heart } from "lucide-react";
import Image from "next/image";

interface Comment {
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  likes: number;
}

const CommentSection: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* <p className="text-gray-700 mb-2">
        Please give it a like or share if you find this article helpful.
      </p>
      <p className="text-gray-700 mb-4">
        Happy coding!
      </p> */}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Top comments ({comments.length})</h3>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300">
          Subscribe
        </button>
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Add to the discussion"
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        ></textarea>
      </div>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-3 pb-3">
            <Image
              src={comment.author.avatar}
              alt={comment.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-grow">
              <div className="border p-2 rounded-lg">
                <div className="flex items-center justify-start">
                  <span className="text-gray-700 font-normal">{comment.author.name}</span>
                  <span className="text-gray-500 font-normal pr-2">•</span>
                  <span className="text-gray-500 text-sm">{comment.date}</span>
                </div>
                <p className="text-gray-800 my-2">{comment.content}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                  <Heart size={16} />
                  <span>{comment.likes} likes</span>
                </button>
                <button className="text-gray-500 hover:text-gray-700">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
export type { Comment };