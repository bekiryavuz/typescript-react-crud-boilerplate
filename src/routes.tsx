import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";

import TablePage1 from "./table/table1";
import TablePage2 from "./table/table2";
import TablePage3 from "./table/table3";
import TablePage4 from "./table/table4";
import MainPage from "./mainPage";

const Foutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/table1" element={<TablePage1 />} />
          <Route path="/table2" element={<TablePage2 />} />
          <Route path="/table3" element={<TablePage3 />} />
          <Route path="/table4" element={<TablePage4 />} />
        </Routes>
      </BrowserRouter>
    );
};

export default Foutes;
