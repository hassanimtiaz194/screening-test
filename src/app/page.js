import Image from "next/image";
import styles from "./page.module.css";
import TimeLine from "@/components/timeline/TimeLine";
import { datatable_data, timeline_data } from "@/constants/constants";
import DataTable from "@/components/data-table/DataTable";
import DatePicker from "@/components/date-picker/DatePicker";

export default function Home() {
  return (
    <>
      <TimeLine data={timeline_data} />
      <DataTable data={datatable_data} />
      <DatePicker />
    </>
  );
}
