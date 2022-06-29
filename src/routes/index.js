import React, { Suspense, lazy } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Preloader from "components/Preloader";

const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>
  );
};

// const basename = `/${process.env.REACT_APP_PUBLIC_URL}` || "https://satarovbekzhan.github.io/";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="siroca/">
          <Route index element={<HomePage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/fake" element={<OrdersPage useFakeApi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const NotFoundPage = Loadable(lazy(() => import("pages/NotFound")));
const HomePage = Loadable(lazy(() => import("pages/Home")));
const OrdersPage = Loadable(lazy(() => import("pages/Orders")));
