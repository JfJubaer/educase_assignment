function Dashboard() {
  // Mock user data
  const userData = {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
  };

  return (
    <div className="min-h-screen   flex  justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Account Settings Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
        </div>

        {/* User Info Section */}
        <div className="p-6">
          <>
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                {/* Rounded Image */}
                <img
                  src="/public/favicon.svg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {userData.name}
                  </h2>
                  <p className="text-purple-600 text-sm mt-1">
                    {userData.email}
                  </p>
                </div>
              </div>
            </div>

            <div className=" my-4"></div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {userData.description}
            </p>

            <div className="border-t border-gray-200 my-4"></div>

            <div className="mt-2">
              <p className="text-gray-800 font-semibold">{userData.posts}</p>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
