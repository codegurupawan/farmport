import React from 'react'
// import { NavLink } from 'react-router-dom'
import ServicesCards from './ServicesCard'
import sData from './ServicesData'
import './Style.css'

export default function Services() {
  return (
    <>
      <div className='my-5'>
        <h1 className="text-center mrgn">Buy Or Sell Your Products</h1>

        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  sData.map((value, index) => {
                    return <ServicesCards
                      key={index}
                      imgsrc={value.imgsrc}
                      title={value.title}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
