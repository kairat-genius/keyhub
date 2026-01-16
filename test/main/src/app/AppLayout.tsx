import { NewHeader } from '@/app/components/NewHeader';
import { NewFooter } from '@/app/components/NewFooter';

import { Outlet } from "react-router";


const AppLayout = () => {
  return (
   <div className="size-full overflow-x-hidden bg-white pt-17">
      <NewHeader />
       <Outlet />
      <NewFooter />
    </div>
  );
};

export default AppLayout;
