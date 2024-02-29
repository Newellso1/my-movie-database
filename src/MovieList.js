export default function MovieList({ list, handleClick, style }) {
  return (
    <div className="movie-list">
      {list.map((movie) => (
        <Movie></Movie>
      ))}
    </div>
  );
}
