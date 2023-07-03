import React from 'react'
import wal from '../pages/walpaper.png'
import './page.css'
import { AiFillGithub,AiFillFacebook,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai';


const Home = () => {
  return (
    <div className='main homeFont bg-[red] '>
      <img src={wal} className='obj'/>

        <div className='overlay1  p-3 md:pl-[80px]'>


      <div className='  text-[20px] md:text-[30px] text-red-500  '>Heh, I'm Sanjay..</div>

      <div className=' text-white text-[25px] md:text-[40px]  '> Thank you for taking the time to explore our site..!  </div>
      <div className='  flex  text-[20px] md:text-[30px] '>

<a href='https://www.linkedin.com/in/sanjay-acharya-693a58121/' target="_blank" alt='LinkedIn'>  <AiFillLinkedin className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500 '/></a>
<a href='https://github.com/Sanjay-acharya-au50' target="_blank" alt='GitHub'>  <AiFillGithub className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500 '/></a>
<a href='https://www.instagram.com/sanju_93__/' target="_blank" alt='instagram' >  <AiOutlineInstagram className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500 '/> </a>
<a href='https://www.facebook.com/sanjay.acharya.98229' target="_blank" alt='Facebook'>  <AiFillFacebook className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500 '/></a>


</div>

</div>

    </div>
  )
}

export default Home