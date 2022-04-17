import React, { useState, useEffect } from "react";
import "./MarketList.css";

// === Components ===
import MarketItem from "../MarketItem/MarketItem";

// === Data ===
import { marketData } from "../../data";

// === Icons ===
import { AiOutlineSearch, AiFillStar } from "react-icons/ai";
import { TiArrowUnsorted } from "react-icons/ti";
import { CgArrowsExchangeAlt } from "react-icons/cg";

const MarketList = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [liActive, setLiActive] = useState(0);
  const [change, setChange] = useState(false);
  const [starList, setStarList] = useState(false);
  // === Search Filter ===
  useEffect(() => {
    if (search !== "") {
      const filtered = marketData[liActive].subData.filter((item) => {
        return Object.values(item)
          .join()
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResult(filtered);
    } else {
      setSearchResult(marketData[liActive].subData);
    }
  }, [liActive, search, marketData[liActive].subData]);

  return (
    <>
      <form>
        <div className="market-search-container">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      <div className="market-list">
        <div className="market-brand">
          <ul>
            <li>
              <AiFillStar
                onClick={() => setStarList(!starList)}
                className={starList && "active"}
              />
            </li>
            {marketData.map((i) => {
              return (
                <li
                  key={i.id}
                  onClick={() => setLiActive(i.id) & setStarList(false)}
                  className={(liActive === i.id) & !starList && "active"}
                >
                  {i.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="market-list-header">
          <div className="market-list-header-container">
            <div className="market-list-header-item">
              <h4>Pair</h4>
              <TiArrowUnsorted />
            </div>
            <div className="market-list-header-item">
              <h4>Last Price</h4>
              <TiArrowUnsorted />
            </div>
            <div className="market-list-header-item">
              {change ? (
                <div>
                  <h4>24h Volume</h4>
                  <TiArrowUnsorted />
                </div>
              ) : (
                <div>
                  <h4>Change</h4>
                  <TiArrowUnsorted />
                </div>
              )}
              <CgArrowsExchangeAlt onClick={() => setChange(!change)} />
            </div>
          </div>
          <div className="market-list-item">
            <MarketItem
              starList={starList}
              change={change}
              data={searchResult}
              title={marketData[liActive].title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketList;
