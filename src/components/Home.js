import React from 'react'
import { NavLink } from 'react-router-dom'
// import Common from './Common';
// import image1 from './images/marchmeena190100045.webp'
import './Style.css';


export default function Home() {
  return (
    <div className="container my-5">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className='col-10 mx-auto'>
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                      <strong className="brand-name">Digital Farming</strong>
                    </h1>
                    <h2>
                      Buy And Sell your Goods At Right Price
                    </h2>

                    <p>We are here to provide farmer the right price of their product</p>
                    <p className=""></p>
                    <div className='mt-3'>
                      <NavLink to="/services" className="btn-get-started">
                        Get Started
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6 order-lg-2 header-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxOIVpAKwPpFBvtYyMMgj3upFZbcbcbefNA&usqp=CAU"
                      className="img-fluid-animated"
                      alt="homepage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* </div> */}
    </div>
  )
}
