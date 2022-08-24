import React from 'react'
import axios from 'axios';
import DataTable from '../../components/Admin/DataTable'
import Layout from '../../components/Admin/Layout'
import Sidebar from '../../components/Admin/Sidebar'

const Container = ({ item }) => {
      console.log(item);
      return (
            <div className='flex min-h-screen bg-fb'>
                  <Sidebar />
                  <dir className='w-full h-full'>
                        <Layout>
                              <DataTable product='Product' name='NAME' image='IMAGE' price='PRICE' color='COLOR' size='SIZE' />
                        </Layout>
                  </dir>
            </div>
      )
};

export const getServerSideProps = async ({ params: { id } }) => {
      const res = await axios.get(
            `https://63030a4dc6dda4f287c1d8d4.mockapi.io/${id}`
      );
      return {
            props: {
                  item: res.data,
            },
      };
};

export default Container