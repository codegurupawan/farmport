import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };
    });
    // console.log(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Your record has been submitted")
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center mt-10 mrgn">Contact Us</h1>

        <div className="container container_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">

              <form onSubmit={formSubmit}>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1"
                    className="form-label">Full name
                  </label>
                  <input type="text"
                   required className="form-control"
                    id="exampleInputEmail1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your Name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1"
                    className="form-label">Mobole No.
                  </label>
                  <input type="text"
                   required className="form-control"
                    id="exampleInputEmail1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile no."
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1"
                    className="form-label">Email Address
                  </label>
                  <input type="email"
                    required className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address"
                    className="form-label">
                    Enter Your Address
                  </label>
                  <input
                    required className="form-control"
                    id="exampleInputTextarea1"
                    name="address"
                    value={data.address}
                    onChange={InputEvent}
                    placeholder="">
                  </input>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputTextarea1"
                    className="form-label">
                    Message
                  </label>
                  <textarea
                    required className="form-control "
                    id="exampleInputTextarea1"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                    rows="3"
                    placeholder="Write your message or query">
                  </textarea>
                </div>

                <div className="col-12">
                <button className="btn btn-outline-primary">
                  Submit Form
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
