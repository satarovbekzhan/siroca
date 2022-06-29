import api from "../api";

const data = {
  count: 92,
  page: 1,
  size: 20,
  dataObjects: [
    {
      researchPriceId: 1898881,
      researchId: 6037,
      name: "Кровь. Общий анализ (ОАК)",
      biomaterialName: "",
      researchName: null,
      biomaterialId: null,
      priceEntityId: 6037,
      price: 2.0,
      currencyName: "Тенге",
      currencyId: 1,
      code: "6037-",
      id: 0,
    },
    {
      researchPriceId: 691,
      researchId: 6044,
      name: "Кровь. LE-клетки. Кровь с чего то там",
      biomaterialName: "",
      researchName: null,
      biomaterialId: null,
      priceEntityId: 6044,
      price: 35.0,
      currencyName: "Тенге",
      currencyId: 1,
      code: "6044-",
      id: 0,
    },
  ],
};

const service = api.injectEndpoints({
  endpoints: (builder) => ({
    getResearchesWithPrices: builder.query({
      query: (params) => ({
        url: "/orders/researches-with-prices",
        method: "GET",
        params,
      }),
    }),
    getFakeResearchesWithPrices: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, _fetchWithBQ) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { data, status: 200 };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetResearchesWithPricesQuery,
  useGetFakeResearchesWithPricesQuery,
} = service;
export default service;
