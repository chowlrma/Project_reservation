import SearchBar from "../SearchBar";
import "../App.css";
import PeopleNum1 from "../PeopleNum1";
import Datepicker from "../datepicker";
import { Link } from "react-router-dom";


export default function Main() {
  
  const searchItems = [];

  return (
    <>
      <div className="App">
        <div>
          <a href="/">
          <img className="logo" src="/images/Logo.jpg" alt="mainlogo" />
          </a>
        </div>
        <div>
          <div className="searchbar">
            <SearchBar searchItems={searchItems} />
            <Datepicker/>
            <PeopleNum1/>

          </div>
          <div>
            
          </div>
        </div>
      </div>

      <div className="hotelbar">
        <nav style={{ paddingBottom: "1rem" }}>
          <div style={{ fontSize: "30px" }}>
            <Link to="/invoices">Hotel</Link> |{" "}
            <Link to="/expenses">Motel</Link> |{" "}
            <Link to="/Camping">Camping</Link> |{" "}
            <Link to="/Pension">Pension</Link>
          </div>
        </nav>
      </div>
    </>
  );
}