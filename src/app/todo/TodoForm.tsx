import axios from "axios";
import { useRef } from "react";

interface formProps {
  opsRef: React.RefObject<HTMLSelectElement | null>;
  getData: () => Promise<void>;
  baseUrl: string;
}

export default function TodoForm({ opsRef, getData, baseUrl }: formProps) {
  const textRef = useRef<HTMLInputElement>(null);
  const handleAdd = async (): Promise<void> => {
    await axios.post(baseUrl, {
      text: textRef.current?.value,
      completed: opsRef.current?.value,
    });
    getData();
  };

  return (
    <form className="w-1/2 flex flex-row">
      <select
        ref={opsRef}
        className="w-1/6 border border-gray-200 shadow-xs rounded-md mx-2 p-1 text-center"
        defaultValue={"X"}
      >
        <option value={"O"}>O</option>
        <option value={"X"}>X</option>
      </select>
      <input
        type="text"
        ref={textRef}
        className="w-1/2 border border-gray-200 shadow-xs hover:shadow-md rounded-md mx-2 p-1"
      />
      <button
        className="w-1/6 rounded-md shadow-sm hover:shadow-xl bg-blue-500 hover:bg-blue-600 text-gray-100 mx-2 p-1"
        onClick={handleAdd}
      >
        확인
      </button>
      <button className="w-1/6 rounded-md shadow-sm hover:shadow-xl bg-red-500 hover:bg-red-600 text-gray-100 mx-2 p-1">
        취소
      </button>
    </form>
  );
}
