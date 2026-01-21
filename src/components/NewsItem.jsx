const NewsItem = ({ title, description, image_url, link }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={image_url || "https://via.placeholder.com/300"}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
