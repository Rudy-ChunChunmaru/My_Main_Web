import { ArrowDownIcon } from "@heroicons/react/24/solid";

const data_experince = [
  {
    title: "Universitas Kristen Maranatha",
    periode: "2018 - 2022",
    location: "Bandung",
    info: "Electrical Engineer S1",
    detali: [
      "Activity: Wiratha Fest as a teaching mentor member (2019)",
      "Training: Using eagle to design PCB board (2019)",
      "Training: IOT using ESP base on Web system (2019)",
      "Project: 3D Desain using 360 Fusion and 3D Printing (2020)",
      "Activity: HIMA Electrical Engineering member of the RnD management (2020)",
      "Training: Basic M221 Programmable Logic Controller & HMI at Schneider PLC Training (2020)",
      "Project: Implementation of Augmented Reality (AR) on Chiller Machine (2021)",
      "Project: Desain Project District Cooling System (2021) =>link:https://www.youtube.com/watch?v=dOKohYUNeXQ&ab_channel=TeknikElektro-Maranatha",
      "Project: pH control system in water containers using microchip control (2021)",
      "Project: Autonomous Robot AI Inventory Based on Item Color (2021) =>link:https://www.youtube.com/watch?v=De_9H4tOCIM&ab_channel=TeknikElektro-Maranatha",
      "Competition: Programmable Logic Control Competition pada Electro Activities Programmable 2021 (E-TIME 2021)",
      "Graduated: Graduated from Maranatha Christian University, Bandung with GPA/IPK 3.25 (2022)",
    ],
  },
  {
    title: "PT PERDANA FRESTA GARMENT",
    periode: "2022 - now",
    location: "Padalalarang",
    info: "Full Stack Web Developer",
    detali: [
      "Training: Store data using Mysql, Backend using framework codeigniter and frontend using jqueryUI (2022)",
      "Project: making web app to store data export and import garment and textile (2023)",
      "Training: Git repo (2023)",
      "Training: Backend django, framework django and python (2023)",
      "Training: TypeScript for front React and nestjs (2023)",
    ],
  },
];

const Sub_Experience = data_experince.map((data) => {
  return (
    <div className="mt-3 flex">
      <div className="h-14">
        <button className="h-full rounded-md border-2 align-top">
          <ArrowDownIcon className="w-6 align-top"></ArrowDownIcon>
        </button>
      </div>

      <div className="flex-row pl-3">
        <div className="h-14 flex-row justify-center">
          <div>{data.title}</div>
          <div>
            {data.info} - <span>({data.periode})</span> - {data.location}
          </div>
        </div>

        <div className="flex">
          <div className="mr-3 w-2 rounded-xl bg-yellow-400">&nbsp;</div>

          <div>
            {data.detali.map((datadetail) => {
              return <p>{datadetail}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

const Experience = () => {
  return (
    <div className="flex-row">
      <div className="relative -left-2 rounded-bl-lg border-b-2 border-l-2 p-2">
        Experience
      </div>
      {Sub_Experience}
    </div>
  );
};

export default Experience;
