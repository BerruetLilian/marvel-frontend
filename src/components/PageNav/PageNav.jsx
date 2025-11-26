import { useState } from "react";
import "./pageNav.css";
import { Link } from "react-router-dom";

const PageNav = ({ lastPage, currentPage, setSearchParams }) => {
  const [showInput, setShowInput] = useState(false);
  const [pageInput, setPageInput] = useState("");

  const showPageIndex = () => {
    if (currentPage < 5 || !currentPage) {
      return [1, 2, 3, 4, 5, "...", lastPage];
    } else if (currentPage < lastPage - 4) {
      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        Number(currentPage) + 1,
        "...",
        lastPage,
      ];
    } else {
      return [
        1,
        "...",
        lastPage - 4,
        lastPage - 3,
        lastPage - 2,
        lastPage - 1,
        lastPage,
      ];
    }
  };
  return (
    <div className="page-nav">
      <button
        onClick={() => {
          if (currentPage !== "1") {
            setSearchParams("?page=" + (Number(currentPage) - 1));
          }
        }}
      >
        {"<"}
      </button>
      {showPageIndex().map((element, index) => {
        if (Number(element)) {
          return (
            <a
              key={element + index}
              onClick={() => {
                setSearchParams("?page=" + element);
              }}
            >
              {element}
            </a>
          );
        } else {
          return <p key={element + index}>{element}</p>;
        }
      })}
      <button
        onClick={() => {
          if (currentPage !== lastPage) {
            setSearchParams("?page=" + (Number(currentPage) + 1));
          }
        }}
      >
        {">"}
      </button>
      <p>
        Go to{" "}
        {
          <>
            <input
              className={showInput ? "show-input" : ""}
              type="text"
              onFocus={() => {
                setShowInput(true);
              }}
              onBlur={() => {
                setShowInput(false);
              }}
              value={pageInput}
              onChange={(event) => {
                setPageInput(event.target.value);
              }}
            />
            <button
              onClick={() => {
                if (Number.isInteger(Number(pageInput))) {
                  setSearchParams("?page=" + pageInput);
                }
              }}
            >
              page
            </button>
          </>
        }
      </p>
    </div>
  );
};

export default PageNav;
