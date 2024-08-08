import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <header className="bg-white flex justify-between items-center mb-4">
          <Image src="/dev-logo.png" alt="DEV" width={50} height={40} />
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-3 top-2 text-gray-400">🔍</span>
          </div>
          <div>
            <button className="text-blue-600 mr-4">Log in</button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">Create account</button>
          </div>
        </header>
    );
};