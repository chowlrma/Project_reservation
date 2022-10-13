import SearchBar from "../SearchBar";
import "../App.css";
import PeopleNum from "../PeopleNum";
import { Link } from "react-router-dom";

export default function Main() {
  let subject = "LOGO";
  const searchItems = [];

  return (
    <>
      <div className="App">
        <div>{subject}</div>
        <div className="searchbar">
          <div>
            <SearchBar searchItems={searchItems} />
          </div>
          <div>
            <PeopleNum />
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
