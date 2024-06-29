import { Suspense, useState } from "react";
import Players from "./components/Players";
import Points from "./components/Points";
import AddPlayer from "./components/AddPlayer";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="appContainer">
        <div>
          <h1>Round X</h1>
          <div>
            <h1>Data 1v1</h1>
          </div>
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
      <div className="navigationContainer flexc jcc">
        <Nav />
      </div>
    </div>
  );
}

export default App;
