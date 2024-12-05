import { services } from '@/constants'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className='mt-[4rem] md:mt-[12rem] flex flex-col md:items-center w-full p-6'>
      <div className='flex justify-center md:items-center flex-col gap-4'>
        <div className='text-3xl font-medium md:text-center'>
        You come up with idea, we make it 🔨 real
        </div>
        <div className='text-sm w-3/5 text-gray-700 font-normal md:text-center'>
        We specialize in various industries, ensuring customized solutions tailored to your needs, with no additional costs.
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 p-2 bg-gray-100 rounded-lg mt-10 md:mt-16 max-w-3xl gap-3'>
        {
          services.map((service, index) => (
            <div key={index} className='bg-white rounded-lg flex flex-col gap-6 p-6'>
                <div>
                  <h2 className='text-md font-medium text-gray-900'>{service.title}</h2>
                </div>

                <div>
                  <p className='text-sm text-gray-600'>{service.description}</p>
                </div>
            </div>
          ))
        }
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 mt-10 md:mt-16">
  <div className="text-center">
    <h2>2 - 4 weeks</h2>
    <p className="text-gray-400">App development</p>
  </div>
  <div className="border-gray-200 md:border-l-2 border-t-2 md:border-t-0 h-0 md:h-12 w-full md:w-0"></div>
  <div className="text-center">
    <h2>2 - 4 weeks</h2>
    <p className="text-gray-400">App development</p>
  </div>
  <div className="border-gray-200 md:border-l-2 border-t-2 md:border-t-0 h-0 md:h-12 w-full md:w-0"></div>
  <div className="text-center">
    <h2>2 - 4 weeks</h2>
    <p className="text-gray-400">App development</p>
  </div>
</div>

    </section>
  )
}

export default Services
