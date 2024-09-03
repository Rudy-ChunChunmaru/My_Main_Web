// --------------------------------------------------------------------------------------------------- Experince
import logo_ukm from "@/assets/Logo-UKM.svg";
import logo_pfg from "@/assets/Logo-PFG.svg";

export type dataExperinceType = {
  title: string;
  periode: string;
  location: string;
  info: string;
  detail: dataExperinceDetailType[];
  logo: string;
};

export type dataExperinceDetailType = {
  time: number;
  doing: string;
  info: string;
  link?: string;
};

export const data_experince: dataExperinceType[] = [
  {
    title: "Universitas Kristen Maranatha",
    periode: "Aug 2018 - Jul 2022",
    location: "Bandung",
    info: "Electrical Engineer S1",
    detail: [
      {
        time: 2019,
        doing: "Activity",
        info: "Wiratha Fest as a teaching mentor member",
        link: "",
      },
      {
        time: 2019,
        doing: "Training",
        info: "Using eagle to design PCB board",
        link: "",
      },
      {
        time: 2019,
        doing: "Training",
        info: "IOT using ESP base on Web system",
        link: "",
      },
      {
        time: 2020,
        doing: "Project",
        info: "3D Desain using 360 Fusion and 3D Printing",
        link: "",
      },
      {
        time: 2020,
        doing: "Activity",
        info: "IMA Electrical Engineering member of the RnD management",
        link: "",
      },
      {
        time: 2020,
        doing: "Training",
        info: "Basic M221 Programmable Logic Controller & HMI at Schneider PLC Training",
        link: "",
      },
      {
        time: 2021,
        doing: "Project",
        info: "Implementation of Augmented Reality (AR) on Chiller Machine",
        link: "",
      },
      {
        time: 2021,
        doing: "Project",
        info: "Desain Project District Cooling System",
        link: "https://www.youtube.com/watch?v=dOKohYUNeXQ&ab_channel=TeknikElektro-Maranatha",
      },
      {
        time: 2021,
        doing: "Project",
        info: "pH control system in water containers using microchip control",
        link: "",
      },
      {
        time: 2021,
        doing: "Project",
        info: "Autonomous Robot AI Inventory Based on Item Color",
        link: "https://www.youtube.com/watch?v=De_9H4tOCIM&ab_channel=TeknikElektro-Maranatha",
      },
      {
        time: 2021,
        doing: "Competition",
        info: "Programmable Logic Control Competition at Electro Activities Programmable E-TIME 2021",
        link: "",
      },
      {
        time: 2022,
        doing: "Graduated",
        info: "Graduated from Maranatha Christian University, Bandung with GPA/IPK 3.25",
        link: "",
      },
    ],
    logo: logo_ukm,
  },
  {
    title: "PT PERDANA FRESTA GARMENT",
    periode: "Feb 2023 - Sep 2024",
    location: "Padalalarang",
    info: "Full Stack Web Developer",
    detail: [
      {
        time: 2023,
        doing: "Training",
        info: "Store data using Mysql, Backend using framework codeigniter and frontend using jqueryUI",
        link: "",
      },
      {
        time: 2023,
        doing: "Project",
        info: "making web app to store data export and import garment and textile",
        link: "",
      },
      {
        time: 2023,
        doing: "Training",
        info: "Git Repo",
        link: "",
      },
      {
        time: 2023,
        doing: "Training",
        info: "Backend django, framework django and python",
        link: "",
      },
      {
        time: 2024,
        doing: "Project",
        info: "making web app report sell and using textile to make garment",
        link: "",
      },
      {
        time: 2024,
        doing: "Training",
        info: "TypeScript for front React and nestjs",
        link: "",
      },
      {
        time: 2024,
        doing: "Project",
        info: "This Website: Make my own web site about my profile using React TypeScript",
        link: "",
      },
      {
        time: 2024,
        doing: "Training",
        info: "Web Front end using redux react",
        link: "",
      },
      {
        time: 2024,
        doing: "Training",
        info: "Learn docker works, build image docker and deploy the image into docker ",
        link: "",
      },
      {
        time: 2024,
        doing: "Project",
        info: "Making web app For my own using django for backend and forntend using react app",
        link: "",
      },
      {
        time: 2024,
        doing: "Training",
        info: "Learn basic about MQTT IOT",
        link: "",
      },
      {
        time: 2024,
        doing: "Project",
        info: "Deployment server local to public internet using tunnel cloundflare",
        link: "",
      },
    ],
    logo: logo_pfg,
  },
];

// --------------------------------------------------------------------------------------------------- Skill

export type dataSkillType = {
  katergori: string;
  setskill: dataSkillSetSkillType[];
};

export type dataSkillSetSkillType = {
  title: string;
  point: number;
};

export const data_skill: dataSkillType[] = [
  {
    katergori: "Programing Language",
    setskill: [
      { title: "C++", point: 6 },
      { title: "C", point: 3 },
      { title: "php", point: 6 },
      { title: "python", point: 6 },
      { title: "HTML", point: 9 },
      { title: "Javasciprt", point: 6 },
      { title: "TypeScript", point: 6 },
      { title: "CSS", point: 6 },
      { title: "SQL", point: 6 },
    ],
  },
  {
    katergori: "Framework",
    setskill: [
      { title: "ardunio and esp", point: 6 },
      { title: "codeigniter", point: 6 },
      { title: "Django and Rest Framework", point: 5 },
      { title: "Nestjs", point: 4 },
      { title: "Reactjs", point: 5 },
    ],
  },
  {
    katergori: "Tool",
    setskill: [
      { title: "Eagle", point: 6 },
      { title: "Fusion 360", point: 6 },
      { title: "VS Code", point: 7 },
    ],
  },
];
