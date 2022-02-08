export default function Spinner({ loading }) {
  return (
    <div
      class="spinner-border text-success d-flex justify-content-center text-alignt-center"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}
