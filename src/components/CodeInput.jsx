import React from "react";
import { useSearchParams } from "react-router-dom";

export default () => {
  const ref = React.useRef();
  let [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("code");
  const onChange = (e) => {
    if (e.target.value) searchParams.set("code", e.target.value);
    else searchParams.delete("code");
    setSearchParams(searchParams);
  };

  return (
    <input
      ref={ref}
      type="text"
      placeholder="Поиск по коду заказа"
      className="flex-1 py-1 px-2 outline-none focus:bg-neutral-50 border border-neutral-300"
      defaultValue={searchParams.get("code")}
      value={value}
      onChange={onChange}
    />
  );
};
