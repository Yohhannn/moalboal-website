import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-5'>Welcome to the DaisyUi Crash Course</h1>
        <div className='mb-4'>
          <p className='text-gray-600 mb-2'>Buttons</p>
          <button className='btn btn-primary'>Primary Button</button>
          <button className='btn btn-secondary ml-5'>Secondary Button</button>
        </div>

        <div className='mb-4'>
          <p className='text-gray-600 mb-2'>Alerts</p>
          <div className='alert alert-success text-white font-bold'>Success</div>
          <div className='alert alert-error text-white font-bold'>Error</div>
        </div>

        <div className='mb-4'>
          <p className='text-gray-600 mb-2'>Forms</p>
          <div className='form-control'>
            <label htmlFor="name" className='label'>Name</label>
            <input type="text" className='input input-bordered w-1/2'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home