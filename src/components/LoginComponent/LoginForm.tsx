import Link from "next/link";
import { Router } from "next/router";
import { FormEvent, useState } from "react";
import { useRouter } from 'next/router'

export const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>();

  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (username == "codecamp" && password == "123") {
      // window.location.href = "/";
      router.push('/')
      // alert("successful")
    } else {
      alert("Unknown User Alert");
    }
  };

  return (
    <main className="bg-white">
      <div className="mt-[200px] flex items-center justify-center -translate-y-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="rounded-xl border-2 border-gray-600 bg-gray-200 w-[500px]">
            <h2 className="bg-gray-600 text-white text-[40px] p-5 pl-10 rounded-t-xl">
              Login
            </h2>
            <div className="p-5 mt-8 px-10 grid grid-cols-1">
              <label htmlFor="username">Username : </label>
              <input
                className="input"
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="p-5 px-10 grid grid-cols-1">
              <label htmlFor="password">Password : </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="p-10 px-10 w-[490px] grid grid-cols-3">
              <button className="form-button login" type="submit" name="login">
                Submit
              </button>
              <button
                className="form-button reset"
                type="button"
                onClick={() => {
                  setUsername("");
                  setPassword("");
                }}
              >
                Reset
              </button>
              <Link href="/">
                <button type="button" className="form-button cancel w-full">
                  Close
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
