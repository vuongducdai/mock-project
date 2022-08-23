import Image from 'next/image';
import React, { useState } from 'react'
import FileBase64 from "react-file-base64";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ImgNotFound from "./../../public/img/imgnotfound.webp"
import { productSchema, userSchema } from '../../yupGlobal';
import { colors } from "./../../constants/data";

const Newitem = () => {
      const [file, setFile] = useState(null);
      const [color, setColor] = useState([]);
      console.log(color)
      const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(productSchema, userSchema)
      });

      const renderColor = () => {
            return (
                  colors.map((item) => (
                        <div
                              key={item.id}
                              style={{ backgroundColor: item.color }}
                              className='rounded-full w-8 h-8 cursor-pointer'
                              onClick={() => setColor(prev => [...prev, item.name])}
                        ></div>
                  )))
      }

      const onSubmit = (data) => {
            const form = { ...data, file }
            console.log(form)
      }

      return (
            <div className='w-[240px] slide-top h-full bg-white shadow-md py-6 gap-6 mt-[100px]'>
                  <div className='flex flex-col'>

                        <div className='flex-center'>
                              <h3 className='text-2xl text-blue-pastel font-semibold'>
                                    Product
                              </h3>
                        </div>

                        <form className='px-4 h-full flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
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
                                    <span className='text-blue-pastel text-base font-semibold'>Product name</span>
                                    <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                          <input className='text-[#333] outline-none bg-fb' {...register("name")} />
                                    </div>
                                    <p className='text-warning text-sm'>{errors.name?.message}</p>

                                    <span className='mt-4 text-blue-pastel text-base font-semibold'>Product price</span>
                                    <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                          <input className='text-[#333] outline-none bg-fb' {...register("price")} type="number" />
                                    </div>
                                    <p className='text-warning text-sm'>{errors.price?.message}</p>

                                    <span className='mt-4 text-blue-pastel text-base font-semibold'>Product color</span>
                                    <div className='py-2 h-20 flex flex-wrap gap-2'>
                                          {renderColor()}
                                    </div>
                                    <p className='text-warning text-sm'>{errors.color?.message}</p>

                                    <span className='mt-4 text-blue-pastel text-base font-semibold'>Product size</span>
                                    <div className='px-4 py-2 rounded-3xl bg-fb font-sans font-base'>
                                          <input className='text-[#333] outline-none bg-fb' {...register("size")} type="number" />
                                    </div>
                                    <p className='text-warning text-sm'>{errors.size?.message}</p>
                              </div>

                              <div className='flex items-center gap-4 justify-between'>
                                    <input
                                          className='text-blue-pastel px-4 py-2 rounded-lg border text-lg cursor-pointer w-24 flex-center'
                                          type="submit"
                                    />
                                    <button className='text-blue-pastel px-4 py-2 rounded-lg border text-lg cursor-pointer w-24 flex-center'>Discard</button>
                              </div>
                        </form>

                  </div>
            </div>
      )
}

export default Newitem