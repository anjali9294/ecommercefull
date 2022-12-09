import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm  bg-body rounded px-5">
      <div className="container-fluid">
        <h4
          ame="navbar-brand ps-5"
          onClick={() => {
            navigate("/");
          }}
        >
          ECOMMERCE
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
            <li className="nav-item">
              <p
                className="nav-link active me-3 pt-3"
                aria-current="page"
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </p>
            </li>
            <li className="nav-item ">
              <p
                className="nav-link me-3 pt-3"
                aria-current="page"
                onClick={() => {
                  navigate("/products");
                }}
              >
                PRODUCTS
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link me-3 pt-3"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                CONTACT
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link me-3 pt-3"
                onClick={() => {
                  navigate("/about");
                }}
              >
                ABOUT
              </p>
            </li>
          </ul>
          <div className="d-flex me-2 nav-icon ">
            <form className="me-5 mt-2 ">
              <input
                className="form-control pe-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onClick={() => {
                  navigate("/search");
                }}
              />
            </form>
            <div className="profile text-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <p
                className="icon-title"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Profile
              </p>
            </div>

            <div className="bag text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              <p className="icon-title">Bag</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
