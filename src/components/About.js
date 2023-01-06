import React from 'react'
// import Common from './Common'
import { NavLink } from 'react-router-dom'
import './Style.css'


export default function About() {
  return (
    <>
      

      <div className="container my-5">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className='col-10 mx-auto'>
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h2>
                      <strong className="brand-name">Digital Farming</strong>
                    </h2>
                    <h5>
                      Grow your business with new ideas and innovations
                    </h5>
                    <h5 className='my-3'>
                      We are here to help you to Save yor Money
                    </h5>
                    <p>By the help of this technology any farmer can buy or sell their 
                       product on right price. Now farmer don't have to travel for buying 
                       or selling product. he/she can buy or sell anything from their place.
                       Two farmers or businessman can buy or sell their product directly to
                       each other if their data matches. Any farmer or businessman can also 
                       see that what other farmer or businessman has posted to buy or sell
                    </p>
                    <div className='mt-3'>
                      <NavLink to="/contact" className="btn-get-started">
                        Contact Us
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6 order-lg-2 header-img">
                    <img className="img-fluid-animated aboutimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBaY1yjenkqPJyMw-_n2lSgG0V2r4nHxnSA&usqp=CAU"
                         alt="homepage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
