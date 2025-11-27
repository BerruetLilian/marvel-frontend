import "./carrousel.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import PageNav from "../PageNav/PageNav";

const Carrousel = ({
  data,
  count,
  currentPage,
  setSearchParams,
  urlSearchParams,
}) => {
  return (
    <>
      <div className="carrousel">
        {data.map((element) => {
          return <CharacterCard key={element._id} character={element} />;
        })}
      </div>
      <PageNav
        lastPage={Math.ceil(count / 100)}
        currentPage={currentPage}
        setSearchParams={setSearchParams}
        urlSearchParams={urlSearchParams}
      />
    </>
  );
};
export default Carrousel;
