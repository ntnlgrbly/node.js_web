import React from 'react'
import { FcAbout, IoCall } from "react-icons/fc";
import { AiOutlineYoutube } from "react-icons/ai";
function Youtube(props) {
    return (
        <div className='container-fluid  boxYoutube '>
            <div className='ing' style={{ backgroundImage: "url(/images/y.png)" }} >
                <h2 className='text-center ms-6'>  <AiOutlineYoutube></AiOutlineYoutube> סרטונים של המטפלים שלנו   </h2>

                <div className='container-fluid mt-3 d-flex ' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine" >
                    <div className='me-2 '>
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                            height={"220px"}
                            width={"380px"}
                        />{" "}
                    </div>
                    <div className=''>
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                            height={"220px"}
                            width={"380px"}
                        />{" "}
                    </div>
                    <div className=' ms-1'>
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                            height={"220px"}
                            width={"380px"}
                        />{" "}
                    </div>
                    <div className=' ms-2'>
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                            height={"220px"}
                            width={"380px"}
                        />{" "}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube