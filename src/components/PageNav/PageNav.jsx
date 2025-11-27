import { useState } from "react";
import "./pageNav.css";

const PageNav = ({ setSearchParams, urlSearchParams, lastPage }) => {
  const [showInput, setShowInput] = useState(false);
  const [pageInput, setPageInput] = useState("");
  const currentPage = (urlSearchParams && urlSearchParams.get("page")) || 1;

  const pageIndexes = () => {
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

  const handlePrev = () => {
    if (currentPage !== "1") {
      urlSearchParams.set("page", currentPage - 1);
      setSearchParams(urlSearchParams);
    }
  };

  const handleNext = () => {
    if (currentPage !== lastPage) {
      urlSearchParams.set("page", Number(currentPage) + 1);
      setSearchParams(urlSearchParams);
    }
  };

  const handleNumberNav = (element) => {
    urlSearchParams.set("page", element);
    setSearchParams(urlSearchParams);
  };

  const handleGoTo = () => {
    const pageQuery = Number(pageInput);
    if (Number.isInteger(pageQuery) && pageQuery > 0 && pageQuery <= lastPage) {
      urlSearchParams.set("page", pageQuery);
      setSearchParams(urlSearchParams);
    }
  };
  return (
    <>
      {lastPage !== "1" && (
        <div className="page-nav">
          <button onClick={handlePrev} disabled={currentPage === "1"}>
            {"<"}
          </button>
          {pageIndexes().map((element, index) => {
            if (Number(element)) {
              return (
                <a
                  key={element + index}
                  onClick={() => {
                    handleNumberNav(element);
                  }}
                >
                  {element}
                </a>
              );
            } else {
              return <p key={element + index}>{element}</p>;
            }
          })}
          <button onClick={handleNext} disabled={currentPage === lastPage}>
            {">"}
          </button>
          <p>
            Go to
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
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleGoTo();
                    }
                  }}
                />
                <button onClick={handleGoTo}>page</button>
              </>
            }
          </p>
        </div>
      )}
    </>
  );
};

export default PageNav;
