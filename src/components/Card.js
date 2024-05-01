import React from "react";
// import Fetch from './Fetch';
const Card = (props) => {
  const {dataprp } = props;
  if (!dataprp) {
    return null;
  }
    const { picture,name, gender, phone } = dataprp;
  return (
    <div className="container" style={{ border: "15px solid gray", width:"36pc",height:"16pc"}}>
      <div
        className="card text-bg-danger mt-2"
        style={{
          height: "15pc",
          width: "35pc",
          margin: "auto",
          border: "2px solid black",
          boxShadow: " 4px 4px black",
          // margin: "50px",
        }}
      >
        <div className="card-body ">
          <div className="row">
            <div className="col-md-4">
              <img
                src={picture.large}
                className="card-img-left-center mx-2 my-4"
                alt="here"
                style={{ height: "10pc" }}
              />
            </div>
            <div className="col-md-8">
              <div
                className="mx-5 my-5"
                style={{
                  fontWeight: "700",
                  fontSize: "larger",
                  color: "black",
                }}
              >
                <h5
                  className="card-title "
                  style={{
                    fontWeight: "600",
                    fontSize: "larger",
                    color: "black",
                  }}
                >
                  <span>Name&nbsp;:&nbsp;{name.first}</span>&nbsp;
                  <span>{name.last}</span>
                </h5>
                <p className="card-text">Gender&nbsp;:&nbsp;{gender}</p>
                <p className="card-text">Phone&nbsp;:&nbsp;{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
