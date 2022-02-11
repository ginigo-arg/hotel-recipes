export default function Spinner({ loading }) {
  return (
    <div
      className="spinner-border text-success d-flex justify-content-center text-alignt-center"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
