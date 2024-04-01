import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';
import { FC, ReactNode } from 'react';
type Props = {
  children: ReactNode;
};

const layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default layout;
