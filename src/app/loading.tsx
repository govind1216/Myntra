import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function loading() {
  return (
    <div className='text-center flex justify-center text-6xl mx-10'>
        <Skeleton baseColor='#074a66'/>
    </div>
  )
}
