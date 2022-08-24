import React, { useState } from 'react'
import Dashboard from '../../components/Admin/Dashboard'
import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Admin/Sidebar'
import DataTable from '../../components/Admin/DataTable'
import Demo from '../../components/Admin/Demo';
const Admin = () => {
      const [isProduct,setProduct] = useState(true)

      return (
            <div className='flex h-screen w-full bg-fb'>
                  <Sidebar/>
                  
                  <div className='flex flex-col w-full'>
                        <Navbar />
                        <div className='w-full h-full bg-fb p-8'>
                              <Demo/>
                        </div>
                  </div>
            </div>
      )
}

export default Admin