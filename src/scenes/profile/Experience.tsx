import {
  ArrowDownIcon,
  MapPinIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

const data_experince = [
  {
    title: "Universitas Kristen Maranatha",
    periode: "2018 - 2022",
    location: "Bandung",
    info: "Electrical Engineer S1",
    detali: [
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
  },
  {
    title: "PT PERDANA FRESTA GARMENT",
    periode: "2023 - now",
    location: "Padalalarang",
    info: "Full Stack Web Developer",
    detali: [
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
    ],
  },
];

const Sub_Experience = data_experince.map((data) => {
  return (
    <div className="mt-3 flex">
      <div className="h-28 sm:h-14">
        <button className="h-full rounded-md border-2 align-top">
          <ArrowDownIcon className="w-6 align-top"></ArrowDownIcon>
        </button>
      </div>

      <div className="flex-row pl-3">
        {/* Head */}
        <div className="h-28 flex-row justify-center sm:h-14">
          <div>{data.title}</div>
          <div className="flex-row gap-5 sm:flex">
            <div className="flex">
              <UserIcon className="w-5"></UserIcon>&nbsp;{data.info}{" "}
            </div>
            <div className="flex">
              <CalendarIcon className="w-5"></CalendarIcon>&nbsp;{data.periode}
            </div>
            <div className="flex">
              <MapPinIcon className="w-5"></MapPinIcon>&nbsp;{data.location}
            </div>
          </div>
        </div>

        {/* all info */}
        <div className="flex">
          <div className="mr-3 w-2 rounded-xl bg-yellow-400">&nbsp;</div>

          <table className="w-full">
            {data.detali.map((datadetail) => {
              const classnamediv = function (doing: string): string {
                if (doing == "Training") return "bg-red-900";
                if (doing == "Activity") return "bg-yellow-700";
                if (doing == "Project") return "bg-neutral-600";
                else return "bg-slate-600";
              };

              return (
                <tr className={"w-full " + classnamediv(datadetail.doing)}>
                  <td className="hidden px-5 text-center md:inline ">
                    {datadetail.time}
                  </td>
                  <td className="hidden px-5 text-left sm:inline ">
                    {datadetail.doing}
                  </td>
                  <td className="px-5 text-left">{datadetail.info}</td>
                </tr>
              );
            })}
          </table>
        </div>

        {/* just one */}
      </div>
    </div>
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
