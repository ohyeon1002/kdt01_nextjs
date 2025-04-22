"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <span className="text-2xl font-bold">
        Now you're signed in with
        <span className="ml-2 underline italic">
          {localStorage.getItem("loggedAccount")}
        </span>
      </span>
    </>
  );
}
