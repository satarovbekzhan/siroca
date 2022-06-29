import React from "react";
import cn from "classnames";

export default ({ loading = false }) => {
  return (
    <div
      className={cn(
        "absolute w-full h-full box-border bg-white/80 top-0 left-0 z-20 grid place-items-center",
        !loading && "hidden"
      )}
    >
      <span>Загрузка</span>
    </div>
  );
};
