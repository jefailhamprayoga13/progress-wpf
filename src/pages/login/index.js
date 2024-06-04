import { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    router.push("/");
  };

  return (
    <div className="m-0 p-0 bg-primary min-h-screen h-full w-full">
      <div className="flex justify-center items-center">
        <div className="card px-6 py-4 border mt-32 mb-32 w-1/2 bg-white">
          <div className="flex flex-row justify-center items-center">
            <div className="image-content w-1/2 pr-12">
              <img src="/assets/images/login1.svg" alt="Tracer" />
            </div>
            <div className="flex flex-col form-content w-1/2">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="form-control w-full mb-2">
                    <div className="label mb-2">
                      <span className="label-text text-md font-medium">Username</span>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <EnvelopeIcon className="w-5 h-5 opacity-70 text-primary" />
                      </span>
                      <input
                        type="text"
                        className="input input-bordered pl-10 w-full max-w-full"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="form-control w-full mb-2">
                    <div className="label mb-2">
                      <span className="label-text text-md font-medium">Password</span>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <LockClosedIcon className="w-5 h-5 opacity-70 text-primary" />
                      </span>
                      <input
                        type="password"
                        className="input input-bordered pl-10 w-full max-w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">LOGIN</button>
                </div>
              </form>
              <div className="mt-3">
                <h3 className="text-md font-medium">
                  Belum punya akun?{" "}
                  <a  className="text-secondary link no-underline">
                    Daftar disini!
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
