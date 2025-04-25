"use client";
import { useAtom } from "jotai";
import { log } from "../atoms/IsLoggedInAtom";
// import Login from "@/components/Login";
import { useEffect } from "react";
import LoginWithDB from "@/components/LoginWithDB";

export default function Home() {
  const [logState, setLogState] = useAtom(log);
  useEffect(() => {
    if (localStorage.getItem("loggedAccount") != "") {
      setLogState(true);
    }
  }, []);
  return (
    <>
      {!logState ? (
        <LoginWithDB func={setLogState} />
      ) : (
        <span className="text-2xl font-bold">
          Now you&#39;re signed in with
          <span className="ml-2 underline italic">
            {localStorage.getItem("loggedAccount")}
          </span>
        </span>
      )}
    </>
  );
}
