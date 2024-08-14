import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div className="bg-white border-b pt-1 pb-2 fixed top-0 left-0 w-full z-50">
      <header className="container flex flex-auto justify-between items-center">
        <div className="flex space-x-3">
          <Link href="/">
            <Image src="/dev-logo.png" alt="DEV" width={50} height={40} />
          </Link>
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

        {/* Auth Buttons or User Avatar */}
        <div className="relative">
          {session ? (
            <div className="flex items-center space-x-3">
              <Link href="/create-post">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-light py-1 px-2 rounded-md transition-all">
                  Create Post
                </button>
              </Link>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative focus:outline-none"
              >
                <Image src={session.user.image || "/avatar-1.png"} alt="User Avatar" width={40} height={40} className="rounded-full" />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </button>
            </div>
          ) : (
            <div>
              <Link href="/enter">
                <button className="text-gray-800 hover:bg-blue-100 hover:text-blue-600 hover:underline font-medium py-2 px-4 rounded transition-all mr-2">
                  Log in
                </button>
              </Link>
              <Link href="/enter">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-4 rounded-md transition-all">
                  Create account
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default SearchBar;