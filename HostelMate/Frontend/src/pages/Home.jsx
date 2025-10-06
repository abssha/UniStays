import React from 'react'
import HomeTop from '../container/HomeTop'
import Marque from '../components/Marque'
const Home = () => {


  const img=[
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fh_176%2Cf_auto%2Cq_auto%2Fv1584370857%2FNewWebsite%2Fnew_livemint_2x.png&w=828&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fh_100%2Cf_auto%2Cq_auto%2Fv1584370904%2FNewWebsite%2Fnew_vccircle_2x.png&w=828&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fh_100%2Cf_auto%2Cq_auto%2Fv1584370742%2FNewWebsite%2Fnew_forbes_2x.png&w=828&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fh_102%2Cf_auto%2Cq_auto%2Fv1584370704%2FNewWebsite%2Fnew_entrepreneur_2x.png&w=828&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fh_100%2Cf_auto%2Cq_auto%2Fv1584370930%2FNewWebsite%2Fnew_yourstory_2x.png&w=828&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Fh_174%2Cf_auto%2Cq_auto%2Fv1584370779%2FNewWebsite%2Fnew_fortune_2x.png&w=828&q=75"
  ]

  
  return (
    <div className='overflow-x-hidden p-0 m-0'>
      <HomeTop/>
      <Marque img={img}/>
    </div>
  )
}

export default Home
