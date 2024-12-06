"use client"

import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Mail from '@mui/icons-material/Mail';
import Link from 'next/link';


const Topbar = () => {
  return (
    <div className='bg-[#fafafa] flex  items-center justify-evenly p-3'>
      <div className='inline-block'>
        <Link href="https://www.google.com/maps/place/18%C2%B028'06.8%22N+73%C2%B051'56.6%22E/@18.468568,73.865709,20z/data=!4m4!3m3!8m2!3d18.4685679!4d73.8657093?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
        <div className='text-gray-500 flex items-center text-sm gap-2'>
            <LocationOnIcon style={{ fontSize: 18, color: 'gray' }} />
            Pune, India
        </div>
        </Link>
      </div>

      <div className='text-gray-500 flex items-center text-sm gap-2'>
        <a href="mailto:aisonnetagency@gamil.com" className='flex gap-2'>
        <Mail style={{fontSize: 18, color: 'gray'}}/>
        aisonnetagency@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Topbar
