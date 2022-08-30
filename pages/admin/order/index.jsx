import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';

import Layout from "./../../../components/Admin/Layout";
import Loading from "./../../../components/Admin/Loading";

const Order = () => {
      const { loading } = useSelector(state => state.adminCartSlice);
      const router = useRouter();
      const path = router.pathname.split("/")[2];

      return (
            <Layout type={path}>
                  {loading
                        ? <Loading />
                        : <div>
                              some cart
                        </div>
                  }
            </Layout>
      )
}

export default Order