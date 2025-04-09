import React from 'react'
import Header from './Header/Header'
import Form from './Form/Form'
import logo2 from '../../src/assets/pattern-lines.svg'
import logo3 from '../../src/assets/pattern-squiggly-line-top.svg'


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
