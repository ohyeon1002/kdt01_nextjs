"use client";
import { useAtom } from "jotai";
import { log } from "../atoms/IsLoggedInAtom";
import Login from "@/components/Login";

export default function Home() {
  const [logState, setLogState] = useAtom(log);
  return (
    <>
      {!logState ? (
        <Login func={setLogState} />
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
