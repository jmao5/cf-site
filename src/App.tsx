// src/App.tsx

import { Suspense } from "react";
import "./App.css";
import AppRouter from "./router";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
