import { IctMahidolOpenHouseWordmark } from '~/components/Icons'
import Wrapper, { BG_VARIANT_TYPES } from '~/layouts/Wrapper'
import Image from 'next/image'
import liff from "@line/liff"
import Link  from 'next/link'
import { ThankYouHeaderWordmark } from '~/components/Icons'

// let text = [
//   <p>Please Login via LINE.</p>,
//   <p>โปรดล็อกอินผ่าน LINE</p>
// ];

//  if(false){
// //if(liff.isInClient()){
//   text = [
//     <p>You are registered. See your Passport via LINE.</p>,
//     <p> คุณลงทะเบียนเรียบร้อยแล้ว ดู Passport ของคุณผ่าน LINE</p>
//   ];
// }

const Page = () => {
  const data = 3065;
  return (

  <Wrapper>
    <div className="flex flex-col items-center justify-center">
        <ThankYouHeaderWordmark/>
        <Image width={600} height={600} src='/static/images/thanks.webp' alt='thank you img'/>
        <h1 className='mt-10 font-heading text-3xl text-center'>Thanks to Everyone!</h1>
        <h1 className='mt-2 font-heading text-3xl text-center'>See You Again at ICT Mahidol Open House 2024!</h1>
        <div className='mt-10 text-center text-xl text-white font-heading drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>And thank you to all our valued participants</div>
        <div className='py-2 px-8 font-heading text-[65px] md:text-[100px] bg-white rounded-xl text-black'>3065</div>
        {/* <div className="pt-2 flex justify-center md:gap-8">
        
          {data
            .toString()
            .split('')
            .map((number, index) => (
              <div
                key={index}
                className="inline-block rounded-xl bg-white px-5 text-center font-heading font-bold text-ict-magenta-process"
              >
                <div className="text-center text-[100px] font-bold leading-tight">{number}</div>
              </div>
            ))}
        </div> */}
    </div>

</Wrapper>

  )
}

export default Page;
// export default function() {return(<meta httpEquiv="Refresh" content="0;URL=/hello"/>)};

// const cards = [
//   {
//     name: 'Agenda',
//     img: '/static/images/button/agenda.webp',
//     link: '/agenda',
//   },
//   // {
//   //   name: 'Stats',
//   //   img: '/static/images/button/graph.webp',
//   //   link: 'https://openhouse.ict.mahidol.ac.th/stats',
//   // },
// ]