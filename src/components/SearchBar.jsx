"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const route = useRouter();

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (search) {
            params.set("search", search);
        }
        route.push(`/browse-lawyers?${params.toString()}`);
    };

    return (
        <div className="relative flex items-center">
            {" "}
            <input
                type="text"
                 onClick={handleSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by lawyer or title..."
                className="w-80 xl:w-96 rounded-full border border-gray-300 bg-white py-2.5 pl-12 pr-5 text-sm text-gray-700 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
            <FiSearch className="absolute left-4 text-lg text-gray-400" />
            <button
               
                className="absolute right-2 rounded-full bg-blue-600 px-5 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
