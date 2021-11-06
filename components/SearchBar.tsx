import { ChangeEvent, useState } from 'react';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="flex justify-center px-5 pb-12 mx-auto w-full max-w-2xl">
      <div className="relative w-full text-gray-500 rounded-xl shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5 top-1/3 w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          placeholder="Search for icons"
          className="p-5 pl-20 w-full text-lg text-gray-700 rounded-xl border border-gray-300 focus:outline-none"
        />
        <div
          onClick={() => setSearchValue('')}
          className="grid absolute right-5 top-1/3 place-items-center w-6 h-6 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
  );
};
