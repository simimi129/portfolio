import adminDashboardImg from "../assets/admin-dashboard.png";
import salaryGuideImg from "../assets/salary-guide.png";

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
};
