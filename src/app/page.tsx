"use client";

export default function Home() {
  return (
    <>
      <span className="text-2xl font-bold">
        Now you&#39;re signed in with
        <span className="ml-2 underline italic">
          {localStorage.getItem("loggedAccount")}
        </span>
      </span>
    </>
  );
}
