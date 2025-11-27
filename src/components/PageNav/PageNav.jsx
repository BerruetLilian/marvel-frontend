import { useState } from "react";
import "./pageNav.css";
import { Link } from "react-router-dom";

const PageNav = ({
  lastPage,
  currentPage,
  setSearchParams,
  urlSearchParams,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [pageInput, setPageInput] = useState("");

  const showPageIndex = () => {
    // si currentpage <= 7 et lastpage < 7
    // affiche de 1 à currentPage
    // sinon
    // si currentpage <= 5
    // afficher 1 à 5 + "..." + lastPage
    // sinon
    //  currentpage > lastpage -4
    // afficher 1 + ... + currentpage-1 + currentpage + currentpage+1 + ... + lastpage
    // currentpage <= lastpage-4
    // afficher ... + de lastpage-4 à lastpage
    const results = [];
    if (lastPage < 7) {
      for (let i = 1; i <= currentPage; i++) {
        results.push(i);
      }
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 5; i++) {
          results.push(i);
        }
        results.push("...");
        results.push(lastPage);
      } else {
        if (currentPage < lastPage - 4) {
          results.push(1);
          results.push("...");
          results.push(currentPage - 1);
          results.push(currentPage);
          results.push(Number(currentPage) + 1);
          results.push("...");
          results.push(lastPage);
        } else {
          results.push(1);
          results.push("...");
          for (let i = lastPage - 4; i <= lastPage; i++) {
            results.push(i);
          }
        }
      }
    }
    return results;
  };
  return (
    <div className="page-nav">
      <button
        onClick={() => {
          if (currentPage !== "1") {
            urlSearchParams.delete("page");
            urlSearchParams.append("page", currentPage - 1);
            setSearchParams(urlSearchParams);
          }
        }}
        disabled={currentPage === "1"}
      >
        {"<"}
      </button>
      {showPageIndex().map((element, index) => {
        if (Number(element)) {
          return (
            <a
              key={element + index}
              onClick={() => {
                urlSearchParams.delete("page");
                urlSearchParams.append("page", element);
                setSearchParams(urlSearchParams);
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
            urlSearchParams.delete("page");
            urlSearchParams.append("page", Number(currentPage) + 1);
            setSearchParams(urlSearchParams);
          }
        }}
        disabled={currentPage === lastPage}
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
                const pageQuery = Number(pageInput);
                if (
                  Number.isInteger(pageQuery) &&
                  pageQuery > 0 &&
                  pageQuery <= lastPage
                ) {
                  urlSearchParams.delete("page");
                  urlSearchParams.append("page", pageQuery);
                  setSearchParams(urlSearchParams);
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
