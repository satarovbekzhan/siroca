import React from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";

const Column = ({ title, field }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get(`sort_${field}`);
  const toggleSort = () => {
    let value = sort === "asc" ? "desc" : sort === "desc" ? "" : "asc";
    if (value) searchParams.set(`sort_${field}`, value);
    else searchParams.delete(`sort_${field}`);
    setSearchParams(searchParams);
  };

  return (
    <th className="p-1 bg-neutral-200 border border-neutral-300">
      <span
        onClick={toggleSort}
        className="flex flex-row justify-between cursor-pointer"
      >
        {title}
        <span className={cn("text-neutral-800", !sort && "opacity-0")}>
          {sort === "desc" ? "▾" : "▴"}
        </span>
      </span>
    </th>
  );
};

export default ({ columns }) => {
  return (
    <thead>
      <tr>
        {React.Children.toArray(
          columns.map((column) => <Column {...column} />)
        )}
      </tr>
    </thead>
  );
};
