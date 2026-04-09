import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 
                     transition-all duration-200 font-semibold"
          >
            Logout
          </button>
        </div>

        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to Pop X! 🎉
          </h2>
          <p className="text-gray-600">
            You have successfully signed in to your account.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">View your statistics and insights</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Settings</h3>
            <p className="text-gray-600">Manage your account preferences</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-semibold mb-2">Messages</h3>
            <p className="text-gray-600">Check your notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
