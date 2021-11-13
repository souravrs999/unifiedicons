import { useRef, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import useOnScreen from '../hooks/useOnScreen';
import DefaultLayout from '../layout';
import fetcher from '../lib/fetcher';
// import useSWRInfinite from 'swr/infinite';
import { IconBlock } from '../components/IconBlock';
import useSWRInfinite from 'react-swr-infinite-scroll';
import InfiniteScroll from 'react-swr-infinite-scroll';

const PAGE_SIZE = 100;

// const getKey = (
//   pageIndex: number,
//   previousPageData: any[],
//   pageSize: number
// ) => {
//   console.log('page index = ', pageIndex);
//   // console.log(previousPageData[0]);
//   if (previousPageData && !previousPageData.icons.length) return null;
//   console.log(
//     `/api/icons?type=icons&pagination=${pageSize}&page=${pageIndex + 1}`
//   );

//   return `/api/icons?type=icons&pagination=${pageSize}&page=${pageIndex + 1}`;
// };

function Home() {
  // const ref = useRef<HTMLDivElement>(null);
  // const isVisible = useOnScreen(ref);

  // const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
  //   (...args) => getKey(...args, PAGE_SIZE),
  //   fetcher
  // );

  // const icons = data ? [].concat(...data[0].icons) : [];
  // console.log('icons length ----->', icons.length);

  // const isLoadingInitialData = !data && !error;
  // const isLoadingMore =
  //   isLoadingInitialData ||
  //   (size > 0 && data && typeof data[size - 1] === 'undefined');
  // const isEmpty = data?.[0]?.icons?.length === 0;
  // const isReachingEnd = size === PAGE_SIZE;
  // const isRefreshing = isValidating && data && data.length === size;

  // useEffect(() => {
  //   if (isVisible && !isReachingEnd && !isRefreshing) {
  //     setSize(size + 1);
  //   }
  // }, [isVisible, isRefreshing]);

  const swr = useSWRInfinite(
    (index: number, prev: any[]) =>
      `/api/icons?type=icons&pagination=100&page=${index + 1}`,
    {
      fetcher: async (key) => fetch(key).then((res) => res.json())
    }
  );

  return (
    <DefaultLayout>
      <Header />
      <SearchBar />
      <div className="px-5 mx-auto w-full max-w-6xl">
        <div className="p-5 mt-5 w-full rounded-xl border">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {/* {icons.map((item, _idx) => (
              <IconBlock
                {...icons[_idx]}
                key={`${item.provider}-${item.name}-${item.type}`}
              /> */}
            ))}
            {/* {icons.map((item, _idx) => {
              // return <IconBlock {...icons[_idx]} key={item} />;
              console.log(item);
            })} */}
            <InfiniteScroll
            swr={swr}
            loadingIndicator="Loading..."
            endingIndicator="All icons shown"
            isReachingEnd={(swr) => swr.data?.[0]?.icons?.lenght === 0 || swr.data?.[swr.data?.icons?.length - 1]?.icons?.length < 100} >
              {(res) => res?.map((item) => (
                <div className="w-5 h-5 bg-blue-300">
                  item.name
                </div>)
              )}
              </InfiniteScroll>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
