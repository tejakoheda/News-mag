const NewsItem = ({ title, description, image_url, link }) => {
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8xDFnCHxhFWEFzf1GiTIMw9YbI_1YRui0Q&s";

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 shadow"
      style={{ width: "345px" }}
    >
      <img
        src={image_url ? image_url : defaultImage}
        className="card-img-top"
        alt={title || "News image"}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">
          {title
            ? title.slice(0, 50) + (title.length > 50 ? "..." : "")
            : "No Title"}
        </h5>

        <p className="card-text">
          {description
            ? description.slice(0, 90) + (description.length > 90 ? "..." : "")
            : "No description available."}
        </p>

        <a
          href={link}
          className="btn btn-primary btn-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
