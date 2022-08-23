import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import DataTable from '../../components/Admin/DataTable';
const Container = () => {
      return (
            <div className='flex min-h-screen bg-fb'>
                  <Sidebar />
                  <dir className='w-full h-full p-8'>
                        <h3>hello</h3>
                        <DataTable product='Product' name='NAME' image='IMAGE' price='PRICE' color='COLOR' size='SIZE'/>
                  </dir>
            </div>
      )
}

export default Container