// image
import { image_01 } from "./asset_portofolio_image";

export type dataProgramType = {
  title: string;
  info: string;
  time: string;
  photodetail: string[];
};

export const data_program: dataProgramType[] = [
  {
    title: "Project Exim Codeigniter, Jquery and MySQL",
    info: "On this project web application, The application aims to record exports and imports produced by the company and carry out price changes, create invoices and reports to customs on export-import goods. This application helps companies speed up the delivery of goods and licensing and billing and record sales.",
    time: "2023",
    photodetail: image_01,
  }
];
