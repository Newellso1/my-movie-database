export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="search">
      <h1>MyMBD</h1>
      <input
        id="MovieSearch"
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
    </div>
  );
}
