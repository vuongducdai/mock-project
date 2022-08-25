import React, { Children } from 'react';
import Navbar from '../../components/Admin/Navbar'

const Layout = ({ children }) => {
      return (
            <div>
                  <Navbar />
                  <div className='p-8'>
                        {children}
                  </div>
            </div>
      )
}

export default Layout