import image from "../assets/project/new_portofolio.jpg";
import image1 from "../assets/project/kedai_mamsuki.jpg";
import image2 from "../assets/project/jalankodeku.jpg";
import image3 from "../assets/project/kbmdsi.jpg";
import image4 from "../assets/project/n_blog.jpg";
import image5 from "../assets/project/old_portofolio.jpg";

  export const data = [
    {
      id: 1,
      title: "MY NEW PORTFOLIO",
      imageUrl: image,
      description: "My newest portfolio website, which you are visiting now, was created with the aim of tidying up and updating your portfolio and learning about new tech stacks.",
      url: "https://ananta-risky-susanto.vercel.app/",
      techStack: ["Vite", "React", "Tailwind CSS", "DaisyUI", "Framer Motion", "SplideJS", "Laravel", "Particle.js"],
    },
    {
      id: 2,
      title: "KEDAI MAMSUKI",
      imageUrl: image1,
      description:
        "Web Based Point Of Sale Application using Laravel, Personal projects in terms of supporting my sister's business and in the form of my service. There are several features such as Basic CRUD, Searching, Login and features that support point of sale applications",
      url: null,
      techStack: ["Laravel", "Bootstrap"],
    },
    {
      id: 3,
      title: "JALAN KODEKU",
      imageUrl: image2,
      description:
        "Jalan Kodeku is a final project assignment for a user interface design course in the form of a programming learning website targeted at all groups, whether they are laypeople or those who have already been involved in programming. This website displays the learning stages for each job role in the IT field, then there is also a blog about news updates in the IT world. Don't forget, there are also questions that users can try. Thank you to my group friends who have worked hard on this final project ❤︎",
      url: "https://jalankodeku.vercel.app/",
      techStack: ["Vite", "React", "Tailwind CSS", "SwiperJS", "SASS"],
    },
    {
      id: 4,
      title: "KBMDSI WEBSITE",
      imageUrl: image3,
      description:
        "The KBMDSI organizational web was developed by the informatics team, in which I participated in the front end aspect. This website introduces KBMDSI itself so that this website becomes KBMDSI's branding to the outside. This website has a blog-like feature. Then there is also a registration feature for intern staff",
      url: "https://kbmdsi.ub.ac.id/",
      techStack: ["Vite", "Tailwind CSS", "Laravel"],
    },
    {
      id: 5,
      title: "N BLOG",
      imageUrl: image4,
      description:
        "This is my personal project in terms of learning Laravel using the concept of project based learning. Where this project is a blog website, where there are login features, and basic crud such as creating a blog, updating blogs, reading blogs and deleting blogs. Then there are searching and pagination features",
      url: "https://github.com/anantariskys/N-Blog",
      techStack: ["Laravel", "Bootstrap"],
    },
    {
      id: 6,
      title: "MY OLD PORTFOLIO",
      imageUrl: image5,
      description: "This is a personal project for study purposes and as a portfolio to register with organizations, but this is where it all starts >_<",
      url: "https://anantariskys.github.io/",
      techStack: ["HTML", "CSS", "JavaScript", "Bootsrap"],
    },
  ];

