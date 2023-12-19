import HomePage from "@pages/HomePage/HomePage";
import HomePageSkeleton from "@pages/HomePage/HomePageSkeleton";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PageTemplate } from "@components/templates/PageTemplate";

import { PATH } from "@constants/index";

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
    </Routes>
  );
};

export default AppRouter;
