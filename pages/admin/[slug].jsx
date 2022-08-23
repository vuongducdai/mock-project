import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'

const Container = () => {
      return (
            <div className='flex min-h-screen bg-fb'>
                  <Sidebar />
                  <dir className='w-full h-full'>
                        <h3>hello</h3>
                  </dir>
            </div>
      )
}

export default Container