import React from 'react'

import { FaArrowRight } from "react-icons/fa6";

function Description() {
  return (
    <div className=' w-[1920px h-[610px] bg-[#F9F8FE] mt-20 py-10'>
        <div className='ml-28 py-10'>
            <ul className='flex space-x-20 font-bold text-[#151875]'>
                <li>Description</li>
                <li>Additional Info</li>
                <li>Reviews</li>
                <li>Videos</li>
            </ul>
        </div>
        <div className=' flex flex-col justify-center'>
            <div className='ml-28'>
                <h2 className='text-2xl font-bold text-[#151875]'>Varius tempor</h2>
                <p className='mt-4 text-[16] text-[#A9ACC6]'>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
                    Scelerisque a, risus ac ante.
                    Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat,
                    quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                </p>
            </div>
            <div className='ml-28 mt-6'>
                <h2 className='text-2xl font-bold text-[#151875]'>More details</h2>
                <div className='flex items-center mt-4'>
                    <FaArrowRight className='text-xl mr-2 text-black' />
                    <p className='text-[#A9ACC6]'>
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                    </p>
                </div>
                <div className='flex items-center mt-4'>
                    <FaArrowRight className='text-xl mr-2 text-[#2F1AC4]' />
                    <p className='text-[#A9ACC6]'>
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                    </p>
                </div>
                <div className='flex items-center mt-4'>
                    <FaArrowRight className='text-xl mr-2 text-black' />
                    <p className='text-[#A9ACC6]'>
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                    </p>
                </div>
                <div className='flex items-center mt-4'>
                    <FaArrowRight className='text-xl mr-2 text-black' />
                    <p className='text-[#A9ACC6]'>
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description;
