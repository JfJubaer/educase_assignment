import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically authenticate with backend
    console.log("Sign in:", formData);
    alert("Signed in successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-linear-to-br  flex  justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold  text-gray-800 mb-2">
          Sign in to your PopX account
        </h2>
        <p className=" mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white 
                     font-semibold py-2 rounded-lg 
                     "
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
