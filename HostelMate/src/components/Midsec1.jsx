import React from 'react'

const Midsec1 = () => {
  return (
    <div className='w-full h-200 md:pt-20 pt-10 bg-gray-50 mt-10'>
      <div className='text-center'>
        <h1 className='md:text-5xl text-3xl font-bold'><span className='text-[#60C3AD]'>Not just</span> four walls <br className='md:hidden'/>and a roof</h1>
        <p className='text-[#4E5253] text-lg/6 mt-2 md:text-2xl/9'>Come over and experience how a place to <br className='md:hidden'/> stay can be so much more</p>
      </div>
    
        <div className='mt-5 md:mt-20 h-[60vw] w-[75vw] md:w-full md:h-[30vw] rounded-xl md:flex hidden flex-row'>
          <div className='md:ml-50 h-full md:w-[20vw]'>
              <img className='object-cover h-full rounded-xl' src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1652203344%2FWebsite%2520v5%2FBestLife%2Fbuilding.jpg&w=828&q=75" alt="" />
          </div>
          <div className='ml-3 md:ml-5 flex flex-col'> 
              <div className='mb-2 md:mb-7'>
                <img className="rounded-xl w-[40vw] h-[28vw] md:w-[18vw] md:h-[14vw] object-cover" src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1653558760%2FWebsite%2520v5%2FBestLife%2FSection_1_Pretoria_1.jpg&w=828&q=75" alt="" />
              </div>
              <div className='mb-5'>
                <img className="md:w-[18vw] w-[40vw] h-[29vw] md:h-[14vw] rounded-xl object-cover" src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1656507903%2FWebsite%2520v5%2FBestLife%2Fhome_page_section_1.jpg&w=828&q=75" alt="" />
              </div>
          </div>
          <div className='hidden md:flex md:justify-center md:items-center md:ml-15'>
          <div className='m-5 md:h-55 md:flex-col mt-10 rounded-xl'>
            <h1 className='text-left font-bold text-4xl'>Start living your best life <br/>from <span className='text-[#60C3AD]'>day one</span>
            </h1>
            <h2 className='font-normal text-2xl/7 mt-3 text-[#4E5253]'>
              Bring a box full of hopes, dreams, ambitions… and <br/>of course, your personal belongings. Everything else<br/> - furniture, appliances, food - has already been<br/>taken care of.
            </h2>
          </div>
          </div>
      </div>

      {/* mobile view */}
        <div className='md:hidden flex shadow-sm shadow-gray-300 bg-white rounded-2xl mt-10 m-5 p-5 flex-col justify-center items-center'>
          <div>
             <h1 className='text-center text-[7vw]/8 font-semibold'>Start living your best life <br/> from <span className='text-[#60C3AD]'>day one</span></h1>          
          </div>
          <div className='mt-7 h-[60vw] w-[75vw] rounded-xl flex flex-row'>
            <div className='md:ml-50 h-full md:w-[20vw]'>
                <img className='object-cover h-full rounded-xl' src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1652203344%2FWebsite%2520v5%2FBestLife%2Fbuilding.jpg&w=828&q=75" alt="" />
            </div>
            <div className='ml-3 md:ml-5 flex flex-col'> 
                <div className='mb-2 md:mb-7'>
                  <img className="rounded-xl w-[40vw] h-[28vw] md:w-[18vw] md:h-[14vw] object-cover" src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1653558760%2FWebsite%2520v5%2FBestLife%2FSection_1_Pretoria_1.jpg&w=828&q=75" alt="" />
                </div>
                <div className='mb-5'>
                  <img className="md:w-[18vw] w-[40vw] h-[29vw] md:h-[14vw] rounded-xl object-cover" src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1656507903%2FWebsite%2520v5%2FBestLife%2Fhome_page_section_1.jpg&w=828&q=75" alt="" />
                </div>
            </div>
        </div>
        <div className='text-[#4E5253] text-lg/6 mt-5 text-center'>
              <p>
                Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.
              </p>
          </div>
      </div>
    </div>
  )
}

export default Midsec1
