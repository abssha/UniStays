import React from 'react'

const Cards = ({img}) => {
    const texts=[
        "Modern Student Housing",
        "Affordable Living Solutions",
        "Community & Connectivity",
    ]
  return (
    <div className='rounded-xl z-10 relative top-0 md:top-0 '>
        {img.map((src,index)=>(
        <div
        key={index} 
        className="m-3 relative w-[93%] rounded-2xl md:rounded-lg overflow-hidden md:w-[31vw] md:h-45 h-30 md:mb-4 md:mt-4 flex flex-col items-cente border border-gray-200 shadow-lg md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="absolute w-full h-full object-cover" src={src}/>
            <div className="absolute z-30 flex h-full flex-col justify-between p-4 bg-gradient-to-r from-white/10 to-gray-500/10 w-full leading-normal">
                <h5 className="w-1/2 md:mb-2 md:text-3xl text-xl text-gray-800 dark:text-white">{texts[index]}</h5>
            </div>
        </div>))}

    </div>
  )
}

export default Cards
