import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apikey = "pub_07a1ebfa82514058a2684fcab51d015b";
    const url = `https://newsdata.io/api/1/latest?apikey=${apikey}&category=${category}&language=en`;

    axios
      .get(url)
      .then((response) => {
        setArticles(response.data.results);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, [category]);

  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center my-3">
        Latest{" "}
        <span className="badge bg-danger">{category.toUpperCase()} News</span>
      </h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {articles &&
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              image_url={news.image_url}
              link={news.link}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsBoard;
