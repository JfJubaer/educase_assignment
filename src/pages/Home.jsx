import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="text-center text-white px-4">
        {/* Welcome Text */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-bounce">
          Welcome to Pop X
        </h1>

        {/* Two lines paragraph */}
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto">
          Your ultimate destination for amazing experiences and connections.
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Join our growing community today and discover something extraordinary!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/create-account")}
            className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg 
                     hover:bg-gray-100 transform hover:scale-105 transition-all 
                     duration-200 shadow-lg text-lg"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="px-8 py-3 bg-transparent border-2 border-white text-white 
                     font-semibold rounded-lg hover:bg-white hover:text-purple-600 
                     transform hover:scale-105 transition-all duration-200 
                     shadow-lg text-lg"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
