import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import DefaultLayout from '../layout';
import fetcher from '../lib/fetcher';
import useSWRInfinite from 'swr/infinite';
import { IconBlock } from '../components/IconBlock';

interface IconType {
  _id: string;
  name: string;
  type: string;
  svg: string;
  shorthand: string;
  updatedAt: string;
}

const PAGE_SIZE = 100;

function getKey(pageIndex: number, previousPageData: any, pageSize: number) {
  if (previousPageData && !previousPageData.length) return null;
  return `/api/icons?type=icons&page=${pageIndex + 1}&pagination=${pageSize}`;
}

function Home() {
  // const ref = useRef<HTMLDivElement>(null);
  // const isVisible = useOnScreen(ref);
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (...args) => getKey(...args, PAGE_SIZE),
    fetcher
  );

  const icons: IconType[] = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = size === PAGE_SIZE;
  const isRefreshing = isValidating && data && data.length === size;

  function handleLoad() {
    setSize(size + 1);
  }

  return (
    <DefaultLayout>
      <Header />
      <SearchBar />
      <div className="w-full max-w-6xl px-5 mx-auto">
        <div className="w-full p-5 mt-5 border rounded-xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {icons.map((item, _idx) => (
              <IconBlock {...icons[_idx]} key={item._id} />
            ))}
          </div>
          <div
            onClick={handleLoad}
            className="w-full p-5 mt-12 text-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl"
          >
            <h5 className="text-lg font-bold text-white">
              {isLoadingMore
                ? 'Loading...'
                : isReachingEnd
                ? 'No more icons'
                : 'Load More'}
            </h5>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
