import React from 'react'

const About = () => {

  return (
    <div className='md:mt-50 mt-40 h-full w-full'>
      <div>
        <span className='block text-center md:text-6xl text-5xl font-bold'>About <span className='text-[#60C3AD]'>Us</span></span>
        <div>
          <section className=' hidden mx-8 mt-20 md:flex md:flex-row flex-col'>
            <section className='p-4 md:w-1/2 w-full flex flex-col justify-center'>
                <h1 className='text-4xl font-bold'>
                  We didn't find it for us, <br/> <span className='text-[#60C3AD]'>so we created it for you</span>
                </h1>
                <p className='text-[23px]/7 font-normal text-[#4E5253] pt-4'>
                  That's essentially our story in one sentence.
                  <br />Crammed up hostels or cooped up PGs - not much of a choice, is it? Thats why we created Stanza Living - a place designed by people who've been in your shoes. Understand you. And are inspired by you.
                </p>
            </section>
            <section className='w-1/2'>
                <section className='rounded-lg flex justify-center items-center'>
                    <img className='rounded-lg' width='600' src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fw_800%2Fv1653991914%2FWebsite%2520v5%2FAbout_Us%2Fabout-us-image1.jpg&w=828&q=75" alt="" />
                </section>
            </section>
          </section>
          <section className='mx-8 mt-40 md:flex hidden flex-row'>
            <section className='w-1/2'>
                <section className='rounded-lg flex justify-center items-center'>
                    <img className='rounded-lg' width='400' src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cw_700%2Fv1673266619%2FWebsite%2520v5%2FBanner%2FBrand2.jpg&w=1080&q=75" alt="" />
                </section>
            </section>

            <section className='p-4 w-1/2 flex flex-col justify-center'>
                <h1 className='text-4xl font-bold'>
                  You needed a place like home, <br/> <span className='text-[#60C3AD]'>so we moved back home</span>
                </h1>
                <p className='text-[23px]/7 font-normal text-[#4E5253] pt-4'>
                  It was 2015. Two erstwhile IIM-A hostel roomies, Anindya and Sandeep, met again. Reminiscing about the 'good old hostel days', they realised a lot of that 'good' could've been better. So to give youngsters that 'better', in 2017, they set up a base in New Delhi, and the rest, as we say, is the present.
                </p>
            </section>
          </section>

                 {/* mobile view */}
        <div className='md:hidden flex shadow-md border-1 shadow-black/30 bg-white rounded-2xl mt-10 m-5 p-5 flex-col justify-center items-center'>
          <div>
             <h1 className='text-center text-[7vw]/8 font-semibold'>We didn't find it for us, <br/> <span className='text-[#60C3AD]'>so we created it for you</span></h1>          
          </div>
          <div className='mt-7 w-[70%] rounded-xl flex flex-row'>
            <div className='md:ml-50 h-full md:w-[20vw]'>
                <img className='object-cover h-full rounded-xl' src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fw_800%2Fv1653991914%2FWebsite%2520v5%2FAbout_Us%2Fabout-us-image1.jpg&w=828&q=75" alt="" />
            </div>
        </div>
        <div className='text-[#4E5253] text-lg/6 mt-5 text-center'>
              <p>
                  That's essentially our story in one sentence.
                  <br />Crammed up hostels or cooped up PGs - not much of a choice, is it? Thats why we created Stanza Living - a place designed by people who've been in your shoes. Understand you. And are inspired by you.
              </p>
          </div>
      </div>
        <div className='md:hidden flex shadow-md border-1 shadow-black/30 bg-white rounded-2xl mt-10 m-5 p-5 flex-col justify-center items-center'>
          <div>
             <h1 className='text-center text-[7vw]/8 font-semibold'> You needed a place like home, <br/> <span className='text-[#60C3AD]'>so we moved back home</span></h1>          
          </div>
          <div className='mt-7 w-[70%] rounded-xl flex flex-row'>
            <div className='md:ml-50 h-full md:w-[20vw]'>
                <img className='object-cover h-full rounded-xl' src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cw_700%2Fv1673266619%2FWebsite%2520v5%2FBanner%2FBrand2.jpg&w=1080&q=75" alt="" />
            </div>
        </div>
        <div className='text-[#4E5253] text-lg/6 mt-5 text-center'>
              <p>
                  It was 2015. Two erstwhile IIM-A hostel roomies, Anindya and Sandeep, met again. Reminiscing about the 'good old hostel days', they realised a lot of that 'good' could've been better. So to give youngsters that 'better', in 2017, they set up a base in New Delhi, and the rest, as we say, is the present.
              </p>
          </div>
      </div>

          <section className='flex justify-center flex-col items-center'>
            <section className='text-center md:w-1/2 w-full mx-8 md:mt-20 mt-10 p-10'>
                <h1 className='md:text-4xl text-3xl font-bold'>
                    You moved to a new city, <br/> 
                    <span className='text-[#60C3AD]'>so we moved there too</span>
                </h1>
                <p className='md:text-[23px]/7 text-xl font-normal text-[#4E5253] pt-4'>
                  Today, we've come a long way - from the two residences in Delhi to an impressive 450+ residences in more than 24+ cities across the country, and we promise we'll soon be ready to welcome you in many more
                </p>
            </section>
            <section>
              <img className='md:mt-10 md:pl-30 p-5 -mt-5' src="./img/ind.png" alt="" />
            </section>
          </section>
          
        </div>
      </div>
    </div>
  )
}

export default About