import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import DefaultLayout from '../layout';
import { IconBlock } from '../components/IconBlock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingAnimation } from '../components/LoadingAnimation';
import { GetStaticProps, NextPage } from 'next';
import { getIconsFromDb } from './api/icons';
import clientPromise from '../lib/mongodb';

interface IconType {
  _id: string;
  name: string;
  type: string;
  svg: string;
  shorthand: string;
  updatedAt: string;
}

const PAGE_SIZE = 100;

const Home: NextPage<{ data: IconType[] }> = ({ data }) => {
  const [icons, setIcons] = useState<IconType[]>([...data]);
  const [page, setPage] = useState<number>(icons.length > 0 ? 1 : 0);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalIconCount, setTotalIconCount] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/icons?type=icons&page=${page + 1}&pagination=${PAGE_SIZE}`)
      .then((res) => {
        setIcons((previousData) => {
          return [...previousData, ...res.data];
        });
        setLoading(false);
      });
  }, [page, setIcons]);

  useEffect(() => {
    axios.get('/api/icons?type=metadata').then((res) => {
      setTotalIconCount(res.data.length);
    });
  }, []);

  const isFinished =
    totalIconCount > 0 && icons.length >= totalIconCount ? true : false;

  return (
    <DefaultLayout>
      <Header iconCount={totalIconCount} />
      <SearchBar />
      <div className="px-5 mx-auto w-full max-w-6xl">
        <div className="p-5 mt-5 w-full rounded-xl border">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {icons.map((item, _idx) => (
              <IconBlock {...icons[_idx]} key={item._id} />
            ))}
          </div>
          <div
            onClick={() => setPage(page + 1)}
            className="p-5 mt-12 w-full rounded-xl border border-gray-300 cursor-pointer"
          >
            {!loading ? (
              <div className="flex justify-center items-center text-lg font-bold text-gray-600">
                <h5>Load More</h5>
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            ) : (
              <LoadingAnimation />
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialPage: number = 1;
  const initialPagination: number = 100;
  const client: any = await clientPromise;
  const initialIconsList = await getIconsFromDb(
    client,
    initialPage,
    initialPagination
  );
  const stringifiedData = JSON.stringify(initialIconsList);
  const data = JSON.parse(stringifiedData);

  return { props: { data } };
};

export default Home;
