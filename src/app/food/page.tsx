"use client";

import FoodCard from "./FoodCard";
import Fooddata from "./fooddata.json";
import TypeChecker from "./TypeChecker";
import { useState } from "react";

export default function FoodMain() {
  const [show, setShow] = useState<string>("All"); //useState 설정
  const re = new RegExp("\\d{1}\\.\\s*"); //정규표현식
  const a: Set<string> = new Set([
    "All",
    ...Fooddata.flatMap((item) => item["운영주체 분류"].replace(re, "")),
  ]); //운영주체명 문자만 뽑아서 셋에 넣기+ALL추가

  const ck: React.ReactNode[] = Array.from(a).map((item) => (
    <TypeChecker key={item} value={item} chk={(c: string) => setShow(c)} />
  )); //셋을 바탕으로 만든 배열을 매핑해 라디오버튼 컴포넌트 생성

  const tags: React.ReactNode =
    show == "All" //삼항연산자로 상태가 ALL일때와 아닐때 표시할 컴포넌트 구분
      ? Fooddata.map((item) => <FoodCard key={item["사업장명"]} obj={item} />)
      : Fooddata.filter((item) => item["운영주체 분류"].endsWith(show)).map(
          (item) => <FoodCard key={item["사업장명"]} obj={item} />
        );

  return (
    <>
      <div className="inline-flex border-1 border-dashed m-3 justify-self-start">
        {ck}
      </div>
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4
                      has-hover:*:blur-xs has-hover:*:opacity-70
                      has-hover:*:hover:blur-none has-hover:*:hover:opacity-100"
      >
        {tags}
      </div>
    </>
  );
}
