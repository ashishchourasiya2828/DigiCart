import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Axios from "../utils/axios";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "/auth/register",
        { username, email, password, role: "user" }
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    toast.success('Registered successfully');
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f3f3] px-4 md:px-8 py-5">
      <div className="relative">
        {/* Left Section: Sign Up Form */}
        <div className="bg-white p-8 flex flex-col justify-center md:absolute md:w-[25vw] md:h-[70vh] md:top-9 md:-left-40 md:rounded-xl rounded-t-xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#046664] text-center">
            Sign Up
          </h2>

          <p className="text-gray-500 text-lg text-center mt-2">
            Create your account:
          </p>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="font-semibold text-lg text-[#046664] px-1"
                >
                  Username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  name="username"
                  type="text"
                  placeholder="Enter Your Username"
                  className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#046664]"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="font-semibold text-lg text-[#046664] px-1"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#046664]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="font-semibold text-lg text-[#046664] px-1"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#046664]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#046664] hover:opacity-90 font-semibold text-white py-3 rounded-lg mt-3"
              disabled={loading}
            >
              {loading ? "Processing..." : "SIGN UP"}
            </button>
          </form>
        </div>

        {/* Right Section: Welcome Back Message */}
        <div className="bg-[url('./bg.jpeg')] flex flex-col items-center justify-center bg-cover bg-top text-white p-8 w-full md:w-[30vw] md:h-[80vh] md:ml-[40%] md:rounded-xl rounded-b-xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Welcome Back!</h2>
            <p className="md:mt-4 mt-2 mb-8 text-lg font-semibold md:px-6">
              To keep connected with us, please log in to your account
            </p>

            <Link
              to={"/login"}
              className="bg-[#046664]/50 hover:bg-[#046664] text-white font-semibold px-14 py-3 rounded-full shadow-md transition-all duration-300"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
