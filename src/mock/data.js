/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sefa Baah - Acheamphour', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'About me', //  e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sefa Baah - Acheamphour',
  subtitle: 'I am a Software/Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_2.jpg',
  paragraphOne:
    'Hello, my name is Sefa Baah - Acheamphour, I am a software/ web developer. A graduate of Seneca college, trying to learn new skills that I could add to my existing skills as well as improve on the ones I already have as well. ',
  paragraphTwo:
    '    Professionally, I am a software developer looking to contribute with my technical experiences and skills that were acquired in college and co-op internship. Looking forward to developing more skills and gaining more experience.',
  paragraphThree: 'You could read more about me on my resume by clicking the button below.',
  resume: 'https://drive.google.com/file/d/1i_4Ig9D-dPS9i5Dsefjz14_BV_YbJKRw/view', // if no resume, the button will not show up
};

// PROJECTS DATA
// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'monster-rolodex.png',
    title: 'Monsters Rolodex',
    info:
      'Is a basic react project with a search box, card, and card-list functionalities. This single page has the ability to fetch data and images depending on the image id; along with a fixed image size of 200x200. ',
    info2: '',
    url: 'https://sbaah.github.io/monsters-rolodex/',
    repo: 'https://github.com/Sbaah/monsters-rolodex/tree/main', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-brain.png',
    title: 'SmartBrain or Face Recognition',
    info:
      "This application allows the user to detect a face by just inputting an image URL, which will determine if the mage has a face. If if a face is found a box will be displayed over the face.This is done by sending the information inputted information to  Clarifai for confirmation its response is used to display the face detection box. It also the configuration of Postgres where it registers a user, along with hashing the user's password. ",
    info2: '',
    url: '  https://sbaah.github.io/SmartBrain/',
    repo: 'https://github.com/Sbaah/SmartBrain', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'You Could Reach Me @',
  email: 'sbaah12@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sefa-baah-acheamphour-70a80aa2',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Sbaah',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
