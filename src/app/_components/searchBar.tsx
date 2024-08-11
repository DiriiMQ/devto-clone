import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<HeaderProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSearch(query);
    };

    return (
      <div className="bg-white border-b pt-1 pb-2 fixed top-0 left-0 w-full z-50">
        <header className="container flex flex-auto justify-between items-center">
          <div className="flex space-x-3">
            <Image src="/dev-logo.png" alt="DEV" width={50} height={40} />
            {/* Search Bar */}
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-[600px] py-2 pl-8 pr-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black" size={16} />
            </form>
          </div>
          {/* Auth Buttons */}
          <div>
            <button className="text-gray-800 hover:bg-blue-100 hover:text-blue-600 hover:underline font-medium py-2 px-4 rounded transition-all mr-2">Log in</button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-4 rounded-md transition-all">
              Create account
            </button>
          </div>
        </header>
      </div>
    );
};

export default SearchBar;