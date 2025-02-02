import React from 'react'
import Link from 'next/link'

function LogIn() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-[400px] lg:w-[500px]'>
        <h2 className='text-3xl text-center font-bold text-gray-800 mb-6'>LogIn</h2>
        <form>
          <div className='mb-6'>
            <label className="block text-gray-700 mb-2" htmlFor='email'>Email</label>
            <input 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type='email'
              id='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 mb-2" htmlFor='password'>Password</label>
            <input 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type='password'
              id='password'
              placeholder='Enter your password'
            />
          </div>
          <div className='flex justify-between items-center mb-6'>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Remember Me</span>
            </div>
            <Link href="/forgot-password">
              <span className="text-indigo-500 text-sm hover:underline">Forgot password?</span>
            </Link>
          </div>
          <div className='mb-6'>
            <button 
              className='w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type='submit'
            >
              Log In
            </button>
          </div>
          <div className='text-center'>
            <p className='text-gray-600'>
              Don't have an account?{' '}
              <Link className="text-indigo-500 hover:underline" href="/SignUp">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
