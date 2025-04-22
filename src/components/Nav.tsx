"use client";

import { useAtom } from "jotai";
import { log } from "@/atoms/IsLoggedInAtom";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [logState, setLogState] = useAtom(log);
  const handleLogOut = () => {
    setLogState(false);
    localStorage.setItem("loggedAccount", "");
  };
  return (
    <>
      <div className="flex flex-row">
        <Image src="/react.svg" alt="react" width={32} height={32} />+
        <Image src="/next.svg" alt="next" width={32} height={32} />
      </div>
      <ul
        className="w-1/2
                        flex flex-row
                        justify-center items-center"
      >
        <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
          <Link href="/">홈으로</Link>
        </li>
        <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
          <Link href="/clock">시계</Link>
        </li>
        <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
          <Link href="/lotto">로또</Link>
        </li>
        <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
          <Link href="/food">푸드뱅크</Link>
        </li>
        <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
          <Link href="/todo">Todos</Link>
        </li>
        <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
          <Link href="/productlist2">제품목록</Link>
        </li>
        {/* {logState && (
          <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
            <Link href="/subway">Subway Air Condition</Link>
          </li>
        )}
        {logState && (
          <li className="w-full hover:border hover:cursor-pointer mx-5 text-center">
            <Link href="/todos">할일 목록</Link>
          </li>
        )} */}
      </ul>
      <div>
        {!logState ? (
          <button className="p-2 border border-white rounded-lg">
            <Link href="/">로그인</Link>
          </button>
        ) : (
          <button
            className="p-2 border border-white rounded-lg"
            onClick={handleLogOut}
          >
            로그아웃
          </button>
        )}
      </div>
    </>
  );
}
