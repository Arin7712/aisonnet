import { serviceSteps } from '@/constants';
import React from 'react'

const Services2 = () => {
  return (
    <div className="h-auto md:h-screen flex justify-center mt-[4rem] md:p-0 p-6">
      <div className="z-[-2] p-8 rounded-xl h-auto w-full md:w-[44%] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col">
        <div className="flex flex-col pt-4 md:items-center md:justify-center">
            <div className='md:text-center'>
                <h1 className='text-gray-500 text-sm font-medium'>Our 4 stage process</h1>
                <p className='text-white text-2xl md:text-xl'>Let's explain step-by-step</p>
            </div>
        </div>

        <div className='flex flex-col mt-10 gap-6'>
          {serviceSteps.map((step) => (
              <div key={step.id}>
                <div className='flex gap-2 items-center'>
                <p className='bg-gray-500 p-2 w-4 h-4  rounded-full text-xs text-black flex items-center justify-center'>
                      {step.id}
                    </p>
                    <h1 className='text-white text-md font-medium'>{step.title}</h1>
                </div>
                <div className='text-gray-400 text-sm mt-2'>
                    <p>{step.description}</p>
                </div>

                <div className='mt-6 bg-gradient-to-r text-sm from-gray-900 to-transparent text-gray-500 font-medium rounded-lg p-3'>
                    {step.duration}
                </div>
                </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services2;
