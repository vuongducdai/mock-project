import Image from 'next/image';
import React, { useState } from 'react'
import FileBase64 from "react-file-base64";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ImgNotFound from "./../../public/img/imgnotfound.webp"
import { productSchema, userSchema } from '../../yupGlobal';
import { colors } from "./../../constants/data";

const Newitem = ({ setOpenAdd }) => {
      const [file, setFile] = useState(null);
      const [color, setColor] = useState([]);
      const [isProduct, setIsProduct] = useState(true);

      const { register: userRegister, handleSubmit: userHandleSubmit, setValue: userSetValue, formState: { errors: userError } } = useForm({
            resolver: yupResolver(userSchema),
      });

      const { register: productRegister, handleSubmit: productHandleSubmit, setValue: productSetValue, formState: { errors: productError } } = useForm({
            resolver: yupResolver(productSchema),
      });

      const handleSetColor = (colorName) => {
            const duplicatedColor = color.find((x) => x === colorName)
            if (!duplicatedColor) {
                  setColor(prev => [...prev, colorName]);
            } else {
                  const updatedColor = color.filter(x => x !== duplicatedColor)
                  setColor(updatedColor);
            }
      }

      const renderColor = () => {
            return (
                  colors.map((item) => (
                        <div
                              key={item.id}
                              style={{ backgroundColor: item.color }}
                              className='rounded-full w-8 h-8 cursor-pointer'
                              onClick={() => handleSetColor(item.name)}
                        ></div>
                  )))
      }

      const renderColorName = () => {
            return (
                  color.map((colorName, index) => (
                        <div
                              key={index}
                              onClick={() => handleSetColor(colorName)}
                              className='px-4 py-1 h-10 text-white bg-green-500 rounded-3xl capitalize text-sm flex-center flex-wrap cursor-pointer min-w-[100px]'
                        >
                              {colorName}
                        </div>
                  ))
            )
      }

      const onSubmit = (data) => {
            if (isProduct) {
                  const productForm = { ...data, color, file }
                  console.log(productForm)
                  productSetValue('name', '');
                  productSetValue('price', '');
                  productSetValue('size', '');
                  setColor([]);
            } else {
                  const userForm = { ...data, file }
                  console.log(userForm)
                  userSetValue('name', '');
                  userSetValue('address', '');
                  userSetValue('phone', '');
                  userSetValue('email', '');
            }
            setFile(null);
      }


      return (
            <div className='w-[240px] slide-top h-full bg-white shadow-md py-6 gap-6 mt-[100px]'>
                  <div className='flex flex-col'>

                        <div className='flex items-center justify-between px-4'>
                              <button
                                    onClick={() => setIsProduct(true)}
                                    className={`text-2xl ${isProduct ? 'text-blue-pastel' : 'text-[#ddd]'} font-semibold`}
                              >
                                    Product
                              </button>
                              <button
                                    onClick={() => setIsProduct(false)}
                                    className={`text-2xl ${!isProduct ? 'text-blue-pastel' : 'text-[#ddd]'} font-semibold`}
                              >
                                    User
                              </button>
                        </div>

                        <form
                              className='px-4 h-full flex flex-col gap-4'
                              onSubmit={isProduct ? productHandleSubmit(onSubmit) : userHandleSubmit(onSubmit)}
                        >
                              <div className="form__container__filebase64 flex flex-col py-4 border-b border-[#ddd]">
                                    <FileBase64
                                          type="file"
                                          multiple={false}
                                          onDone={(file) => {
                                                setFile(file.base64)
                                          }}
                                    />
                                    <div className='w-full h-40 py-4 overflow-hidden'>
                                          <Image
                                                src={file || ImgNotFound}
                                                alt="img"
                                                width={240}
                                                height={160}
                                                layout='responsive'
                                                objectFit='cover'
                                                className='rounded-lg'
                                          />
                                    </div>
                              </div>

                              <div className='flex flex-col'>

                                    {isProduct &&
                                          <>
                                                <span className='text-blue-pastel text-base font-semibold'>
                                                      Product name
                                                </span>
                                                <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                                      <input
                                                            className='text-[#333] outline-none bg-fb'
                                                            {...productRegister("name")}
                                                      />
                                                </div>
                                                <p className='text-warning text-sm'>{productError.name?.message}</p>


                                                <span className='mt-4 text-blue-pastel text-base font-semibold'>
                                                      Product price
                                                </span>
                                                <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                                      <input
                                                            className='text-[#333] outline-none bg-fb'
                                                            {...productRegister("price")} type="number"
                                                      />
                                                </div>
                                                <p className='text-warning text-sm'>{productError.price?.message}</p>

                                                <span className='mt-4 text-blue-pastel text-base font-semibold'>
                                                      Product size
                                                </span>
                                                <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                                      <input
                                                            className='text-[#333] outline-none bg-fb'
                                                            {...productRegister("size")}
                                                            type="number"
                                                      />
                                                </div>
                                                <p className='text-warning text-sm'>{productError.size?.message}</p>

                                                <span className='mt-4 text-blue-pastel text-base font-semibold'>
                                                      Product color
                                                </span>
                                                <div className='py-2 h-20 flex flex-wrap gap-2'>
                                                      {renderColor()}
                                                </div>
                                                <div className='py-2 flex flex-wrap gap-2'>
                                                      {renderColorName()}
                                                </div>
                                                <p className='text-warning text-sm'>{productError.color?.message}</p>
                                          </>
                                    }

                                    {!isProduct &&
                                          <>
                                                <span className='text-blue-pastel text-base font-semibold'>
                                                      Name
                                                </span>
                                                <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                                      <input className='text-[#333] outline-none bg-fb' {...userRegister("name")} />
                                                </div>
                                                <p className='text-warning text-sm'>{userError.name?.message}</p>

                                                <span className='mt-4 text-blue-pastel text-base font-semibold'>
                                                      Email
                                                </span>
                                                <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                                      <input className='text-[#333] outline-none bg-fb' {...userRegister("email")} type="text" />
                                                </div>
                                                <p className='text-warning text-sm'>{userError.email?.message}</p>

                                                <span className='mt-4 text-blue-pastel text-base font-semibold'>
                                                      Address
                                                </span>
                                                <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                                      <input className='text-[#333] outline-none bg-fb' {...userRegister("address")} type="text" />
                                                </div>
                                                <p className='text-warning text-sm'>{userError.address?.message}</p>

                                                <span className='mt-4 text-blue-pastel text-base font-semibold'>
                                                      Phone
                                                </span>
                                                <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                                      <input className='text-[#333] outline-none bg-fb' {...userRegister("phone")} type="number" />
                                                </div>
                                                <p className='text-warning text-sm'>{userError.phone?.message}</p>

                                                <span className='mt-4 text-blue-pastel text-base font-semibold'>
                                                      Admin
                                                </span>
                                                <div className='py-2 font-sans font-lg flex items-center gap-8'>
                                                      <div className='flex items-center justify-between w-20'>
                                                            <label htmlFor='true'>True</label>
                                                            <input id='true'
                                                                  className='text-[#333] outline-none bg-fb w-4 h-4 cursor-pointer' {...userRegister("isAdmin")}
                                                                  type="radio"
                                                                  value={true} />
                                                      </div>

                                                      <div className='flex items-center justify-between w-20'>
                                                            <label htmlFor='false'>False</label>
                                                            <input id='false'
                                                                  className='text-[#333] outline-none bg-fb w-4 h-4 cursor-pointer' {...userRegister("isAdmin")}
                                                                  type="radio"
                                                                  value={false}
                                                                  checked="checked"
                                                            />
                                                      </div>
                                                </div>
                                                <p className='text-warning text-sm'>{userError.isAdmin?.message}</p>
                                          </>
                                    }

                              </div>

                              <div className='flex items-center gap-4 justify-between'>
                                    <input
                                          className='text-blue-pastel px-4 py-2 rounded-lg border text-lg cursor-pointer w-24 flex-center'
                                          type="submit"
                                    />
                                    <button
                                          onClick={() => setOpenAdd(false)}
                                          className='text-blue-pastel px-4 py-2 rounded-lg border text-lg cursor-pointer w-24 flex-center'
                                    >
                                          Discard
                                    </button>
                              </div>
                        </form>

                  </div>
            </div>
      )
}

export default Newitem