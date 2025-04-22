import { Link } from "react-router-dom"

export default function Menu() {
    const btns = ["lotto","food","movie","tour","festa","FCST", "MyDiv"]
    
                                        .map(path =>
                                                    <Link key={path} to={`/${path}`} className="mx-3">
                                                        <li className=" w-full rounded-2xl
                                                                        border border-amber-500 bg-transparent hover:bg-amber-300
                                                                        py-2 px-3
                                                                        text-center font-bold text-amber-700 hover:text-amber-800">
                                                            {path}
                                                        </li>
                                                    </Link>
                                            )
  return (
    <ul className="w-[40%] flex flex-row justify-evenly">
        {btns}
    </ul>
  )
}
