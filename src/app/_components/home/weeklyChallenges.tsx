import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface Challenge {
  endDate: string;
  title: string;
  link: string;
  prize: string;
}

interface WeeklyChallengesProps {
  challenges: Challenge[];
}

const WeeklyChallenges: React.FC<WeeklyChallengesProps> = ({ challenges }) => {
  return (
    <div className="bg-white rounded-lg border p-4 max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-light flex items-center">
          <span className="mr-2">👋</span>
          What's happening this week
        </h2>
        <MoreHorizontal className="text-gray-400" />
      </div>

      <h3 className="text-xl font-bold mb-3 flex items-center">
        Challenges <span className="ml-2">🤓</span>
      </h3>

      {challenges.map((challenge, index) => (
        <div key={index} className="border-2 border-black rounded-lg p-3 mb-3 last:mb-0">
          <p className="text-sm text-gray-600 mb-1">Running until {challenge.endDate}</p>
          <a href={challenge.link} className="text-blue-600 font-medium underline hover:text-blue-800">
            {challenge.title}
          </a>
          <p className="text-sm text-gray-600 mt-1 italic">{challenge.prize}</p>
        </div>
      ))}

      <p className="mt-4 font-light">
        Have a great week <span className="text-red-500">❤️</span>
      </p>
    </div>
  );
};

export default WeeklyChallenges;
export type { Challenge, WeeklyChallengesProps };