import { initTabListener } from "@fremtind/jkl-core";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { WithChildren } from "@fremtind/jkl-core";
import "./App.css";
import { Hjem } from "./components/Hjem";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Kontakt } from "./components/Kontakt";
import { Om } from "./components/Om";
import { Områder } from "./components/Områder";
import { Objekt } from "./components/Objekt";

import "@fremtind/jkl-hamburger/hamburger.min.css";
import "@fremtind/jkl-tabs/tabs.min.css";
import { data } from "./data/data.js";

initTabListener();

const App: FC<WithChildren> = ({ children }) => {
  const objects = data.property;

  return (
    <div className="jkl">
      <div className="header-wrapper">
        <Header />
        <Menu />
      </div>

      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/om" element={<Om />} />
        <Route path="/objekter" element={<Områder objects={objects} />}>
          <Route path="/objekter/:id" element={<Objekt />} />
        </Route>

        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      {children}
    </div>
  );
};

export default App;
