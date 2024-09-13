import { useSearch } from "../../contexts/search.context";

function Search() {
  const { search, handleSearch } = useSearch();
  return (
    <form className="d-flex md-flex-column" role="search">
      <input
        className="form-control me-2 fw-bold"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
        value={search}
      />

    </form>
  );
}
export default Search;
