const historyTable = ({ content }) => {
  return (
    <tr className="bg-white border-b  hover:bg-gray-50 ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <strong>{content}</strong>
      </th>
    </tr>
  );
};

export default historyTable;
