import React, { useState } from 'react'
import './Style.css'

const BuyandSell = () => {

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
                [name]: value,
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
            <div className="my-5 bg-gradient">
            
                <h1 className="text-center mt-10">Fill Your Details To Buy Products</h1>

                <div className="container container_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1"
                                        className="form-label">Full Name
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
                                    <label htmlFor="phone"
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
                                        className="form-label">Enter Your complete Address
                                    </label>
                                    <input type="email"
                                        required className="form-control"
                                        id="address1"
                                        name="address"
                                        value={data.address}
                                        onChange={InputEvent}
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="Buy or Sell"
                                        className="form-label">
                                        Buy Products
                                    </label>
                                    <select
                                        required className="form-control"
                                        id="buysell1"
                                        onChange={InputEvent}>
                                        <option >Choose your option</option>
                                        <option name="buy" value={data.buy}>Buy</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="crop"
                                        className="form-label">
                                        Product Name
                                    </label>
                                    <select
                                        required className="form-control"
                                        id="priceid"
                                        onChange={InputEvent}>
                                        <option >Choose your option</option>
                                        <option name="paddy" value={data.paddy}>Paddy</option>
                                        <option name="wheat" value={data.wheat}>Wheat</option>
                                        <option name="musturd" value={data.musturd}>Musturd</option>
                                        <option name="channa" value={data.channa}>Channa</option>
                                        <option name="tomato" value={data.tomato}>Tomato</option>
                                        <option name="carrot" value={data.carrot}>Carrot</option>
                                        <option name="apple" value={data.apple}>Apple</option>
                                        <option name="mango" value={data.mango}>Mango</option>
                                        <option name="masoor" value={data.masoor}>Masoor</option>
                                        <option name="arhar" value={data.arhar}>Arhar</option>
                                        <option name="moong" value={data.moong}>Moong</option>
                                        <option name="cauliflower" value={data.cauliflower}>Cauliflower</option>
                                        <option name="potato" value={data.potato}>Potato</option>
                                        <option name="onion" value={data.onion}>Onion</option>
                                        <option name="other" value={data.other}>Other</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor=""
                                        className="form-label">If Other Write the Name of Your Product
                                    </label>
                                    <input type="email"
                                        required className="form-control"
                                        id="exampleInputEmail1"
                                        name="others"
                                        value={data.others}
                                        onChange={InputEvent}
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="number"
                                        className="form-label">Set Your Price
                                    </label>
                                    <input type="email"
                                        required className="form-control"
                                        id="exampleInputEmail1"
                                        name="price"
                                        value={data.price}
                                        onChange={InputEvent}
                                        placeholder="Enter your Price"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputTextarea1"
                                        className="form-label">
                                        Give details of your Product here
                                    </label>
                                    <textarea
                                        required className="form-control"
                                        id="exampleInputTextarea1"
                                        name="message"
                                        value={data.message}
                                        onChange={InputEvent}
                                        rows="3"
                                        placeholder="Write details">
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

export default BuyandSell;
