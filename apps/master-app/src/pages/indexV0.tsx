import React, { useMemo, useState } from 'react';
import { Link, useLocation, MicroApp } from 'umi';
import { APP_LIST, EAppPath } from '@/constants';

const Layout: React.VFC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const app = useMemo(() => {
    const app = APP_LIST.find((item) => item.path === pathname);
    return app;
  }, [pathname]);

  const hasApp = () => {
    return Boolean(app?.name);
  };

  const appPathKeys = Object.keys(EAppPath) as (keyof typeof EAppPath)[];

  return (
    <div>
      <div>
        {appPathKeys.map((key) => {
          const path = EAppPath[key];
          return (
            <div key={key}>
              <Link to={path}>{path}</Link>
            </div>
          );
        })}
      </div>
      {hasApp() && <MicroApp name={app?.name} autoSetLoading />}
    </div>
  );
};

export default Layout;
