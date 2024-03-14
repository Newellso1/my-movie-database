export default function AddedError({ alreadyAdded, setAlreadyAdded }) {
  return (
    <div className="error-message">
      <h3>Movie Already Added</h3>
      <h4 onClick={() => setAlreadyAdded(!alreadyAdded)}>close</h4>
    </div>
  );
}
