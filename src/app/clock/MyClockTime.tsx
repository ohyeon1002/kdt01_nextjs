"use client";
import { useState, useEffect } from "react";

export default function MyClockTime() {
  const [timenow, setTimenow] = useState<Date>(new Date());
  useEffect(() => {
    const tm = setInterval(() => {
      setTimenow(new Date());
    }, 1000);
    return () => {
      clearInterval(tm);
    };
  }, [timenow]);

  return (
    <>
      <p className="text-center my-5 text-2xl font-bold">현재시각</p>
      <p className="text-xl">{timenow.toLocaleTimeString()}</p>
    </>
  );
}
