import React from "react";

export default ({ columns, data, isError }) => {
  return (
    <tbody>
      {React.Children.toArray(
        data?.dataObjects.map((item) => (
          <tr className="align-top hover:bg-neutral-50">
            {React.Children.toArray(
              columns.map(({ field }) => (
                <td className="p-1 border border-neutral-300">
                  {item[field] ?? "-"}
                </td>
              ))
            )}
          </tr>
        ))
      )}
      {!data && (
        <tr>
          <td
            colSpan={columns.length}
            className="p-2 text-center border border-neutral-300"
          >
            {isError ? "Не удалось загрузить данные!" : "Записей не найдено."}
          </td>
        </tr>
      )}
    </tbody>
  );
};
