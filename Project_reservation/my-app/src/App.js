
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Expenses from "./components/Expenses";
import Invoices from "./components/Invoices";
import Main from "./components/Main";
import Camping from "./components/Camping";
import Pension from "./components/Pension";
import List from "./components/list/list";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/Camping" element={<Camping />} />
            <Route path="/Pension" element={<Pension />} />
            <Route path="/hotels" element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
