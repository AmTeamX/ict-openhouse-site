import Link from 'next/link'
import Button from '~/components/Button'
import { ThankYouHeaderWordmark } from '~/components/Icons'
import Wrapper, { BG_VARIANT_TYPES } from '~/layouts/Wrapper'

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
  const buttonClass = "w-48 mt-4 mx-2 text-lg ";
  return (

    <Wrapper variant={BG_VARIANT_TYPES.LANDING}>
      <div className="flex flex-col items-center justify-center py-16">
        <ThankYouHeaderWordmark />
        <h1 className='mt-10 text-slate-500  text-3xl text-center'>Welcome to ICT Mahidol Open House 2025!</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <Link href="/register" passHref legacyBehavior>
            <Button
              label="Go to Register"
              variant="confirm"
              className={buttonClass}
            />
          </Link>
          <Link href="/evaluation" passHref legacyBehavior>
            <Button
              label="Go to Evaluation"
              variant="confirm"
              className={buttonClass}
            />
          </Link>
        </div>
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