import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import notfoundimg from '../Asset/Image/notfoundpage.webp'


export default function NotFound() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
          

            <section className="page_404 py-16">
                <div className="container text-center my-sm-3">
                    <div className="four_zero_four_bg">
                        {/* <h1 className="text-5xl xl:text-6xl text-gray-800 font-bold mb-3">404</h1> */}
                    </div>
                    <div className="contant_box_404">
                        <img src={notfoundimg} width="400" alt='404 Page Not Found' className='d-inline-block' />
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
                            The page you requested could not be found.
                        </h3>

                        <p className='text-base mb-4  font-semibold'>Click the button below to go back to the Homepage.</p>

                        <Link to="/" className="btn-site invert no-underline md:h-12 d-inline-flex align-items-center">
                            <span className='btn btn-primary'>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
