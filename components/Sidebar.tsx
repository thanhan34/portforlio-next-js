import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Typical from 'react-typical'


const Sidebar = () => {
   const { theme, setTheme } = useTheme()

   const changeMode = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }
   return (
      <>
         <img
            src="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/71083781_10214932870304025_3054890081639727104_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=M5topl2iu4UAX-Oueyz&_nc_ht=scontent.fbne6-1.fna&oh=19e2a97499883fd40ec201e6c633b32f&oe=607CAC70"
            alt='avatar'
            className='w-32 h-32 mx-auto border rounded-full '
            
         />
         <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-yellow-500 '>An</span> Doan
         </h3>
         
         <Typical className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
               steps={['Web Developer', 10000, 'React Developer', 10000, "Frontend Developer", 10000]}
               loop={Infinity}
               wrapper="p"
            />
         
         <a
            href='/assets/Sumit Dey Resume.pdf'
            download='Sumit Dey Resume.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200'>
            <GiTie className='w-6 h-6 text-yellow-500' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
           
            <a href='https://www.linkedin.com/in/an-doan-3130b1133/'>
               <AiFillLinkedin className='w-8 h-8 text-yellow-500 cursor-pointer' />
            </a>
            <a href='https://github.com/thanhan34'>
               <AiFillGithub className='w-8 h-8 text-yellow-500 cursor-pointer' />{' '}
            </a>
            <a href='https://www.facebook.com/DanChoi.DaiKa/'>
               <AiFillFacebook className='w-8 h-8 text-yellow-500 cursor-pointer' />
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>Brisbane, Australia </span>
            </div>
            <p className='my-2 '> dtan42@gmail.com </p>
            <p className='my-2'> 0450669092 </p>
         </div>

         {/* Email Button */}

         <button
            className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-300 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mailto:dtan42@gmail.com')}>
            Email me
         </button>
         <button
            onClick={() => changeMode()}
            className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-500 focus:outline-none hover:scale-105 '>
            {/* //TODO remove bg black */}
            Change Theme
         </button>
      </>
   )
}

export default Sidebar