import React from "react";

export default function TestHover() {
  const [isShown, setIsShown] = React.useState(false);
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item"  onMouseEnter={() => {
          setIsShown(true);
          setActive(1)
      }}
        onMouseLeave={() => {
            setIsShown(false);
            setActive(0)
        }}>
        <a className="nav-link" href="#">Pricing</a>
        {isShown && active == 1 && <div>
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>}
      </li>

      <li className="nav-item " onMouseEnter={() => {
          setIsShown(true);
          setActive(2)
      }}
        onMouseLeave={() => {
            setIsShown(false);
            setActive(0)
        }}>
        <a className="nav-link"   aria-haspopup="true" aria-expanded="false"
        >
          Dropdown link
        </a>
       {isShown &&  active == 2 && <div>
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>}
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}
