import React from 'react'
import Header from './Header/Header'
import Form from './Form/Form'


function Overall() {
  return (
    <div className=' bg-[url(./assets/desktop.png)] bg-cover bg-center'>
      <div className='bg-[url(./assets/pattern-squiggly-line-top.svg)] bg-no-repeat bg-right-top z-10 '>
        <div className=' bg-[url(./assets/pattern-lines.svg)]  bg-cover bg-center min-h-screen  flex flex-col text-white items-center  m-auto'>

          <Header />
          <Form />
        </div>
      </div>

    </div>

  )
}

export default Overall
