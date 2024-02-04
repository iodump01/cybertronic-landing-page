import React, { Component } from "react";
import { newTicket } from "./controller/ticketController";
import Meta from "./Meta";
import "./Registration.css";
export default class Registration extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      mobile: "",
      college: "",
      className: "",
      address: "",
      department: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('spinner').classList.remove('d-none')
    console.log(this.state.formData);
    newTicket(this.state.formData).then((res) => {
      console.log(res);
      if(res === false){
        document.getElementById('spinner').classList.add('d-none')
      }
    });
  };
  render() {
    return (
      <>
      <Meta title={"Cyber Tronic Registration Page - IODump"}/>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-3">
              <div className="card border-primary m-auto registration-card">
                <div className="card-body">
                  <h1 className="my-3 text-center ">Registration</h1>

                  <form
                    onSubmit={(e) => {
                      this.handleSubmit(e);
                    }}
                  >
                    <div className="mb-3">
                      <label htmlFor="Name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="Name"
                        className="form-control mb-3"
                        id="Name"
                        required
                        onChange={(e) => {
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              name: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="Email"
                        className="form-control mb-3"
                        id="Email"
                        required
                        onChange={(e) => {
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              email: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="Phone"
                        className="form-control mb-3"
                        pattern="[6789][0-9]{9}"
                        id="Phone"
                        required
                        onChange={(e) => {
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              mobile: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        College Name
                      </label>
                      <input
                        type="text"
                        name="CollegeName"
                        className="form-control mb-3"
                        required
                        onChange={(e) => {
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              college: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Department
                      </label>
                      <input
                        type="text"
                        name="department"
                        className="form-control mb-3"
                        required
                        onChange={(e) => {
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              department: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Class
                      </label>
                      <input
                        type="text"
                        name="Class"
                        className="form-control mb-3"
                        required
                        id="Class"
                        onChange={(e) => {
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              className: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        name="Address"
                        className="form-control mb-3"
                        id="Address"
                        required
                        onChange={(e) => {
                          this.setState({
                            formData: {
                              ...this.state.formData,
                              address: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-success">
                      Submit <i id="spinner" className="fa-solid fa-spinner fa-spin d-none"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
