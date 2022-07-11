const historyTable = ({ content }) => {
  return (
    <tr className="bg-white border-b  hover:bg-gray-50 ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <strong>{content}</strong>
      </th>
      <td className="px-6 py-4">one Minutes ago</td>
      <td className="px-6 py-4">
        <a
          href="/"
          className="font-medium text-blue-600  hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default historyTable;
