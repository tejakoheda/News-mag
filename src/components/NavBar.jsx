export const NavBar = ({ setCategory }) => {
  const categories = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => setCategory("top")}
          >
            <span className="badge bg-light text-dark fs-4">News Mag</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {categories.map((cat) => (
                <li className="nav-item" key={cat}>
                  <div
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => setCategory(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
