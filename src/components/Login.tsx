'use client'
import { useRef, MouseEvent } from "react";
interface LoginProps {
  func: (logState: boolean) => void;
}
export default function Login({ func }: LoginProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const account = ["test@test.com", "1234"];
    if (
      emailRef.current?.value == account[0] &&
      passRef.current?.value == account[1]
    ) {
      //check if the email address and password are correct
      //save in the local storage that the user is logged in
      func(true);
      localStorage.setItem("loggedAccount", account[0]);
    } else if (emailRef.current?.value != account[0]) {
      //if not, focus the wrong part
      alert("Invalid / Incorrect Email address");
      emailRef.current?.focus();
      return;
    } else if (passRef.current?.value != account[1]) {
      alert("Please check the password again");
      passRef.current?.focus();
      return;
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
          onClick={handleInput}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
