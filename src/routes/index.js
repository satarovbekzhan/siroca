import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Preloader from "components/Preloader";

const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/fake" element={<OrdersPage useFakeApi />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const NotFoundPage = Loadable(lazy(() => import("pages/NotFound")));
const HomePage = Loadable(lazy(() => import("pages/Home")));
const OrdersPage = Loadable(lazy(() => import("pages/Orders")));
