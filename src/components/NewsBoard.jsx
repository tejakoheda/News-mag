import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsdata.io/api/1/latest? 
  apikey=pub_07a1ebfa82514058a2684fcab51d015b
  &category=breaking,business,crime,domestic,sports`;

    axios.get(url).then((response) => {
      setArticles(response.data.results);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {articles.map((news, index) => (
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
