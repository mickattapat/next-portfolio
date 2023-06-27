import profile from "/public/images/mick3.png"
import { AiOutlineGithub } from "react-icons/ai";

export const info = {
  profileLogo: profile,
  firstName: "Attapat",
  lastName: "Kayasa",
  initials: "Ak", // the example uses first and last, but feel free to use three or more if you like.
  position: "web developer",
  miniBio: [
    {
      emoji: "💼",
      text: "frontend developer",
      isLink: '',
      link: false
    },
    {
      emoji: "📚",
      text: "learning",
      isLink: 'https://blog.iamlabs.me',
      link: true
    },
    // {
    //   emoji: "🚀",
    //   text: "active",
    //   isLink: '',
    //   link: false
    // },
    {
      emoji: "📧",
      text: "attapat.work@gmail.com",
      isLink: '',
      link: false
    },
    {
      emoji: <AiOutlineGithub/>,
      text: "https://github.com/mickattapat",
      isLink: 'https://github.com/mickattapat',
      link: true
    },
    {
      emoji: "📞",
      text: "(+66)88-187-7188",
      isLink: '',
      link: false
    },
  ],
  bio: "Hello! 👋🏻 I'm Attapat. I'm a web developer. 3 years 5 months experience with frontend I studied IT at Prince of Songkhla University and Bussiness Computer at Hatyai commercial technological college , I enjoy to work. I always want to learn something new,and I believe that my knowledge will definitely help develop your company. You should hire me!",
  skills: {
    Intermediate_FE: [
      "Javascript",
      "React/Next",
      "Vue/Nuxt",
      "Angular",
      "Git",
      "HTML",
      "CSS",
      "WordPress",
    ],
    Intermediate_FE_Basic: [],
    Intermediate_BE: ["Go","Node.js", "Docker", "Nginx", "Linux"],
    Intermediate_BE_Basic: [
      "Nest.js",
      "PHP",
      "Database",
      "Database-design",
      "Kubernetes",
    ],
  },
    hobbies: [
    {
      label: "learning",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "music",
      emoji: "🎹",
    },
    {
      label: "play_games",
      emoji: "🎮",
    },
  ],
}
