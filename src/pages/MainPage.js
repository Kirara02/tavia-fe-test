import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <a className="navbar-brand mx-auto" href="/">
          MNTN
        </a>
      </nav>
      <div className="row m5">
        <div className="col-md-5">
          <div className="login-container">
            <div className="row">
              <h2 className="text-left">Sign In</h2>
              <p className="mb-3">
                Masuk, dan buat undangan pernikahan kamu, kemudian <br />
                share undangan kamu,
              </p>
              <form action="">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alamat Email"
                  />
                </div>
                <div className="mb-4 input-group">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="row align-items-center">
                  <div className="col-8 justify-content-center">
                    <Link to={"/"}>Lupa Password</Link>
                  </div>
                  <div className="col-4 d-flex justify-content-end ">
                    <Link to={"/home"} className="text-decoration-none">
                      <button className="custom-button" type="button">
                        Sign In
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="register-container">
            <div className="row">
              <h2 className="text-right">DAFTAR</h2>
              <p className="mb-3">
                Buat Undangan Pernikahan Digital Kamu dengan elegan, <br />{" "}
                <b>your alternative wedding invitation</b>
              </p>
              <form action="">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alamat Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nomor HP"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Panggilan Laki-Laki"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Panggilan Perempuan"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="row  ">
                  <div className="col-12">
                    <button type="button" className="w-100 custom-button">
                      <p className="text-start align-items-center">
                        BUAT UNDANGANMU SEKARANG{" "}
                        <FontAwesomeIcon
                          icon={faArrowCircleRight}
                          className="float-end"
                        />
                      </p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
