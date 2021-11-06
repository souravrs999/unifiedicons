import type {} from 'next';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="antialiased bg-white">
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
};

export default DefaultLayout;
