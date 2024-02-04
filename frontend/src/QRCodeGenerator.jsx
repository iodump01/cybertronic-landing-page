import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { getTicket } from "./controller/ticketController";
import "./QRCodeGenerator.css";
import { useParams } from "react-router-dom";
import Meta from "./Meta";

function QRCodeGenerator() {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getTicket(params.id).then((result) => {
      if (result) {
        setData(result);
      }
    });
  }, []);

  return (
    <Fragment>
      {data && data.name ? (
        <Fragment>
          <Meta title={`Ticket For ${data.name} - IODump`} />
          <div className="ticket-container text-center">
            <div className="ticket-region">
              <div className="text qrcode-heading">Cyber Tronic 2k22 Ticket</div>
              <div className="qrcode-region">
                <img
                  src={"/images/" + data.qrCode}
                  alt="QR Code"
                  className="qrcode-image"
                />
                <div className="text qrcode-ticketId">
                  <strong>ID : {data.ticketId}</strong>
                </div>
              </div>
              <div className="event-and-ticket-details-region">
                <div className="event-details-region p-2">
                  <div className="block">
                    <div>
                      <span className="heading text"> Event Name: </span>
                      <span className="text"> Cyber Tronic </span>
                    </div>
                    <div>
                      <span className="heading text"> Issued to: </span>
                      <span className="text"> {data.name} </span>
                    </div>
                    <div>
                      <span className="heading text"> College: </span>
                      <span className="text"> {data.college} </span>
                    </div>
                    <div>
                      <span className="heading text"> Date: </span>
                      <span className="text"> 30th Nov, 2022 </span>
                    </div>
                    <div>
                      <span className="heading text"> Time: </span>
                      <span className="text"> 10:00 PM - 04:00 PM </span>
                    </div>
                  </div>
                  <div className="block">
                    <div>
                      <span className="heading text"> Venue: </span>
                      <span className="text">CSMA Hall, Zeal College Of Engineering And Research, Narhe, Pune</span>
                    </div>
                  </div>
                </div>
                <div className="download-ticket-region">
                  <a
                    href={"/images/" + data.qrCode}
                    download="qrcode.png"
                    className="download-ticket-btn"
                    title="Download qr code"
                  >
                    SAVE TICKET
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Meta title={"No Ticket Found - IODump"} />
          <h2 className="text-center">No Ticket Found!</h2>
        </Fragment>
      )}
    </Fragment>
  );
}

export default QRCodeGenerator;
