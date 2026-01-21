useEffect(() => {
  const url = `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_API_KEY}`;

  axios
    .get(url)
    .then((response) => {
      console.log("API response:", response.data);
      setArticles(response.data.results || []);
    })
    .catch((error) => {
      console.error("API error:", error);
    });
}, []);
