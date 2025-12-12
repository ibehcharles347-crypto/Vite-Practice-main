import React, {useState} from "react";

function Newsletter() {
    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleSubmit = (e)=> {
        console.log(email)
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <div className="newsletter text-center p-5 my-5 rounded-3">
                    <h2 className="mb-4">Subscribe to our Newsletter</h2>
                    <p className="mb-4">Stay updated with our latest news and offers. Enter your email below to subscribe to our newsletter.</p>
                    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                        <input type="email" onChange={handleChange} className="form-control newsletterinput w-50 me-2" placeholder="Enter Your Email" />
                        <button className="checkoutbtn btn px-4">Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Newsletter;