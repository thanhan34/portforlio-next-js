import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { IService, ISkill, IProject } from './types'

import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, authentication, storage and hosting with <b>Firebase</b>',
   },
   {
      Icon: AiOutlineApi,
      title: 'Mobile Development',
      about:
         'Develop cross-platform mobile application with <b>React Native</b>',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about:
         'Continuing learn and apply new technologies to solve business problems ',
   },
   {
      Icon: AiOutlineAntDesign,
      title: 'UI/UX designer',
      about:
         'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
   },
   {
      Icon: RiComputerLine,
      title: 'Future target',
      about:
         'Develop web application with <b>Next JS</b> and <b> Static Site Generator </b>',
   },
]

export const languages: ISkill[] = [
   {
      Icon: BsCircleFill,
      name: 'Python',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Java Script',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'React Native',
      level: '80',
   },
   {
      Icon: BsCircleFill,
      name: 'React',
      level: '70',
   },
   {
      Icon: BsCircleFill,
      name: 'Django',
      level: '80',
   },
   {
      Icon: BsCircleFill,
      name: 'Bootstrap',
      level: '80',
   },
]

export const tools: ISkill[] = [
   {
      Icon: BsCircleFill,
      name: 'Figma',
      level: '85',
   },
   {
      Icon: BsCircleFill,
      name: 'Photoshop',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Illustrator',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'Framer',
      level: '45',
   },
]

export const projects: IProject[] = [
   {
     id: 0,
     name: "COVID Tracker",
     description:
       "This app shows a statistical view about corona virus over the world",
     image_path: "/images/Covid-19-tracker.png",
     deployed_url: "https://covid-19-tracker-5c315.web.app/",
     github_url: "https://github.com/thanhan34/covid-19-tracker",
     category: ["react"],
     key_techs: ["React", "Chart.js", "Material UI"],
   },
   {
    id: 1,
    name: "Tesla Clone",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/tesla-clone.png",
    deployed_url: "https://tesla-clone-an-doan.netlify.app/",
    github_url: "https://github.com/thanhan34/tesla-clone",
    category: ["react"],
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],
  },
  {
    id: 2,
    name: 'Amazon Clone',    
    image_path: "/images/amazon clone.png",
    deployed_url: 'https://e-clone-af186.web.app/',
    github_url: 'https://github.com/thanhan34/amazon-clone',
    category: ['react', 'Content API', 'firebase'],
    description: 'Using React JS, Material UI, Firebase',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 3,
    name: 'Netflix Clone',
    image_path: "/images/netflixclone.png",
    deployed_url: 'https://netflix-82366.web.app/',
    github_url: 'https://github.com/thanhan34/netflix-clone',
    category: ['react'],
    description: 'Using React JS, Material UI, API',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],
},
{
  id: 4,
    name: 'Facebook Clone',
    image_path: "/images/facebook clone.png",
    deployed_url: 'https://facebook-clone-1bd4f.web.app/',
    github_url: 'https://github.com/thanhan34/facebook-clone',
    category: ['react', 'firebase'],
    description: 'Using ReactJs, Material UI, Firebase',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],
},
{
  id: 5,
    name: 'Instagram Clone',
    image_path: "/images/instagram clone.png",
    deployed_url: 'https://instagram-clone-98eca.web.app/',
    github_url: 'https://github.com/thanhan34/Instagram-Clone-ReactJS',
    category: ['react', 'firebase'],
    description: 'Using React JS, Firebase, Material UI',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 6,
    name: 'Youtube Clone',
    image_path: "/images/youtube clone.png",
    deployed_url: 'https://youtube-clone-an-doan.netlify.app/',
    github_url: 'https://github.com/thanhan34/youtube-clone',
    category: ['react', 'router'],
    description: 'React JS Material UI Router',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 7,
    name: 'Whatsapp Clone',
    image_path: "/images/whatsappclone.png",
    deployed_url: 'https://whatsapp-clone-93596.web.app/',
    github_url: 'https://github.com/thanhan34/whatsapp-clone',
    category: ['react', 'Content API', 'router'],
    description: 'React JS, Context API, Router',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 8,
    name: 'Tiktok Clone',
    image_path: "/images/tiktok clone.png",
    deployed_url: 'https://tiktok-clone-an-doan.netlify.app/',
    github_url: 'https://github.com/thanhan34/tiktok-clone',
    category: ['react', 'firebase'],
    description: 'React JS Material UI, Firebase',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{ id: 9,
    name: 'Google Clone',
    image_path: "/images/google clone.png",
    deployed_url: 'https://google-clone-an-doan.netlify.app/',
    github_url: 'https://github.com/thanhan34/google-clone',
    category: ['react', 'Content API'],
    description: 'React JS, Material UI, Responsive, Content API, Custom Search JSON API',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 10,
    name: 'Airbnb Clone',
    image_path: "/images/airbnb clone.png",
    deployed_url: 'https://airbnb-clone-an-doan.netlify.app/',
    github_url: 'https://github.com/thanhan34/airbnb-clone',
    category: ['react', 'router'],
    description: 'React JS, Material UI, Responsive, React Router',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 11,
    name: 'Hulu Clone',
    image_path: "/images/hulu clone.png",
    deployed_url: 'https://hulu-clone-an-doan.netlify.app/',
    github_url: 'https://github.com/thanhan34/hulu-clone',
    category: ['react'],
    description: 'React JS, Material UI, TMDb API, Responsive',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 12,
    name: 'Discord Clone',
    image_path: "/images/discord clone.png",
    deployed_url: 'https://discord-clone-an-doan.netlify.app/',
    github_url: 'https://github.com/thanhan34/discord-clone',
    category: ['react', 'redux'],
    description: 'React JS, Material UI, Redux, Responsive',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},
{
  id: 13,
    name: 'LinkedIn Clone',
    image_path: "/images/linkedin.png",
    deployed_url: 'https://linkedin-andoan.netlify.app/',
    github_url: 'https://github.com/thanhan34/linkedin-clone',
    category: ['react', 'redux'],
    description: 'React JS, Material UI, Redux, Firebase',
    key_techs: ["React", "Smooth scroll", "Scroll Animation"],

},

   
 ];