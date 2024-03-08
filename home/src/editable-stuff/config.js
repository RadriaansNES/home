// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ryan",
  middleName: "",
  lastName: "Adriaans",
  message: " Passionate about changing the world through technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/RadriaansNES",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ryan.adriaans",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ryanadriaans/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ryan-adriaans-a0579b26a/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/head.png"),
  imageSize: 375,
  message:
    "Hello, my name is Ryan Adriaans. I'm a Laurentian University graduate of 2019 with a degree in Mechanical Engineering. Unbeknownst to me, I would graduate with skills and passion within Matlab, Java and other engineering related software ultimately leading me to pursue my true passion, programming. I'm most enthusiastic about being able to create something from the ground up, and to see it successfully come to fruition in order to improve the world around it. I crave the challenge and complexity that programming languages can provide. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "RadriaansNES", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['InteractiveResume', 'CarbonCalculator', 'ECom', 'GLP'],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Project Concepts",
  message:
    "Creating each and every project starts with a pre-determined set of concepts that should be implemented. These concepts range from different program functions, use of syntax/modules or simply just logic. As such, I would like to demonstrate some of the following concepts implemented within my projects. These concepts and projects include but are not limited to; ",
  images: [
    { 
      img: require("../editable-stuff/asteroids.png"), 
      label: " ", 
      paragraph: " " 
    },
    { 
      img: require("../editable-stuff/tic.png"), 
      label: " ", 
      paragraph: " " 
    },
    { 
      img: require("../editable-stuff/cbook.png"), 
      label: " ", 
      paragraph: " " 
    },
    { 
      img: require("../editable-stuff/flask.png"), 
      label: " ", 
      paragraph: " " 
    },
    { 
      img: require("../editable-stuff/rss.png"), 
      label: " ", 
      paragraph: " " 
    },
    { 
      img: require("../editable-stuff/calc.png"), 
      label: " ", 
      paragraph: " " 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering/Developer opportunities. If you know of any positions available, have any questions, or if you just want to say 'hi', please don't hesistate to reach out to me at",
  email: "ryaan.1996s@hotmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
