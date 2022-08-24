import React from 'react'

import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Admin/Sidebar'

const Admin = () => {
      

      return (
            <div className='flex h-screen w-full bg-fb'>
                  <Sidebar />
                  
                  <div className='flex flex-col w-full'>
                        <Navbar />
                        <div className='w-full h-full bg-fb p-8'>
                             Dashboard
                        </div>
                  </div>
            </div>
      )
}

export default Admin