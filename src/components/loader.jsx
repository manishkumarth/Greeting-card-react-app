function Loader() {
  return (
    <div
      className="modal fade text-center"
      id="Loader"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="false"
      style={{ background: 'rgb(227 229 232 / 74%)'}}
    >
      <div className="modal-dialog">
        {/* <div className="modal-content">
          <div className="modal-body full-w"> */}
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
}
export default Loader;





