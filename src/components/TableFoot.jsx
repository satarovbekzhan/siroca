import React from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";
import { range } from "utils/pagination";

const Knob = ({ title, disabled, target }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const onClick = () => {
    if (disabled) return;
    searchParams.set("page", target);
    setSearchParams(searchParams);
  };
  return (
    <button
      className={cn("px-1 rounded-sm", disabled && "opacity-30")}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ({ columns, page = 0, size = 0, count = 0 }) => {
  const pages = React.useMemo(() => {
    let list = [];
    let total = Math.round(count / size);
    list.push(total > 1 ? (total > 2 ? [1, 2, 3] : [1, 2]) : [1]);
    list.push(range(page - 1, page + 1));
    list.push(range(total - 2, total));
    list = [...new Set(list.flat())].filter((item) => item > 0);
    return total > 0 ? list : [];
  }, [page, size, count]);

  return (
    <tfoot>
      <tr className="bg-neutral-200 border border-neutral-300">
        <td colSpan={columns.length}>
          <div className="container p-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-1">
            <span className="">
              <p className="whitespace-nowrap">
                Страница {page} из {pages.length} ({count} записей)
              </p>
            </span>
            <span className="flex flex-row flex-wrap justify-between sm:justify-end gap-1 sm:gap-2">
              <Knob title="🡠" disabled={page <= 1} target={page - 1} />
              {React.Children.toArray(
                pages.map((number, index) => (
                  <>
                    {number - pages[index - 1] > 1 && (
                      <Knob title="∙∙∙" disabled />
                    )}
                    <Knob
                      title={number}
                      disabled={page === number}
                      target={number}
                    />
                  </>
                ))
              )}
              <Knob title="🡢" disabled={page >= size} target={page + 1} />
            </span>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};
