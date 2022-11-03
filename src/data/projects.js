import adminDashboardImg from "../assets/admin-dashboard.png";
import salaryGuideImg from "../assets/salary-guide.png";
import brandingImg from "../assets/branding.png";
import schbauImg from "../assets/schbau.png";

export const projects = {
  react: [
    {
      title: "Dashboard",
      description: "Basic admin dashboard using React and MaterialUI",
      stack: ["html5", "css3", "javascript", "react"],
      imgUrl: adminDashboardImg,
      live: "https://demo-dashboard-react-mui.netlify.app",
      src: "https://github.com/simimi129/admin-dashboard",
    },
    {
      title: "Salary Guide",
      description:
        "A table showcasing salaries for different roles of IT in multiple countries, also calculates average values. I made this for myself to have an idea about my market value.",
      stack: ["html5", "css3", "javascript", "react"],
      imgUrl: salaryGuideImg,
      live: "https://demo-salary-guide.netlify.app/",
      src: "https://github.com/simimi129/salary-guide",
    },
  ],
  astro: [
    {
      title: "Branding",
      description:
        "A landing page for a branding company. Made it with Astro which is great beacause you can use it with components from different frontend frameworks. It is a SSG-site with partial hydration.",
      stack: ["html5", "css3", "javascript", "svelte", "astro"],
      imgUrl: brandingImg,
      live: "https://sameboat.netlify.app/",
      src: "https://github.com/simimi129/dingding",
    },
    {
      title: "Schbau",
      description:
        "A landing page for a construction professional. Made also made it with Astro using Svelte components.",
      stack: ["html5", "css3", "javascript", "svelte", "astro"],
      imgUrl: schbauImg,
      live: "https://schbau.net/",
      src: "https://github.com/simimi129/schbau",
    },
  ],
};
