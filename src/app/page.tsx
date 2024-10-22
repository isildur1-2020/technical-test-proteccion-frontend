"use client";
import { getMomentFormatted } from "@/lib/utils";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const URL_BASE = "https://infokiwanas.com/v1.0/api/fibonacci";
  const [series, setSeries] = useState([]);
  const [reload, setReload] = useState(new Date());
  const getSeries = async () => {
    try {
      const series = await axios.get(URL_BASE);
      setSeries(series?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSeries();
  }, [reload]);

  const handleClick = async () => {
    await axios.post(URL_BASE);
    alert("Fibonacci serie generated");
    setReload(new Date());
  };

  return (
    <div className="Home">
      <div className="Home__time">
        <span>{getMomentFormatted({ format: "HH:mm:ss" })}</span>
      </div>
      <div>
        <Button onClick={handleClick} variant="contained">
          Generate Fibonacci serie
        </Button>
      </div>
      <div className="Home__series">
        {series?.map(({ _id, time, serie }) => (
          <div className="Home__item" key={_id}>
            <span>TIME: {time}</span>
            <span>SERIE: {serie}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
