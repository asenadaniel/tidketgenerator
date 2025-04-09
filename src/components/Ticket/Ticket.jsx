import React from 'react'
import logo from '../../assets/logo-full.svg'
import { useLocation } from 'react-router-dom'

function Ticket() {

  const Location = useLocation()
  const { ticketData, uploadFiles } = Location.state || {};


  return (
    <div className=' bg-[url(./assets/desktop.png)] bg-cover bg-center h-screen  flex flex-col text-white items-center  m-auto'>

      <div className=' mt-10 mb-3'>
        <div className='flex justify-center items-center mb-15'>
          <img src={logo} alt="" className=' w-[200px]' />
        </div>

        <div className='flex justify-center flex-col items-center md:w-[70%] w-[97%] mx-auto text-center mt-5 gap-5'>
          {
            ticketData ? (

              <>
                <h1 className=' md:text-5xl text-3xl  font-bold'>Congrats, <span className=' text-pink-300'>{ticketData.FullName}!</span>  Your ticket is ready </h1>

                <p className=' text-xl' >We've emailed your ticket to <span className='text-pink-300'>
                  {ticketData.Email}
                </span> and will send updates in the run up to the event</p>

              </>

            ) : (
              <p className='text-red-500'>No ticket data available. Please go back and submit the form.</p>

            )
          }
        </div>
      </div>

      <div className=' md:mt-[160px] mt-[70px]  '>

        <div className=' bg-pink-200/20 backdrop-blur-lg  border-pink-300 border w-auto md:w-[480px]  text-white  hover:bg-pink-300/20 transition flex flex-col items-center justify-start cursor-pointer md:pr-[200px] pl-3 h-[200px] pr-[80px] ' >

          <div className='  cursor-pointer flex flex-col space-y-5 ' >
            <div className=' ' >
              <img src={logo} alt="" className='mt-5 w-[180px]' />
              <p className="text-gray-400 text-sm flex items-center justify-center">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            <div className='flex gap-5  mt-5 justify-center items-center'>
              {
                uploadFiles ? (
                  <img
                    src={URL.createObjectURL(uploadFiles)}
                    alt="Uploaded Avatar"
                    className="w-[60px] h-[60px] object-cover rounded-lg  "
                  />
                ) :
                  <p className=' text-red-600'>No Avatar Uploaded</p>
              }
              {
                ticketData && (
                  <div>
                    <p className=' text-xl font-medium'>
                      {ticketData.FullName}
                    </p>
                    <p className=' text-gray-400'>{ticketData.Email}</p>
                  </div>
                )

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
