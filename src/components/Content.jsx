import { useState } from 'react'
import contactImage from '../assets/contact-img.jpeg'

function Content() {

  return (
    <>
        <div className="relative image-box">
            <div className='imgCtn'>
                <div/>
                <img className='h-[500px] opacity-25 z-100 guyImg' src={contactImage}  alt="" />
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center z-10'>
                <h2 className='font-bold text-7xl pb-4'>Contact us</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Felis sit donec nec at nullam orci enim. Tincidunt convallis eu at pharetra rutrum proin et.</p>
                <p className='flex gap-1 items-center justify-center mt-2'>
                    <span>Home</span>
                    <span>
                        <svg width="15" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.50616 10.3644C4.63173 10.3644 4.7423 10.3142 4.83273 10.2287L8.81009 6.33643C8.90566 6.24108 8.9558 6.12558 8.9558 6.00001C8.9558 5.86929 8.90566 5.74886 8.81009 5.66358L4.83295 1.77622C4.79113 1.73156 4.74053 1.69603 4.68434 1.67184C4.62814 1.64765 4.56755 1.63533 4.50637 1.63565C4.44543 1.63466 4.38491 1.64594 4.32842 1.66881C4.27192 1.69168 4.2206 1.72567 4.1775 1.76877C4.1344 1.81187 4.1004 1.86319 4.07754 1.91969C4.05467 1.97619 4.04339 2.03671 4.04437 2.09765C4.04437 2.21829 4.09966 2.33872 4.18002 2.42422L7.8308 6.00001L4.17937 9.576C4.09923 9.66129 4.04395 9.77679 4.04395 9.90236C4.04395 10.1636 4.24516 10.3644 4.50616 10.3644Z" fill="#CECCCC"/>
                        </svg>
                    </span>
                    <span className='text-[#F7646A]'>Contact us</span>
                </p>
            </div>
        </div>

        <section className="-mt-[80px] grid md:grid-cols-2 lg:grid-cols-4 p-[35px]">
            <article className="bg-white group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200 w-[282px]">
                
                <div className="px-3 py-4">
                    <h3 className="text-md font-bold text-gray-500 pb-3 text-center">
                        <a className=" py-1 px-2 text-black rounded-lg" href="#">
                            FAQ
                        </a>
                    </h3>

                    <p className="text-xs text-gray-900 group-hover:text-indigo-600 pb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className='flex gap-1 items-center justify-center text-[#F53D44]'>
                        Visit FAQ 
                        <span>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43994 13.28L10.7866 8.93333C11.2999 8.42 11.2999 7.58 10.7866 7.06667L6.43994 2.72" stroke="#F53D44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>
                    </p>
                </div>
            </article>
            
            <article className="bg-white group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200 w-[282px]">
                
                <div className="px-3 py-4">
                    <h3 className="text-md font-bold text-gray-500 pb-3 text-center">
                        <a className=" py-1 px-2 text-black rounded-lg" href="#">
                            General Inquiry
                        </a>
                    </h3>

                    <p className="text-xs text-gray-900 group-hover:text-indigo-600 pb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className='flex gap-1 items-center justify-center text-[#F53D44]'>
                        Visit FAQ 
                        <span>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43994 13.28L10.7866 8.93333C11.2999 8.42 11.2999 7.58 10.7866 7.06667L6.43994 2.72" stroke="#F53D44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>
                    </p>
                </div>
            </article>

            <article className="bg-white group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200 w-[282px]">
                
                <div className="px-3 py-4">
                    <h3 className="text-md font-bold text-gray-500 pb-3 text-center">
                        <a className=" py-1 px-2 text-black rounded-lg" href="#">
                            Call Us
                        </a>
                    </h3>

                    <p className="text-xs text-gray-900 group-hover:text-indigo-600 pb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className='flex gap-1 items-center justify-center text-[#F53D44]'>
                        Visit FAQ 
                        <span>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43994 13.28L10.7866 8.93333C11.2999 8.42 11.2999 7.58 10.7866 7.06667L6.43994 2.72" stroke="#F53D44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>
                    </p>
                </div>
            </article>

            <article className="bg-white group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200 w-[282px]">
                
                <div className="px-3 py-4">
                    <h3 className="text-md font-bold text-gray-500 pb-3 text-center">
                        <a className=" py-1 px-2 text-black rounded-lg" href="#">
                            Social Account
                        </a>
                    </h3>

                    <p className="text-xs text-gray-900 group-hover:text-indigo-600 pb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className='flex gap-1 items-center justify-center text-[#F53D44]'>
                        Visit FAQ 
                        <span>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.43994 13.28L10.7866 8.93333C11.2999 8.42 11.2999 7.58 10.7866 7.06667L6.43994 2.72" stroke="#F53D44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>
                    </p>
                </div>
            </article>
        </section>

        <div className="py-[80px] h-[500px]">
            <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
    </>
  )
}

export default Content
