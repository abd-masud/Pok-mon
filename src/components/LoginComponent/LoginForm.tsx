import Link from "next/link";
import { FormEvent, InvalidEvent, useState } from "react";
import { useRouter } from "next/router";
import useLogin from "@/reactQueryHooks/useLogin";

export const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [logError, setError] = useState<boolean>(false);

  const { updateLogin, exUsername } = useLogin();

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (username == "codecamp" && password == "123") {
      router.push("/");
      exUsername();
      updateLogin("Logout");
    } else {
      setError(true);
    }
  };

  return (
    <main className="bg-gray-300">
      <div className="pt-[200px] pb-[135px] flex items-center justify-center -translate-y-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="shadow-2xl shadow-black border-2 border-gray-400 bg-gray-100 sm:w-[615px] w-[430px]">
            <h2 className="text-[40px] p-5 pl-10">Login</h2>

            <div className="p-5 mt-8 px-10 grid">
              <label htmlFor="username">Username : </label>
              <input
                className="input"
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                autoComplete="off"
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="p-5 px-10 grid">
              <label htmlFor="password">Password : </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="off"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center">
              <p className="">
                {logError ? (
                  <span className="text-rose-600 font-bold">
                    Invalid Username or Password
                  </span>
                ) : (
                  <span className="text-transparent relative -z-10">error</span>
                )}
              </p>
            </div>
            <div className="p-10 px-10 grid grid-cols-3">
              <div className="flex justify-start">
                <button
                  className="form-button submit w-28"
                  type="submit"
                  name="login"
                >
                  Submit
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className="form-button clear w-28"
                  type="button"
                  onClick={() => {
                    setUsername("");
                    setPassword("");
                    setError(false);
                  }}
                >
                  Clear
                </button>
              </div>
              <div className="flex justify-end">
                <Link href="/">
                  <button
                    className="form-button cancel w-28 justify-end"
                    type="button"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
