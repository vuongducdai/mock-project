import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
      return (
            <div className='flex-center w-full h-80'>
                  <ClipLoader
                        color="#7dd3de"
                        loading
                        size={80}
                  />
            </div>
      )
}

export default Loading