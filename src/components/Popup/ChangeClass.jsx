const ChangeClass = () => {
  return (
    <div className="flex justify-center self-center ">
      <div className="box-border h-72 w-3/5 p-4 border-4 rounded-lg bg-[#FFFFFF]">
        <h2 style={{ position: "absolute", right: "300px" }}>
          <button>x</button>
        </h2>

        <h3>Choose Class</h3>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                  Name Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Room
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        class="rounded-full"
                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div className="font-medium text-gray-800">
                      Flutter Fullstack Application
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">1 July 2021 - 2 May 2022</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Choose
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        class="rounded-full"
                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div className="font-medium text-gray-800">
                      UI/UX Designer for Beginner
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">1 July 2021 - 2 May 2022</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Choose
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChangeClass;
