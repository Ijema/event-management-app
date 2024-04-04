import React from "react";

const Footer = () => {
    return(
        <div className="bg-slate-800 px-2">
            <div className="container row text-white mt-5">
                <div className="col-sm-6 py-4">
                    <h3 className="text-lg font-bold">Event Pop</h3>
                    <p>A company you can trust with your special moments and you wont regret it.
                        We are the best when it comes to putting smiles on the faces of our clients.
                    </p>
                </div>
                <div className="col-sm-2 py-4">
                    <h3 className="text-lg font-bold">Information</h3>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>services</a></li>
                        <li><a>Terms and Condition</a></li>
                        <li><a>Become a partner</a></li>
                        <li><a>Privacy and Policy</a></li>
                    </ul>
                </div>
                <div className="col-sm-2 py-4">
                    <h3 className="text-lg font-bold">Customer Support</h3>
                    <ul>
                        <li><a>FAQ</a></li>
                        <li><a>Payment Option</a></li>
                        <li><a>Booking Tips</a></li>
                        <li><a>Become a partner</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-sm-2 py-4">
                    <h3 className="text-lg font-bold">I have a question</h3>
                    <ul>
                        <li><a>No.1 Kand street, Awka, Anambra, Nigeria</a></li>
                        <li><a>+2393939939393</a></li>
                        <li><a>info@eventpop.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;