import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartList } from '../../../redux/admin/adminCartSlice';

import Layout from "./../../../components/Admin/Layout";
import Loading from "./../../../components/Admin/Loading";

const Order = () => {
      const { loading, carts } = useSelector(state => state.adminCartSlice);
      const [details, setDetails] = useState(false);
      const [currentId, setCurrentId] = useState('');
      const router = useRouter();
      const path = router.pathname.split("/")[2];
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getCartList())
      }, [dispatch])

      const handleOpen = (id) => {
            setCurrentId(id);
            setDetails(!details);
      }

      const renderCarts = () => {
            return (
                  carts.map(cart => (
                        <div key={cart._id} className='bg-white mb-4 rounded-md px-8 py-4 w-full'>
                              <div>
                                    <h3 className='text-lg font-semibold text-blue-dark'>Cart ID: {cart._id}</h3>
                                    <h4>Created At: {cart.createdAt}</h4>
                              </div>
                              <div>
                                    <button className='py-2 px-4 bg-black text-white rounded-lg my-4' onClick={() => handleOpen(cart._id)}>Show details</button>
                              </div>
                              {(details && cart._id === currentId) &&
                                    <div>
                                          {cart.products.map(product => (
                                                <div key={product._id} className='flex flex-col mb-4 border-b-2 '>
                                                      <span className='text-[#616161] text-lg font-semibold'>Product name: {product.name}</span>
                                                      <span>Product price: {product.price}</span>
                                                      <span>Product color: {product.color}</span>
                                                      <span>Product size: {product.size}</span>
                                                      <span>Product quantity: {product.quantity}</span>
                                                </div>
                                          ))}
                                    </div>
                              }
                        </div>
                  ))
            )
      }

      return (
            <Layout type={path}>
                  {loading
                        ? <Loading />
                        : <div className='bg-fb'>
                              {renderCarts()}
                        </div>
                  }
            </Layout>
      )
}

export default Order