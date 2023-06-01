import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPowerOff,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <a className="navbar-brand mx-auto" href="/">
          MNTN
        </a>
      </nav>
      <div className="row justify-content-center mt-5">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQAAAA&pid=Api&P=0&h=180"
          alt="profile"
          className="rounded-circle"
          style={{ height: "160px", width: "180px" }}
        />
      </div>
      <div className="row justify-content-center mt-5">
        <div className="container w-50 bg-light p-3 rounded-2">
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  value="agungtri@gmail.com"
                />
                <div>
                  <p className="float-end mt-1" style={{ fontSize: "12px" }}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green" }}
                    />{" "}
                    Verified
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="nohp" className="form-label">
                  Nomor Handphone
                </label>
                <input
                  id="nohp"
                  type="text"
                  className="form-control"
                  value="082616729175"
                />
                <div>
                  <p className="float-end mt-1" style={{ fontSize: "12px" }}>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      style={{ color: "red" }}
                    />{" "}
                    Not Verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mt-5 ">
        <Link to={"/"} className="text-decoration-none center">
          <p className="mt-1" style={{ fontSize: "16px" }}>
            <FontAwesomeIcon icon={faPowerOff} style={{ color: "green" }} /> LOG
            OUT
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
