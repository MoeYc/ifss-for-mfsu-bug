import React, { useState } from 'react';
import { Link, history as umiHistory } from 'umi';

const Layout: React.FC = ({ children }) => {
  console.log('main layout -> render');
  debugger;
  return (
    <div>
      <div>
        <p>master layout=======</p>
        <div>
          <Link to="/app1">去app1 </Link>
        </div>
        <div>
          <div
            onClick={() => {
              umiHistory.push('/app2');
              console.log('mian after');
            }}
          >
            去app2
          </div>
        </div>
        <p>master layout=======</p>
      </div>

      {children}
    </div>
  );
};

export default Layout;
