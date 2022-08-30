import React from 'react'
import { useSelector } from 'react-redux';

import Layout from "./../../../components/Admin/Layout";
import Loading from "./../../../components/Admin/Loading";

const Order = () => {
      const { loading } = useSelector(state => state.cartReducer);
      return (
            <Layout type={path}>
                  {loading
                        ? <Loading />
                        : <div>

                        </div>
                  }
            </Layout>
      )
}

export default Order