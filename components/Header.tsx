import { FunctionComponent } from 'react';
import { getTotalIconCount } from '../lib/icons';

export const Header: FunctionComponent = () => {
  return (
    <div className="flex flex-col px-5 py-12">
      <div className="w-full bg-gradient-to-br from-purple-700 to-purple-500 rounded-xl shadow-lg rotate-2 sm:p-5">
        <div className="flex flex-col bg-white rounded-xl shadow-lg -rotate-2 lg:flex-row">
          <div className="flex flex-col row-start-1 p-5 space-y-5 w-full lg:w-2/3">
            <div className="p-3 w-14 h-14 bg-gradient-to-br from-purple-700 to-purple-500 rounded-xl">
              <svg
                className="w-full text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <p className="text-lg font-bold text-transparent uppercase bg-clip-text bg-gradient-to-br from-purple-700 to-purple-500 lg:text-xl">
              unified icons
            </p>
            <h5 className="text-4xl font-black text-blue-gray-800 capitalize md:text-5xl lg:text-6xl">
              Huge collection of beautiful SVG icons in one spot
            </h5>
            <p className="text-lg font-medium text-gray-500 md:text-xl lg:text-2xl">
              Unified icons by ourselves is not an icon provider instead we just
              bring all these awesome icons to a single spot so that you dont
              have to go through multiple sites searching for the icon that
              suits your needs.
            </p>
            <div className="flex items-center space-x-3 bg-clip-text bg-gradient-to-br from-purple-700 to-purple-500">
              <p className="text-lg font-bold text-transparent uppercase">
                Check out the icons
              </p>
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>
          <div className="p-3 w-full border-t border-gray-200 lg:border-l lg:w-1/3">
            <div className="px-3 py-5 w-full">
              <h3 className="text-xl font-bold text-blue-gray-700">Features</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-2">
              <div className="flex justify-center p-3 space-x-1 bg-purple-100 rounded-xl">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-purple-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-sm font-semibold text-gray-600">
                  {getTotalIconCount()} icons
                </p>
              </div>
              <div className="flex justify-center p-3 space-x-1 bg-purple-100 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
                <p className="text-sm font-semibold text-gray-600">
                  Multi variant
                </p>
              </div>
              <div className="flex justify-center p-3 space-x-1 bg-purple-100 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-semibold text-gray-600">
                  Brand icons
                </p>
              </div>
              <div className="flex justify-center p-3 space-x-1 bg-purple-100 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
                <p className="text-sm font-semibold text-gray-600">
                  Opensource
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-1">
              <div className="flex justify-center items-center px-3 py-5 w-full rounded-xl border border-purple-200">
                <p className="text-lg font-semibold text-gray-500">
                  Contribute on Github
                </p>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="ml-3 w-7 h-7 text-gray-500"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </div>
              <div className="flex justify-center items-center px-3 py-5 w-full rounded-xl border border-purple-200">
                <p className="text-lg font-semibold text-gray-500">
                  Share on Facebook
                </p>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="ml-3 w-7 h-7 text-gray-500"
                >
                  <path
                    fill="currentColor"
                    d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5H8V9H6V7h2V6c0-1.653 1.347-3 3-3h2v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2H10v7h4.5c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5z"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center px-3 py-5 w-full rounded-xl border border-purple-200">
                <p className="text-lg font-semibold text-gray-500">
                  Tweet about us
                </p>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="ml-3 w-7 h-7 text-gray-500"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                </svg>
              </div>
              <div className="flex justify-center items-center px-3 py-5 w-full rounded-xl border border-purple-200">
                <p className="text-lg font-semibold text-gray-500">
                  Bookmark this page
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 w-7 h-7 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
