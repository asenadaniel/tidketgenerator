import React from 'react'
import Header from './Header/Header'
import Form from './Form/Form'


function Overall() {
  return (
    <div className=' bg-[url(./assets/desktop.png)] bg-cover bg-center min-h-screen  flex flex-col text-white items-center  m-auto'>
      <div className=''>
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default Overall
