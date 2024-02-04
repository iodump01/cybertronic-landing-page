import React from "react";
import "./Cards.css";
export const Card = () => {
  return (
    <section className="event-detail-card team-section pt-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
            <div className="card-body p-4">
              <div className="member-profile position-absolute w-100 text-center">
                <img
                  className="rounded-circle mx-auto d-inline-block shadow-sm"
                  src="assets/CyberSecurityFundamentals.png"
                  alt="Cyber Security Fundamentals"
                />
              </div>
              <div className="card-text pt-1">
                <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                  Cyber Security Fundamentals
                </h5>
                <div className="text-center">
                  Learn about basics of cyber security, information system,
                  hacking.{" "}
                </div>
              </div>
            </div>
            <div className="card-footer theme-bg-primary border-0 text-center">
              <ul className="social-list list-inline mb-0 mx-auto">
                <li className="list-inline-item">IO Dump</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
            <div className="card-body p-4">
              <div className="member-profile position-absolute w-100 text-center">
                <img
                  className="rounded-circle mx-auto d-inline-block shadow-sm"
                  src="assets/CyberSecurityPracticals.png"
                  alt="Cyber Security Fundamentals"
                />
              </div>
              <div className="card-text pt-1">
                <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                  Cyber Security Practicals
                </h5>
                <div className="text-center">
                  Demonstration of Cyber Security Tools and hacking techniques
                </div>
              </div>
            </div>
            <div className="card-footer theme-bg-primary border-0 text-center">
              <ul className="social-list list-inline mb-0 mx-auto">
                <li className="list-inline-item">IO Dump</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
            <div className="card-body p-4">
              <div className="member-profile position-absolute w-100 text-center">
                <img
                  className="rounded-circle mx-auto d-inline-block shadow-sm"
                  src="assets/CyberGames.png"
                  alt="Cyber Security Fundamentals"
                />
              </div>
              <div className="card-text pt-1">
                <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                  Games, Fun and rewards
                </h5>
                <div className="text-center">Play Games and earn rewards</div>
              </div>
            </div>
            <div className="card-footer theme-bg-primary border-0 text-center">
              <ul className="social-list list-inline mb-0 mx-auto">
                <li className="list-inline-item">IO Dump</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
            <div className="card-body p-4">
              <div className="member-profile position-absolute w-100 text-center">
                <img
                  className="rounded-circle mx-auto d-inline-block shadow-sm"
                  src="assets/CyberSecuritystories.png"
                  alt="Cyber Security Fundamentals"
                />
              </div>
              <div className="card-text pt-1">
                <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                  Cyber Security stories
                </h5>
                <div>Listen amazing stories of Cyber Space</div>
              </div>
            </div>
            <div className="card-footer theme-bg-primary border-0 text-center">
              <ul className="social-list list-inline mb-0 mx-auto">
                <li className="list-inline-item">IO Dump</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
            <div className="card-body p-4">
              <div className="member-profile position-absolute w-100 text-center">
                <img
                  className="rounded-circle mx-auto d-inline-block shadow-sm"
                  src="assets/Precautionsandmeasures.png"
                  alt="Cyber Security Fundamentals"
                />
              </div>
              <div className="card-text pt-1">
                <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                  Precautions and measures
                </h5>
                <div className="text-center">
                  Learn how to protect yourself{" "}
                </div>
              </div>
            </div>
            <div className="card-footer theme-bg-primary border-0 text-center">
              <ul className="social-list list-inline mb-0 mx-auto">
                <li className="list-inline-item">IO Dump</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
