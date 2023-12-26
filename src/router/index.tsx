import HomePage from "@pages/HomePage/HomePage";
import HomePageSkeleton from "@pages/HomePage/HomePageSkeleton";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PageTemplate } from "@components/templates/PageTemplate";

import { PATH } from "@constants/index";
import ErrorPage from "@pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<PageTemplate />}>
        <Route
          path={PATH.HOME}
          element={
            <Suspense fallback={<HomePageSkeleton />}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
      <Route path={PATH.ERROR} element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
