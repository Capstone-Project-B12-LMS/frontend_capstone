import { Link } from "react-router-dom";

const ChangeClass = ({
  title,
  code,
  url,
  thumbnail = "https://i.ibb.co/k6wjmXK/thumbnail-class.png",
}) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <img
                class="rounded-full"
                src={thumbnail}
                width="40"
                height="40"
                alt="Alex Shatov"
              />
            </div>
            <div className="font-medium text-gray-800">{title}</div>
          </div>
        </td>
        <td className="px-6 py-4">{code}</td>
        <td className="px-6 py-4">1 July 2021 - 2 May 2022</td>
        <td className="px-6 py-4 text-right">
          <Link
            to={url}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Choose
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ChangeClass;
