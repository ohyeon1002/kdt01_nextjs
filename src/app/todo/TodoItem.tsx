import axios from "axios";
import { datajson } from "./page";

interface ItemProps {
  obj: datajson;
  getData: () => Promise<void>;
  baseUrl: string;
}

export default function TodoItem({ obj, getData, baseUrl }: ItemProps) {
  const handleCheck = async () => {
    const isDone = obj.completed == "O" ? "X" : "O";
    await axios.patch(baseUrl + `/${obj.id}`, {
      completed: isDone,
    });
    getData();
  };
  const handleDelete = async (): Promise<void> => {
    await axios.delete(baseUrl + `/${obj.id}`);
    getData();
  };
  const isChecked: boolean = obj.completed == "O" ? true : false;

  return (
    <div className="w-1/2 h-1/8 flex flex-row my-3 group">
      <label className="w-4/5 flex flex-row items-center rounded-md mx-4 p-0.5 hover:bg-gray-200 hover:shadow-md active:bg-gray-300 active:shadow-lg ">
        <input
          type="checkbox"
          id={obj.id}
          onChange={handleCheck}
          className="w-1/4 h-3/5
                                                                            checked:accent-red-100"
          defaultChecked={isChecked}
        />
        <span className="w-3/4 inline-flex justify-start items-center text-md text-gray-600 group-has-checked:line-through group-has-checked:text-red-500 pointer-events-none">
          {obj.text}
        </span>
      </label>
      <div className="w-1/5 flex items-center">
        <button
          onClick={handleDelete}
          className="size-7 rounded-md p-0.5 bg-red-50 hover:bg-red-200 hover:shadow-lg text-red-400 hover:text-red-500"
        >
          X
        </button>
      </div>
    </div>
  );
}
