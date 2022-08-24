import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {

      const handleLogout = () => {

      }

      return (
            <div className='h-20 w-full px-8'>
                  <div className='flex items-center justify-end h-full w-full gap-8 border-b border-[#ddd]'>
                        <div className='border-r border-blue-pastel'>
                              <NotificationsIcon className='text-3xl pr-6 w-full cursor-pointer' />
                        </div>

                        <div className='flex-center'>
                              <button
                                    className='border-2 text-blue-pastel text-lg px-4 py-2 rounded-lg hover:bg-blue-dark-hover hover:text-white transition-all duration-300'
                                    onClick={handleLogout}
                              >
                                    Logout
                              </button>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar