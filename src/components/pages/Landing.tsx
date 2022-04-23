import React from "react";
import Pizza from "../charts/Charts";
import { TAB_TYPES } from "../navigation/TabManager";
import "./Landing.scss";

interface Props {
  setActiveTab: (activeTab: TAB_TYPES) => void;
}

const Landing: React.FC<Props> = (props) => {
  const { setActiveTab } = props;

  return (
    <>
      <header className="landing">
        <div className="container px-4 px-lg-5 welcome text-end">
          <h1 className="fw-bold">Hello Human</h1>
          <p className="text-white-75 mb-5">Welcome to the Cat Mafia.</p>
          <button
            className="btn btn-primary btn-xl"
            onClick={() => setActiveTab("about")}
          >
            Find Out More
          </button>
        </div>
      </header>
      <section className="intro">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0 fw-bold">Services</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="fas fa-cat"></i>
                </div>
                <h3 className="h4 mb-2">Cats</h3>
                <p className="text-muted mb-0">
                  Because we are the coolest cats according to us.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="fas fa-crow"></i>
                </div>
                <h3 className="h4 mb-2">Birds</h3>
                <p className="text-muted mb-0">
                  Premium bird watching at any location.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="fas fa-dog"></i>
                </div>
                <h3 className="h4 mb-2">Dogs</h3>
                <p className="text-muted mb-0">
                  We offer a complementary dog stopping service!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="fas fa-hippo"></i>
                </div>
                <h3 className="h4 mb-2">Hippopotamus</h3>
                <p className="text-muted mb-0">
                  Because Hippos do not get enough attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pizza />
    </>
  );
};

export default Landing;
