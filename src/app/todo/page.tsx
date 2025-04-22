"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const baseUrl: string = "http://localhost:3005/todos";
export interface datajson {
  id: string;
  text: string;
  completed: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<datajson[] | null>([]);
  const [tags, setTags] = useState<React.ReactNode[]>();
  const opsRef = useRef<HTMLSelectElement>(null);

  const getData = async (): Promise<void> => {
    const data = await axios.get(baseUrl);
    setTodos(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!todos) return;
    const hey = todos.map((obj) => (
      <TodoItem key={obj.id} obj={obj} getData={getData} baseUrl={baseUrl} />
    ));
    setTags(hey);
  }, [todos]);

  return (
    <div
      className="w-3/4 h-3/4
                        flex flex-col justify-center items-center
                        border rounded-xl border-gray-300 shadow-xs"
    >
      <div className="w-full flex justify-center mx-10 mt-10">
        <TodoForm opsRef={opsRef} getData={getData} baseUrl={baseUrl} />
      </div>
      <div className="w-full h-full flex flex-col justify-start items-center m-10 px-5 overflow-y-auto">
        {tags}
      </div>
    </div>
  );
}
