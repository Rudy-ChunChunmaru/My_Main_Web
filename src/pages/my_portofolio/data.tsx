import { image_01,image_02 } from "./data_asset";

interface dataProjectProps {
  title: string;
  info: string;
  time: string;
  photodetail: string[];
};

export const dataProject: dataProjectProps[] = [
  {
    title: "Project ERP System Codeigniter, Jquery and MySQL",
    info: "On this project web application, The application aims to record exports and imports produced by the company and carry out price changes, create invoices and reports to customs on export-import goods. This application helps companies speed up the delivery of goods and licensing and billing and record sales.",
    time: "2023",
    photodetail: image_01,
  },
  {
    title: "Project Data Warehose",
    info: "This web application is designed to manage company export and import activities, including recording transactions, handling price adjustments, generating invoices, and preparing customs reports. It integrates an ETL process that extracts data from multiple databases and various APIs, transforms and loads it into the Data Warehouse, and provides an interactive dashboard system for monitoring performance, delivery, licensing, billing, and sales tracking.",
    time: "2025",
    photodetail: image_02,
  },
];