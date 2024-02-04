import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Cards";
import "./Information.css";
export const Information = () => {
  return (
    <div
      className={"information-header"}
      style={{
        background: 'url("assets/Saver.jpg") no-repeat top right fixed',
      }}
    >
      <div className="title">
        <div className="information-heading">
          <img
            src={"assets/IODumpBlack.png"}
            alt="IO Dump Logo"
            style={{ maxWidth: "18rem" }}
            className="rounded img-fluid img-thumbnail logo logo-iodump"
          />
          <div className="cyber-heading">Cyber Tronic</div>

          <img
            src={"assets/ZealLogo.png"}
            alt="Zeal Logo"
            style={{ maxWidth: "18rem" }}
            className="rounded img-fluid img-thumbnail logo logo-zeal"
          />
        </div>
        <hr />
        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote text-center mb-0">
              <p className="cyber-quotes">
                “Security isn't something you buy, it's something you do, and it
                takes talented people to do it right.”
              </p>
            </blockquote>
          </div>
        </div>

        <div className="card-contents border rounded-3 mt-5">
          <h5 className="mt-5 info-heading text-center">
            Mega Cyber Security Workshop by IODump-ZCOER
          </h5>
          <div className="justify-content-around">
            <Card></Card>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="#navbar-main" className="btn btn-circle">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </div>
  );
};
