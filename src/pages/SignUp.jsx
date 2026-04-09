import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    company: "",
    isAgency: "", // "yes" or "no"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to backend
    console.log("Account created:", formData);
    alert("Account created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen   flex  justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Create your PopX account
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Email */}
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
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
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
              placeholder="Create a password"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Company
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Enter your company name"
            />
          </div>

          {/* Are you an agency? Radio Buttons */}
          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Are you an agency?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  required
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  onChange={(e) =>
                    setFormData({ ...formData, isAgency: e.target.value })
                  }
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  required
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  onChange={(e) =>
                    setFormData({ ...formData, isAgency: e.target.value })
                  }
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-semibold py-2 rounded-lg 
                     mt-52"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
