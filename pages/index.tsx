import type { GetStaticProps, NextPage } from 'next';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import DefaultLayout from '../layout';
import { IconBlock } from '../components/IconBlock';

import { getAllIcons } from '../lib/icons';

interface iconsListType {
  iconsList: {
    provider: string;
    name: string;
    type: string;
    svg: string;
  }[];
}

const Home: NextPage<iconsListType> = ({ iconsList }) => {
  return (
    <DefaultLayout>
      <Header />
      <SearchBar />
      <div className="px-5 mx-auto w-full max-w-6xl">
        <div className="p-5 mt-5 w-full rounded-xl border">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {iconsList.map((item, _idx) => (
              <IconBlock
                {...iconsList[_idx]}
                key={`${item.provider}-${item.name}-${item.type}`}
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const iconsList = getAllIcons();

  return { props: { iconsList } };
};

export default Home;
