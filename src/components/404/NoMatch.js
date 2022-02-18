export default function NoMatch() {
  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="row d-flex flex-direction-row align-items-center">
        <div className="col-12 d-flex justify-content-center">
          <h4>Error 404 :(</h4>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <a href="/">
            <button className="btn btn-success">Back to home</button>
          </a>
        </div>
      </div>
    </div>
  );
}
