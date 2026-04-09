import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen   flex  justify-center p-4">
      <div className="max-w-md  w-full bg-white rounded-2xl flex justify-cente items-end shadow-2xl px-4">
        {/* Welcome Text */}
        <div className="w-full">
          {" "}
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mt-96 mb-3">
            Welcome to PopX
          </h1>
          {/* Description paragraph */}
          <p className="text-gray-600 text-xl-4 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Create Account Button */}
          <button
            onClick={() => navigate("/create-account")}
            className="w-full bg-purple-700  text-white font-semibold py-3 px-6 rounded-lg 
                   shadow-md mb-4"
          >
            Create Account
          </button>
          {/* Login Link */}
          <button
            onClick={() => navigate("/signin")}
            className="w-full bg-purple-300  font-semibold py-3 px-6 rounded-lg 
                     shadow-md mb-4"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
