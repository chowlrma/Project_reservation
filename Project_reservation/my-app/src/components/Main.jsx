import SearchBar from "../SearchBar";
import "../App.css";
import PeopleNum1 from "../PeopleNum1";
import { Link } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export default function Main() {
  const [openDate, setOpenDate] = useState(false);
  const searchItems = [];
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="navbar">
        <div>
          <a href="/">
            <img className="logo" src="/images/Logo.jpg" alt="mainlogo" />
          </a>
        </div>
      </div>

      <div className="">
        <div>
          <div className="searchbar">
            <SearchBar searchItems={searchItems} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
            <div className="headerSearchItem">
              <span onClick={()=> setOpenOptions(!openOptions)} className="hearderSearchText">{`${options.adult} adult | ${options.children} children | ${options.room} room`}</span>
              {openOptions && (<div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>)}
            </div>
            <div className="hearderSearchItem">
              <button className="headerBtn">Search</button>
            </div>
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
