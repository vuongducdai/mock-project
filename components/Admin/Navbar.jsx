import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { logout } from '../../redux/admin/userSlice';
import { useRouter } from 'next/router';

const Navbar = () => {
      const { user } = useSelector(state => state.userSlice);
      const router = useRouter();
      const dispatch = useDispatch();

      const handleLogout = () => {
            dispatch(logout());
            router.push("/login")
      }

      return (
            <div className='h-20 w-full px-8'>
                  <div className='flex items-center justify-end h-full w-full gap-8 border-b border-[#ddd]'>

                        <div className='border-r border-blue-pastel'>
                              <NotificationsIcon className='text-3xl pr-6 w-full cursor-pointer' />
                        </div>

                        <div className='flex-center'>
                              {user
                                    ? <button
                                          className='border-2 text-blue-pastel text-lg px-4 py-2 rounded-lg hover:bg-blue-dark-hover hover:text-white transition-all duration-300'
                                          onClick={handleLogout}
                                    >
                                          Logout
                                    </button>
                                    : <Link href='/login'>
                                          <button
                                                className='border-2 text-blue-pastel text-lg px-4 py-2 rounded-lg hover:bg-blue-dark-hover hover:text-white transition-all duration-300'
                                                onClick={handleLogout}
                                          >
                                                Login
                                          </button>
                                    </Link>
                              }
                        </div>
                  </div>
            </div>
      )
}

export default Navbar