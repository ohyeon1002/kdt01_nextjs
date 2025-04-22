"use client";

import Image from "next/image";
import { useState } from "react";

interface FoodCardProps {
  obj: {
    구분: string;
    시군구: string;
    사업장명: string;
    신고기준: string;
    "사업장 소재지": string;
    "연락처(대표번호)": string;
    팩스번호: string;
    "운영주체 분류": string;
    운영주체명: string;
  };
}

export default function FoodCard({ obj }: FoodCardProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const imgGubun = {
    광역지원센터: "/busan.png",
    기초푸드뱅크: "/bank.png",
    기초푸드마켓: "/market.png",
  };
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div
      className="flex flex-row justify-evenly justify-self-center
                    w-9/10 h-full
                    p-4 border rounded-xl shadow-md border-gray-300
                    hover:shadow-2xl hover:border-gray-100"
    >
      <Image
        src={imgGubun[obj["구분"] as keyof typeof imgGubun]}
        alt="image"
        width={130}
        height={117}
      />
      <div className="w-3/4 h-full flex flex-col pl-4">
        <h1 className="h-1/5 text-2xl font-bold text-justify">
          {obj["사업장명"]}
        </h1>
        <h2 className="h-1/5 text-xl font-semibold">{obj["운영주체명"]}</h2>
        <p className="h-2/5">{obj["사업장 소재지"]}</p>
        <p
          className="h-1/5 bg-gray-300 text-gray-800 text-base cursor-pointer selection:bg-transparent text-center"
          onClick={handleShow}
        >
          {isShow && `${obj["연락처(대표번호)"]}, ${obj["팩스번호"]}`}
        </p>
      </div>
    </div>
  );
}
