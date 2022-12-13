import React from 'react'

const HomeBanner = () => {

    return (
        <section className='md:mt-[5.9rem] bg-white  mt-[5.9rem] w-full overflow-hidden '>



            <div className="container w-full mx-auto hidden md:flex mt-6 md:relative   flex flex-col">
               
                    <img
                        className='object-fit w-full h-full'
                        src={require("../../assets/img2.png")}
                        alt="Pictur"

                    />
                    <h1 class="absolute text-2xl sm:text-[3rem] transition delay-150 duration-300 ease-in-out md:text-[2rem] lg:text-5xl text-white bottom-28  left-4">
                        Find the perfect  LANCER  for your <br /> business
                    </h1>
               
                

            </div>
            {/* the small screen image*/}


            <div className="flex flex-wrap md:hidden py-auto flex-row items-center justify-start pl-2  w-full h-72   bg-gradient-to-tr from-primary-bright via-primary-900 to-primary-800 ">

          <h1 className='text-white sm:text-2xl text-3xl'>Find the perfect  LANCER  for your   business</h1>



      


            </div>




        </section>
    )
}

export default HomeBanner