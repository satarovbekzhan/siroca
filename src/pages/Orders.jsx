import React from "react";
import {
  useGetResearchesWithPricesQuery,
  useGetFakeResearchesWithPricesQuery,
} from "app/services/Orders";
import { useSearchParams } from "react-router-dom";
import CodeInput from "components/CodeInput";
import OverlayLoading from "components/OverlayLoading";
import TableHead from "components/TableHead";
import TableBody from "components/TableBody";
import TableFoot from "components/TableFoot";

const columns = [
  { title: "Код", field: "code" },
  { title: "Исследование", field: "name" },
  { title: "Биомат.", field: "biomaterialName" },
  { title: "Тип услуги", field: "researchName" },
];

export default ({ useFakeApi }) => {
  let [searchParams, _setSearchParams] = useSearchParams();

  const params = React.useMemo(() => {
    const page = searchParams.get("page");
    const size = searchParams.get("size");
    const code = searchParams.get("code");
    let sort = {};
    for (let col of columns) {
      let value = searchParams.get(`sort_${col.field}`);
      if (value) {
        let prefix = `sort[${Object.keys(sort).length / 2}].`;
        sort[prefix + "key"] = col.field;
        sort[prefix + "value"] = value;
      }
    }
    return {
      ...sort,
      page: page ?? "1",
      size: size ?? "20",
      ...(code && { code }),
    };
  }, [searchParams]);

  const { data, isFetching, isError } = useFakeApi
    ? useGetFakeResearchesWithPricesQuery(params)
    : useGetResearchesWithPricesQuery(params);

  return (
    <div className="container mx-auto py-4 flex flex-col gap-4 items-start">
      <CodeInput />
      <table className="relative table-auto w-full border-collapse text-left border border-neutral-300">
        <OverlayLoading loading={isFetching} />
        <TableHead columns={columns} />
        <TableBody columns={columns} data={data} isError={isError} />
        <TableFoot columns={columns} {...data} />
      </table>
      <p>Совет: Нажмите на заголовок столбца, чтобы применить сортировку.</p>
    </div>
  );
};
