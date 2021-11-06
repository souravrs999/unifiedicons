import { FunctionComponent, useState } from 'react';
import parse from 'html-react-parser';
import { formatSvgAttributesForReact } from '../utils/formatSVG';

interface IconBlockProps {
  name: string;
  svg: string;
}

export const IconBlock: FunctionComponent<IconBlockProps> = ({ name, svg }) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const copySvgSnippet: () => void = () => {
    setShowAlert(true);
    navigator.clipboard.writeText(svg);
    const timer: NodeJS.Timeout = setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <div className="flex relative flex-col p-5 w-full rounded-xl border group">
      <div className="grid place-items-center h-20 text-gray-500">
        {parse(formatSvgAttributesForReact(svg))}
      </div>
      <div className="mt-3 w-full text-center">
        <p className="font-semibold text-gray-500">{name}</p>
      </div>

      <div className="hidden absolute top-0 right-0 justify-center items-center w-full h-full text-gray-600 bg-white cursor-pointer group-hover:flex">
        <div
          onClick={copySvgSnippet}
          className="place-items-center w-20 h-20 font-bold text-center rounded-full transition duration-500 ease-in-out group-hover:grid hover:bg-purple-500 hover:text-white"
        >
          SVG
        </div>
      </div>
      {showAlert ? (
        <div className="fixed right-5 bottom-5 z-20 bg-white rounded-lg border shadow-lg">
          <div className="flex items-center p-3 space-x-3">
            <p className="text-base text-gray-600">Copied SVG to clipboard</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
