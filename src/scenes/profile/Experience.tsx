import Experience_detail from "./Experience_detail";
import logo_ukm from "@/assets/Logo-UKM.svg";
import logo_pfg from "@/assets/Logo-PFG.svg";

const data_experince = [
  {
    title: "Universitas Kristen Maranatha",
    periode: "2018 - 2022",
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
        info: "Programmable Logic Control Competition pada Electro Activities Programmable E-TIME 2021",
        link: "",
      },
      {
        time: 2022,
        doing: "Graduated",
        info: "Graduated from Maranatha Christian University, Bandung with GPA/IPK 3.25",
        link: "",
      },
    ],
    logo: <img src={logo_ukm} alt="logo UKM" />,
  },
  {
    title: "PT PERDANA FRESTA GARMENT",
    periode: "2023 - now",
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
        time: 2023,
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
    ],
    logo: <img src={logo_pfg} alt="logo UKM" />,
  },
];

const Sub_Experience = data_experince.map((data, index) => {
  return (
    <Experience_detail
      times={index}
      title={data.title}
      periode={data.periode}
      location={data.location}
      info={data.info}
      detail={data.detail}
      logo={data.logo}
    ></Experience_detail>
  );
});

const Experience = () => {
  return (
    <div className="w-full flex-row">
      <div className="relative -left-2 rounded-bl-lg border-b-2 border-l-2 p-2">
        Experience
      </div>
      {Sub_Experience}
    </div>
  );
};

export default Experience;
