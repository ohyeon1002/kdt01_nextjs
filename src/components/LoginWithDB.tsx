"use client";
import { useRef, MouseEvent } from "react";
import axios from "axios";

const logUrl: string = "http://localhost:3000/api/login";
const signUrl: string = "http://localhost:3000/api/signup";

interface LoginProps {
  func: (logState: boolean) => void;
}

interface LoginInfoJson {
  id: string;
  password: string;
}

export default function LoginWithDB({ func }: LoginProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleLogInput = (e: MouseEvent<HTMLButtonElement>): void => {
    console.log(passRef.current?.value);
    tryLogIn(emailRef.current?.value, passRef.current?.value);
  };

  const tryLogIn = async (
    id: string | undefined,
    pass: string | undefined
  ): Promise<void> => {
    try {
      const response = await axios.get(`${logUrl}?id=${id}`);
      const user: LoginInfoJson = response.data;
      console.log(user);

      if (!user) {
        alert("There's no such user");
        return;
      }
      if (user.password != pass) {
        alert("Invalid password");
        return;
      }

      func(true);
      localStorage.setItem("loggedAccount", user.id);
    } catch (e: any) {
      if (e.response?.status == 404) {
        alert("No such user exists");
      } else {
        alert("An error occured upon loggin in");
      }
      return;
    }
  };

  const handleSignInput = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    trySignUp(emailRef.current?.value, passRef.current?.value);
  };

  const trySignUp = async (
    id: string | undefined,
    pass: string | undefined
  ): Promise<void> => {
    try {
      const data = {
        id: id,
        password: pass,
      };

      const newAccount = await axios.post<{
        password: string|undefined;
        id: string|undefined;
        error: number|undefined
      }, {status:number}>(signUrl, data);

      console.log(newAccount);

      if (newAccount.status === 201) {
        alert("Now you are a registered user:\nSign in with the new account");
      }
    } catch (e:any) {
      if(axios.isAxiosError(e) && e.response){
        alert(e.response.data.error)
      } else {
        alert("Sever error")
      }
    }
  };

  return (
    <div
      className="w-1/3 h-100
                    flex flex-col justify-center items-center
                    border rounded-lg border-gray-200 shadow-md"
    >
      <span className="text-2xl font-bold">Sign in to your account</span>
      <form className="w-4/5 flex flex-col mt-10">
        <input
          type="text"
          ref={emailRef}
          className="h-8 mt-1 mb-4 pl-2
                                                        rounded border focus:bg-gray-100
                                                        placeholder:text-gray-300 placeholder:italic"
          placeholder="Email"
        />
        <input
          type="password"
          ref={passRef}
          className="h-8 mt-1 mb-2 pl-2
                                                        rounded border focus:bg-gray-100
                                                        placeholder:text-gray-300 placeholder:italic"
          placeholder="Password"
        />
        <button
          className="p-3 my-3
                               rounded-lg
                                bg-blue-700 hover:bg-blue-800
                                text-white text-xl font-bold"
          onClick={handleLogInput}
        >
          Sign In
        </button>
        <button
          className="p-3 my-3
                               rounded-lg
                                bg-blue-500 hover:bg-blue-600
                                text-white text-xl font-bold"
          onClick={handleSignInput}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
