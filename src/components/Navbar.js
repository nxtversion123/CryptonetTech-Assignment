import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div
          className="container-fluid"
          style={{ background: "rgb(242, 242, 242)" }}
        >
          <a className="navbar-brand" href="#1">
            <img
              style={{ background: "#ccbdbd" }}
              src="https://media.licdn.com/dms/image/C4D0BAQGXzi4vl6P5wA/company-logo_200_200/0/1668908401404/cryptonet_technologies_logo?e=2147483647&v=beta&t=l2dTIXVzNekNdfs2PlkqcTQ4AW1zaqLkcIEBH5uo6o4"
              alt="Logo"
              width="60"
              height="50"
              className="d-inline-flex align-text-center"
            />
            <span
              className="blink"
              style={{
                color: "rgb(72, 168, 168)",
                fontSize: "larger",
                fontWeight: "700",
              }}
            >
              {" "}
              &nbsp;CryptonetTech.
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
